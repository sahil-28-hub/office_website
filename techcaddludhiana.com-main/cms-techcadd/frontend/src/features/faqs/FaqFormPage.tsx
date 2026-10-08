import { useEffect, useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Controller, useForm, useWatch } from 'react-hook-form'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'

import { ApiError } from '../../api'
import { AppearsOn } from '../../components/common/AppearsOn'
import { Button } from '../../components/common/Button'
import { Card, CardBody, CardHeader } from '../../components/common/Card'
import { Alert } from '../../components/feedback/Alert'
import { Spinner } from '../../components/feedback/Spinner'
import { Checkbox } from '../../components/form/Checkbox'
import { FormField } from '../../components/form/FormField'
import { Input } from '../../components/form/Input'
import { NumberInput } from '../../components/form/NumberInput'
import { Select } from '../../components/form/Select'
import { Textarea } from '../../components/form/Textarea'
import { FormFooter } from '../../components/layout/FormFooter'
import { PageHeader } from '../../components/layout/PageHeader'
import { useToast } from '../../hooks/useToast'
import { faqCategoriesApi } from '../../api/resources/faqCategories'
import { useUnsavedChanges } from '../../hooks/useUnsavedChanges'
import { STATUS_OPTIONS } from '../courses/courseSchema'
import { emptyFaq, faqCategoryOptions, faqSchema, type FaqFormValues } from './faqSchema'
import { faqHooks } from './useFaqs'

/** Not a category — the dropdown entry that opens the "new category" field. */
const NEW_CATEGORY = '__new__'

export default function FaqFormPage() {
  const { id } = useParams<{ id: string }>()
  const isEdit = Boolean(id)
  const navigate = useNavigate()
  const toast = useToast()

  // Categories are shared and small, so they load once and are cached under
  // their own key rather than being refetched per form.
  const categories = useQuery({
    queryKey: ['faq-categories'],
    queryFn: () => faqCategoriesApi.list(),
  })

  const existing = faqHooks.useOne(id)
  const create = faqHooks.useCreate()
  const update = faqHooks.useUpdate()

  const {
    control,
    register,
    handleSubmit,
    reset,
    setValue,
    setError,
    formState: { errors, isDirty, isSubmitting },
  } = useForm<FaqFormValues>({
    resolver: zodResolver(faqSchema),
    defaultValues: emptyFaq(),
    mode: 'onBlur',
  })

  useEffect(() => {
    if (!existing.data) return
    // The API returns the heading as `category`; the form edits it by name.
    reset({
      ...existing.data,
      categoryName: existing.data.categoryName ?? existing.data.category ?? '',
    } as FaqFormValues)
  }, [existing.data, reset])

  // Set once somebody picks "Add a new category…", which swaps the dropdown
  // for a text field.
  const [addingCategory, setAddingCategory] = useState(false)

  const blocker = useUnsavedChanges(isDirty && !isSubmitting)
  const saving = create.isPending || update.isPending

  // Feeds the "where this appears" note — it shows the live URL, which moves
  // with the slug as it is typed.
  const watched = useWatch({ control }) as Record<string, unknown>

  const categoryOptions = useMemo(
    () => [
      ...faqCategoryOptions(
        (categories.data?.items ?? []).map((category) => category.name),
        addingCategory ? undefined : (watched.categoryName as string | undefined),
      ),
      { value: NEW_CATEGORY, label: 'Add a new category…' },
    ],
    [categories.data, watched.categoryName, addingCategory],
  )

  /**
   * Publishes and saves in one action.
   *
   * Setting the status select and then pressing Save is two steps that read as
   * one, and the step people miss is the first.
   */
  const publish =
    watched.status === 'published'
      ? undefined
      : () => {
          setValue('status', 'published', { shouldDirty: true })
          void handleSubmit(onSubmit)()
        }

  async function onSubmit(values: FaqFormValues) {
    try {
      if (isEdit && id) {
        await update.mutateAsync({ id, input: values })
        toast.success('Question updated.')
      } else {
        await create.mutateAsync(values)
        toast.success('Question added.')
      }
      navigate('/faqs')
    } catch (error) {
      if (error instanceof ApiError && error.fieldErrors) {
        for (const [field, message] of Object.entries(error.fieldErrors)) {
          setError(field as keyof FaqFormValues, { message })
        }
        toast.error('Please fix the highlighted fields.')
        return
      }
      toast.error('Could not save this question', {
        description: error instanceof Error ? error.message : 'Please try again.',
      })
    }
  }

  if (isEdit && existing.isLoading) {
    return (
      <div className="flex items-center gap-2 p-8 text-sm text-slate-500">
        <Spinner />
        Loading question…
      </div>
    )
  }

  if (isEdit && existing.error) {
    return (
      <Alert tone="error" title="Could not load this question">
        <p>{(existing.error as Error).message}</p>
        <Link to="/faqs" className="mt-3 inline-block">
          <Button variant="secondary" size="sm">
            Back to FAQ
          </Button>
        </Link>
      </Alert>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 pb-24">
      <PageHeader
        title={isEdit ? 'Edit Question' : 'Add Question'}
        breadcrumb={[{ label: 'FAQ', to: '/faqs' }, { label: isEdit ? 'Edit' : 'New' }]}
      />

      <AppearsOn module="faqs" record={watched} saved={isEdit} />

      {Object.keys(errors).length > 0 && (
        <Alert tone="error" title="This question could not be saved">
          Check the highlighted fields below and try again.
        </Alert>
      )}

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <Card flush>
            <CardHeader title="Question and answer" />
            <CardBody className="space-y-5">
              <FormField label="Question" required error={errors.question?.message}>
                <Input
                  {...register('question')}
                  placeholder="e.g. Do you offer placement assistance?"
                />
              </FormField>

              <FormField
                label="Answer"
                required
                description="Plain text. Keep it to what someone needs on the phone."
                error={errors.answer?.message}
              >
                <Textarea {...register('answer')} rows={6} />
              </FormField>
            </CardBody>
          </Card>
        </div>

        <div className="space-y-6">
          <Card flush>
            <CardHeader title="Placement" />
            <CardBody className="space-y-5">
              {/* Drafts are the default and never reach the website, so a
                  finished question saved without touching this looked
                  lost — "saved" in the CMS, absent on the site. Say so
                  while it is still a draft. */}
              <FormField
                label="Status"
                description={
                  watched.status === 'published'
                    ? 'Live on the website once saved.'
                    : 'Not shown on the website. Set to Published to make it visible.'
                }
              >
                <Select {...register('status')} options={STATUS_OPTIONS} />
              </FormField>

              <FormField
                label="Category"
                required
                description="Where this question appears on the FAQ page."
                error={errors.categoryName?.message}
              >
                {/*
                  The website's topics, plus whatever else is already in use.

                  A dropdown so the existing spelling is the only easy choice;
                  the last option opens a text field, because there is no
                  separate category screen to make a new heading on.
                */}
                {addingCategory ? (
                  <div className="space-y-1.5">
                    <Input
                      {...register('categoryName')}
                      placeholder="New category name"
                      autoComplete="off"
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setAddingCategory(false)
                        setValue('categoryName', '', { shouldDirty: true })
                      }}
                      className="text-xs font-medium text-primary-600 hover:text-primary-700"
                    >
                      Choose an existing category
                    </button>
                  </div>
                ) : (
                  <Controller
                    control={control}
                    name="categoryName"
                    render={({ field }) => (
                      <Select
                        ref={field.ref}
                        name={field.name}
                        value={field.value ?? ''}
                        onBlur={field.onBlur}
                        onChange={(event) => {
                          if (event.target.value === NEW_CATEGORY) {
                            setAddingCategory(true)
                            field.onChange('')
                            return
                          }
                          field.onChange(event.target.value)
                        }}
                        options={categoryOptions}
                        placeholder="Choose a category"
                      />
                    )}
                  />
                )}
              </FormField>

              <FormField
                label="Order"
                description="Lower numbers come first within the category."
                error={errors.order?.message}
              >
                <Controller
                  control={control}
                  name="order"
                  render={({ field }) => (
                    <NumberInput
                      value={field.value ?? 0}
                      onChange={(value) => field.onChange(value === '' ? 0 : value)}
                      min={0}
                    />
                  )}
                />
              </FormField>

              <Controller
                control={control}
                name="featured"
                render={({ field }) => (
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    label="Show on the homepage"
                    description="The homepage shows a short selection, not every question."
                  />
                )}
              />
            </CardBody>
          </Card>
        </div>
      </div>

      <FormFooter
        onPublish={publish}
        cancelTo="/faqs"
        submitLabel={isEdit ? 'Save changes' : 'Add question'}
        saving={saving}
        dirty={isDirty}
        blocker={blocker}
        entityLabel="question"
      />
    </form>
  )
}
