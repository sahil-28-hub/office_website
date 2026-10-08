/* AI & Data track, plus the generative-AI courses that appear in the
   AI menu. See ./shared.js for the factory. */

/* Three of the courses here carry long-form editorial copy the others
   do not. Each lives in its own file because any one of them is longer
   than several seeds together — see ./power-bi-copy.js,
   ./data-science-copy.js and ./deep-learning-copy.js */
import {
  PBI_OVERVIEW,
  PBI_JOINERS,
  PBI_NARRATIVE,
  PBI_FAQS
} from './power-bi-copy'

import {
  DS_OVERVIEW,
  DS_JOINERS,
  DS_NARRATIVE,
  DS_FAQS
} from './data-science-copy'

import {
  DL_OVERVIEW,
  DL_JOINERS,
  DL_NARRATIVE,
  DL_TESTIMONIALS,
  DL_FAQS
} from './deep-learning-copy'
/* The Tableau page carries long-form editorial copy the other twelve
   courses here do not — see ./tableau-copy.js */
import {
  TABLEAU_OVERVIEW,
  TABLEAU_JOINERS,
  TABLEAU_NARRATIVE,
  TABLEAU_FAQS
} from './tableau-copy'
import {
  DATA_ANALYTICS_OVERVIEW,
  DATA_ANALYTICS_JOINERS,
  DATA_ANALYTICS_NARRATIVE,
  DATA_ANALYTICS_FAQS
} from './data-analytics-copy'
import {
  ML_OVERVIEW,
  ML_JOINERS,
  ML_NARRATIVE,
  ML_FAQS
} from './machine-learning-copy'
import {
  AI_OVERVIEW,
  AI_JOINERS,
  AI_NARRATIVE,
  AI_FAQS
} from './artificial-intelligence-copy'

export const AI_DATA = [
  {
    slug: 'artificial-intelligence',
    name: 'Artificial Intelligence Course',
    short: 'Artificial Intelligence',
    subject: 'AI',
    category: 'AI & Data',
    eyebrow: 'From Python to production AI',
    duration: '6 months',
    headline: ['Understand AI.', 'Then build with it.'],
    sub: 'Python, machine learning, neural networks, computer vision, NLP and deployment — a complete route into AI engineering, not a tour of buzzwords.',
    projectCount: 'Six shipped',
    highlights: [
      'Maths explained through code, not lectures',
      'Vision and language projects you can demo',
      'Models deployed as working APIs'
    ],
    code: {
      lang: 'py',
      file: 'train.py',
      lines: [
        'from sklearn.ensemble import RandomForestClassifier',
        '',
        'model = RandomForestClassifier(n_estimators=300)',
        'model.fit(X_train, y_train)',
        '',
        'print(model.score(X_test, y_test))'
      ],
      command: 'python train.py',
      output: '0.94'
    },
    badges: ['PyTorch', 'OpenCV', 'NLP', 'MLOps'],
    modules: [
      {
        title: 'Python & Maths for AI',
        tag: 'Weeks 1–4',
        description: 'The Python and the linear algebra, statistics and calculus you actually need — taught through code.',
        skills: ['Python essentials', 'NumPy arrays', 'Linear algebra', 'Probability & statistics', 'Gradients intuition'],
        tech: ['Python', 'NumPy', 'Jupyter', 'Matplotlib'],
        outcome: 'A notebook that implements gradient descent from scratch and plots it converging.'
      },
      {
        title: 'Machine Learning Foundations',
        tag: 'Weeks 5–9',
        description: 'Supervised and unsupervised learning, and how to tell a good model from a lucky one.',
        skills: ['Regression & classification', 'Decision trees & ensembles', 'Clustering', 'Feature engineering', 'Cross-validation', 'Model metrics'],
        tech: ['scikit-learn', 'Pandas', 'Seaborn'],
        outcome: 'A tuned classifier with an honest evaluation report and a confusion matrix you can explain.'
      },
      {
        title: 'Neural Networks & Deep Learning',
        tag: 'Weeks 10–14',
        description: 'Backpropagation, architectures and training deep models without guessing at the settings.',
        skills: ['Perceptrons & MLPs', 'Backpropagation', 'CNNs', 'RNNs & attention', 'Regularisation', 'Transfer learning'],
        tech: ['PyTorch', 'TensorFlow', 'Keras', 'CUDA'],
        outcome: 'A convolutional network trained on your own dataset, with training curves you can read.'
      },
      {
        title: 'Computer Vision & NLP',
        tag: 'Weeks 15–19',
        description: 'The two applied fields that account for most AI work — images and language.',
        skills: ['Image preprocessing', 'Object detection', 'Text preprocessing', 'Embeddings', 'Transformers', 'Fine-tuning'],
        tech: ['OpenCV', 'YOLO', 'Hugging Face', 'spaCy'],
        outcome: 'A detection model and a fine-tuned language model, both running on your own data.'
      },
      {
        title: 'Deployment & MLOps',
        tag: 'Weeks 20–24',
        description: 'Getting a model out of a notebook and keeping it working once real traffic arrives.',
        skills: ['Model serving', 'FastAPI', 'Docker', 'Experiment tracking', 'Monitoring & drift', 'Responsible AI'],
        tech: ['FastAPI', 'Docker', 'MLflow', 'Streamlit'],
        outcome: 'Your capstone model deployed behind a documented API with monitoring in place.'
      }
    ],
    technologies: [
      { name: 'PyTorch', note: 'Deep learning framework' },
      { name: 'TensorFlow', note: 'Production ML' },
      { name: 'scikit-learn', note: 'Classical machine learning' },
      { name: 'OpenCV', note: 'Computer vision' },
      { name: 'Hugging Face', note: 'Pretrained models' },
      { name: 'Pandas', note: 'Data handling' },
      { name: 'FastAPI', note: 'Model serving' },
      { name: 'Docker', note: 'Reproducible deploys' }
    ],
    careers: [
      { icon: 'bot', title: 'AI Engineer', text: 'Build, evaluate and ship models as part of a product team.' },
      { icon: 'chart', title: 'Machine Learning Engineer', text: 'Take models from experiment to reliable production service.' },
      { icon: 'spark', title: 'Computer Vision Engineer', text: 'Work on detection, recognition and image understanding systems.' },
      { icon: 'code', title: 'NLP Engineer', text: 'Build search, classification and language features on text data.' },
      { icon: 'database', title: 'Data Scientist', text: 'Answer business questions with models and communicate the findings.' },
      { icon: 'career', title: 'AI Research Assistant', text: 'Support applied research with implementation and experimentation.' }
    ],
    featured: {
      title: 'Real-Time Defect Detection System',
      kicker: 'Capstone project',
      text: 'A production-shaped vision system: a custom-labelled dataset, a fine-tuned detection model, a FastAPI inference service, a live camera dashboard and drift monitoring. You handle the data collection, the training runs, the trade-offs and the deployment.',
      tags: ['PyTorch', 'YOLO', 'FastAPI', 'Docker'],
      difficulty: 'Advanced',
      status: 'Deployed',
      lines: [
        '@app.post("/predict")',
        'async def predict(file: UploadFile):',
        '    image = await read_image(file)',
        '    boxes = model(image)',
        '',
        '    return {"defects": len(boxes),',
        '            "boxes": boxes.tolist()}'
      ]
    },
    projects: [
      { title: 'Handwritten Digit Classifier', text: 'A first neural network trained end to end on MNIST.', tags: ['Keras', 'CNN'], size: 'sm' },
      { title: 'Face Recognition Attendance', text: 'Camera-based attendance with embeddings and matching.', tags: ['OpenCV', 'dlib'], size: 'lg' },
      { title: 'Sentiment Analyser', text: 'Fine-tuned transformer classifying real review text.', tags: ['Transformers'], size: 'sm' },
      { title: 'Price Prediction Model', text: 'Regression with feature engineering and validation.', tags: ['sklearn'], size: 'sm' },
      { title: 'Chatbot with RAG', text: 'A question-answering bot grounded in your own documents.', tags: ['LangChain', 'FAISS'], size: 'lg' }
    ],
    audience: 'B.Tech, BCA, MCA and B.Sc. students, graduates from any quantitative background and working developers moving into AI. Comfort with basic maths helps; the course rebuilds it either way.',

    heroArt: '/courses/artificial-intelligence-hero.webp',
    heroArtSize: [1587, 800],
    heroArtAlt:
      'An artificial intelligence workspace — a model in training, the data behind it and the tooling the course builds on',

    overviewTitle: AI_OVERVIEW.title,
    overviewLead: AI_OVERVIEW.lead,
    overviewBody: AI_OVERVIEW.body,

    joiners: AI_JOINERS,
    narrative: AI_NARRATIVE,

    /* no `testimonials`: the copy that arrived carried twelve reviews
       its own author marked as samples, to be published only after
       verification with the actual students. See
       artificial-intelligence-copy.js. */

    ownFaqs: true,
    faqs: AI_FAQS,

    enquireEyebrow: 'Talk to our experts',
    enquireTitle: 'Build practical AI skills with techcadd',
    enquireText:
      'Ready to start your journey into Artificial Intelligence? Learn practical AI concepts, Python programming, Machine Learning, Deep Learning, Generative AI, and modern AI tools through a structured, student-focused approach — whether you are a 12th-pass student, graduate, job seeker, working professional, or technology enthusiast.'
  },

  {
    slug: 'machine-learning',
    heroArt: '/courses/machine-learning-hero.webp',
    heroArtSize: [1200, 800],
    heroArtAlt:
      'A machine learning pipeline — preprocessing, feature engineering, ' +
      'model training and evaluation around a trained model',
    name: 'Machine Learning Course',
    short: 'Machine Learning',
    subject: 'machine learning',
    category: 'AI & Data',
    eyebrow: 'Models that hold up outside the notebook',
    duration: '4–5 months',
    headline: ['Train models.', 'Trust the results.'],
    sub: 'Supervised and unsupervised learning, feature engineering, evaluation and deployment — with the statistical discipline that separates a real model from an overfitted one.',
    projectCount: 'Five shipped',
    highlights: [
      'Every algorithm implemented before it is imported',
      'Evaluation taught as seriously as training',
      'Models deployed, not left in a notebook'
    ],
    code: {
      lang: 'py',
      file: 'pipeline.py',
      lines: [
        'pipe = Pipeline([',
        '    ("scale", StandardScaler()),',
        '    ("model", GradientBoostingClassifier())',
        '])',
        '',
        'scores = cross_val_score(pipe, X, y, cv=5)'
      ],
      command: 'python pipeline.py',
      output: 'mean ROC-AUC 0.91 (+/- 0.02)'
    },
    badges: ['scikit-learn', 'XGBoost', 'MLflow', 'Pandas'],
    modules: [
      {
        title: 'Python, Data & Statistics',
        tag: 'Weeks 1–3',
        description: 'Loading, cleaning and understanding data before a single model is fitted.',
        skills: ['Pandas operations', 'Data cleaning', 'Descriptive statistics', 'Distributions', 'Hypothesis testing', 'Visualisation'],
        tech: ['Python', 'Pandas', 'Seaborn', 'Jupyter'],
        outcome: 'An exploratory analysis of a messy real dataset with defensible conclusions.'
      },
      {
        title: 'Supervised Learning',
        tag: 'Weeks 4–8',
        description: 'Regression and classification, from linear models to gradient boosting.',
        skills: ['Linear & logistic regression', 'Decision trees', 'Random forests', 'Gradient boosting', 'SVMs', 'Regularisation'],
        tech: ['scikit-learn', 'XGBoost', 'LightGBM'],
        outcome: 'A benchmarked set of models on one problem, with a reasoned pick of the winner.'
      },
      {
        title: 'Unsupervised Learning & Feature Engineering',
        tag: 'Weeks 9–12',
        description: 'Structure without labels, and the feature work that usually beats a fancier algorithm.',
        skills: ['K-means & hierarchical clustering', 'PCA', 'Anomaly detection', 'Encoding strategies', 'Feature selection', 'Imbalanced data'],
        tech: ['scikit-learn', 'imbalanced-learn', 'UMAP'],
        outcome: 'A customer segmentation with clusters you can describe to a business audience.'
      },
      {
        title: 'Evaluation & Model Selection',
        tag: 'Weeks 13–15',
        description: 'How models fail quietly, and the discipline that catches it before production does.',
        skills: ['Cross-validation', 'Precision, recall & ROC', 'Leakage detection', 'Hyperparameter search', 'Calibration', 'Explainability'],
        tech: ['scikit-learn', 'Optuna', 'SHAP'],
        outcome: 'A model card documenting metrics, limitations and the features driving predictions.'
      },
      {
        title: 'Deployment & Monitoring',
        tag: 'Weeks 16–18',
        description: 'Serving predictions, tracking experiments and noticing when a model goes stale.',
        skills: ['Model serialisation', 'REST inference APIs', 'Experiment tracking', 'Batch vs real time', 'Drift monitoring'],
        tech: ['FastAPI', 'MLflow', 'Docker', 'Streamlit'],
        outcome: 'Your capstone model served through an API with tracked experiments behind it.'
      }
    ],
    technologies: [
      { name: 'scikit-learn', note: 'Core ML library' },
      { name: 'XGBoost', note: 'Gradient boosting' },
      { name: 'Pandas', note: 'Data wrangling' },
      { name: 'NumPy', note: 'Numerical computing' },
      { name: 'SHAP', note: 'Model explainability' },
      { name: 'MLflow', note: 'Experiment tracking' },
      { name: 'FastAPI', note: 'Serving predictions' },
      { name: 'Streamlit', note: 'Model demos' }
    ],
    careers: [
      { icon: 'chart', title: 'Machine Learning Engineer', text: 'Build and maintain the models a product depends on.' },
      { icon: 'database', title: 'Data Scientist', text: 'Frame business problems as models and defend the results.' },
      { icon: 'bot', title: 'ML Ops Engineer', text: 'Own pipelines, retraining and monitoring in production.' },
      { icon: 'code', title: 'Applied Scientist', text: 'Take research techniques and make them work on real data.' },
      { icon: 'server', title: 'Risk / Fraud Analyst', text: 'Apply models to detection problems in finance and operations.' },
      { icon: 'spark', title: 'AI Engineer', text: 'Extend into deep learning and generative systems.' }
    ],
    featured: {
      title: 'Customer Churn Prediction Engine',
      kicker: 'Capstone project',
      text: 'An end-to-end churn system on a real telecom dataset: leakage-safe feature engineering, class-imbalance handling, a benchmarked model set, SHAP explanations for every prediction, a retraining pipeline and a served API with drift alerts.',
      tags: ['XGBoost', 'SHAP', 'MLflow', 'FastAPI'],
      difficulty: 'Advanced',
      status: 'Portfolio ready',
      lines: [
        'explainer = shap.TreeExplainer(model)',
        'values = explainer.shap_values(X_valid)',
        '',
        'top = pd.Series(',
        '    np.abs(values).mean(axis=0),',
        '    index=X_valid.columns',
        ').nlargest(10)'
      ]
    },
    projects: [
      { title: 'House Price Regression', text: 'Feature engineering on a classic tabular problem.', tags: ['sklearn'], size: 'sm' },
      { title: 'Spam Classifier', text: 'Text features, naive Bayes and a precision/recall trade-off.', tags: ['NLP', 'sklearn'], size: 'lg' },
      { title: 'Customer Segmentation', text: 'Clustering with a business-readable interpretation.', tags: ['K-means', 'PCA'], size: 'sm' },
      { title: 'Loan Default Model', text: 'Imbalanced classification with cost-sensitive metrics.', tags: ['XGBoost'], size: 'sm' },
      { title: 'Recommendation Engine', text: 'Collaborative filtering with offline evaluation.', tags: ['Surprise'], size: 'lg' }
    ],

    overviewTitle: ML_OVERVIEW.title,
    overviewLead: ML_OVERVIEW.lead,
    overviewBody: ML_OVERVIEW.body,

    joiners: ML_JOINERS,
    narrative: ML_NARRATIVE,

    /* no `testimonials`: the copy that arrived carried ten reviews
       attributed to "Student Name", under its own author's
       instruction to avoid publishing invented reviews as genuine
       student experiences. See machine-learning-copy.js. */

    ownFaqs: true,
    faqs: ML_FAQS,

    enquireEyebrow: 'Talk to our experts',
    enquireTitle: 'Start your Machine Learning journey',
    enquireText:
      'Ready to learn Machine Learning in Ludhiana? Build practical skills in Python, data analysis, machine learning algorithms, model development and AI fundamentals — whether you are a 12th-pass student, graduate, job seeker, college student, or working professional.'
  },

  {
    slug: 'deep-learning',
    heroArt: '/courses/deep-learning-hero.webp',
    heroArtSize: [1200, 800],
    heroArtAlt:
      'A neural network rendered as a lit brain beside a training notebook, ' +
      'a database stack, a chip and a robot',
    name: 'Deep Learning Course',
    short: 'Deep Learning',
    subject: 'deep learning',
    category: 'AI & Data',
    eyebrow: 'Neural networks, properly understood',
    duration: '4–5 months',
    headline: ['Build networks.', 'Know why they work.'],
    sub: 'CNNs, RNNs, transformers and generative models in PyTorch — with the training craft that turns an architecture diagram into a model that actually converges.',
    projectCount: 'Five shipped',
    highlights: [
      'Backpropagation written by hand before any framework',
      'GPU training with real datasets',
      'Transformers built from their components'
    ],
    code: {
      lang: 'py',
      file: 'model.py',
      lines: [
        'class Net(nn.Module):',
        '    def __init__(self):',
        '        super().__init__()',
        '        self.conv = nn.Conv2d(3, 32, 3)',
        '',
        '    def forward(self, x):',
        '        return F.relu(self.conv(x))'
      ],
      command: 'python train.py --epochs 30',
      output: 'val_acc 0.962'
    },
    badges: ['PyTorch', 'CNN', 'Transformers', 'GANs'],
    modules: [
      {
        title: 'Foundations & Autograd',
        tag: 'Weeks 1–3',
        description: 'Tensors, gradients and a neural network written from first principles in NumPy.',
        skills: ['Tensor operations', 'Chain rule', 'Manual backpropagation', 'Loss functions', 'Optimisers'],
        tech: ['NumPy', 'PyTorch', 'Jupyter'],
        outcome: 'A two-layer network you wrote without a framework, matching PyTorch on the same data.'
      },
      {
        title: 'Training Deep Networks',
        tag: 'Weeks 4–7',
        description: 'The practical craft: initialisation, normalisation, schedules and reading a training curve.',
        skills: ['Weight initialisation', 'Batch normalisation', 'Dropout', 'Learning-rate schedules', 'Early stopping', 'Debugging training'],
        tech: ['PyTorch', 'TensorBoard', 'CUDA'],
        outcome: 'A stable training setup with logged experiments and a curve you can diagnose.'
      },
      {
        title: 'Computer Vision Architectures',
        tag: 'Weeks 8–11',
        description: 'Convolutions, residual networks, augmentation and transfer learning.',
        skills: ['CNN design', 'ResNet & EfficientNet', 'Data augmentation', 'Transfer learning', 'Segmentation', 'Detection heads'],
        tech: ['PyTorch', 'torchvision', 'Albumentations'],
        outcome: 'A fine-tuned vision model beating a from-scratch baseline on your own dataset.'
      },
      {
        title: 'Sequences & Transformers',
        tag: 'Weeks 12–15',
        description: 'From RNNs to self-attention, built up component by component.',
        skills: ['RNN & LSTM', 'Embeddings', 'Self-attention', 'Positional encoding', 'Encoder-decoder', 'Fine-tuning'],
        tech: ['PyTorch', 'Hugging Face', 'tokenizers'],
        outcome: 'A transformer block written from scratch, then a fine-tuned pretrained model.'
      },
      {
        title: 'Generative Models & Deployment',
        tag: 'Weeks 16–18',
        description: 'Autoencoders, GANs and diffusion intuition — then serving a model efficiently.',
        skills: ['Autoencoders', 'GAN training', 'Diffusion basics', 'Quantisation', 'ONNX export', 'Inference serving'],
        tech: ['PyTorch', 'ONNX', 'FastAPI', 'Gradio'],
        outcome: 'A generative capstone with a live demo interface anyone can try.'
      }
    ],
    technologies: [
      { name: 'PyTorch', note: 'Primary framework' },
      { name: 'TensorFlow', note: 'Production alternative' },
      { name: 'Hugging Face', note: 'Pretrained models' },
      { name: 'torchvision', note: 'Vision datasets & models' },
      { name: 'TensorBoard', note: 'Training visualisation' },
      { name: 'ONNX', note: 'Portable inference' },
      { name: 'CUDA', note: 'GPU acceleration' },
      { name: 'Gradio', note: 'Model demos' }
    ],
    careers: [
      { icon: 'bot', title: 'Deep Learning Engineer', text: 'Design and train the models behind vision and language products.' },
      { icon: 'spark', title: 'Computer Vision Engineer', text: 'Ship detection, segmentation and recognition systems.' },
      { icon: 'code', title: 'NLP Engineer', text: 'Fine-tune and serve language models for real tasks.' },
      { icon: 'chart', title: 'AI Research Engineer', text: 'Reproduce papers and turn them into working implementations.' },
      { icon: 'server', title: 'ML Platform Engineer', text: 'Build the training and inference infrastructure a team depends on.' },
      { icon: 'career', title: 'Applied AI Developer', text: 'Integrate deep models into products that people use.' }
    ],
    featured: {
      title: 'Medical Image Segmentation',
      kicker: 'Capstone project',
      text: 'A U-Net trained to segment scans, with heavy augmentation, class-imbalance handling, mixed-precision GPU training, ablation experiments and a Gradio demo. You justify every architectural choice against a measured baseline.',
      tags: ['PyTorch', 'U-Net', 'CUDA', 'Gradio'],
      difficulty: 'Advanced',
      status: 'Portfolio ready',
      lines: [
        'loss = dice_loss(pred, mask) + bce(pred, mask)',
        '',
        'scaler.scale(loss).backward()',
        'scaler.step(optimizer)',
        'scaler.update()',
        'optimizer.zero_grad(set_to_none=True)'
      ]
    },
    projects: [
      { title: 'Image Classifier', text: 'A CNN trained on CIFAR with augmentation and scheduling.', tags: ['PyTorch'], size: 'sm' },
      { title: 'Style Transfer', text: 'Neural style transfer with a tunable content/style balance.', tags: ['VGG'], size: 'lg' },
      { title: 'Text Generator', text: 'A character-level model trained on a corpus you choose.', tags: ['LSTM'], size: 'sm' },
      { title: 'Face GAN', text: 'A DCGAN trained to generate faces, with FID tracking.', tags: ['GAN'], size: 'sm' },
      { title: 'Speech Recognition', text: 'Fine-tuned audio model transcribing real recordings.', tags: ['Whisper'], size: 'lg' }
    ],
    prerequisite: 'Basic Python and comfort with school-level maths. The course rebuilds the linear algebra and calculus you need as it goes.',

    audience:
      '12th-pass students, college students from BCA, B.Sc. IT, B.Tech, BBA and MCA, graduates and freshers, job seekers changing career into AI, and freelancers or entrepreneurs building AI-based products.',

    /* Written as a local landing page. Its copy names Ludhiana
       throughout, which is also the default centre, so nothing here
       has to override `city`. */
    overviewTitle: DL_OVERVIEW.title,
    overviewLead: DL_OVERVIEW.lead,
    overviewBody: DL_OVERVIEW.body,

    /* replaces the six generic groups the factory writes, so the page
       answers "who can do this course" once, in its own words */
    joiners: DL_JOINERS,
    narrative: DL_NARRATIVE,

    /* UNVERIFIED quotes carrying named colleges and outcomes. Read the
       banner above DL_TESTIMONIALS in ./deep-learning-copy.js before
       this page goes live. Deleting this one line falls back to the
       generic quotes in shared.js.

       (These replace the earlier set supplied for this page, which was
       labelled sample copy and — separately — was entirely about
       digital marketing rather than machine learning.) */
    testimonials: DL_TESTIMONIALS,

    /* a complete question set of its own, so the standard seven the
       factory writes are replaced rather than appended to */
    ownFaqs: true,
    faqs: DL_FAQS,

    enquireEyebrow: 'Request a callback',
    enquireTitle: 'Ready to start your deep learning career?',
    enquireText:
      'Speak with the techcadd team before enrolling — confirm the current course duration, batch schedule, fees, curriculum, tools covered and career-support facilities directly with the centre.'
  },

  {
    slug: 'data-science',
    heroArt: '/courses/data-science-hero.webp',
    heroArtSize: [798, 532],
    heroArtAlt:
      'A data science workspace — pandas, NumPy, scikit-learn and ' +
      'TensorFlow around a notebook of charts and a model in training',
    name: 'Data Science Course',
    short: 'Data Science',
    subject: 'data science',
    category: 'AI & Data',
    eyebrow: 'Data to decision, end to end',
    duration: '6 months',
    heroArt: '/courses/data-science.png',
    heroArtSize: [798, 532],
    heroArtAlt:
      'A data science workspace — a notebook, a model and the charts the analysis is read from',
    headline: ['Turn data', 'into decisions.'],
    sub: 'Python, SQL, statistics, machine learning and storytelling — the complete route from a raw export to a recommendation a business will act on.',
    projectCount: 'Six shipped',
    highlights: [
      'SQL and Python treated as equal partners',
      'Statistics you can actually defend in a meeting',
      'Every project ends in a presented recommendation'
    ],
    code: {
      lang: 'py',
      file: 'analysis.py',
      lines: [
        'df = pd.read_sql(query, engine)',
        '',
        'monthly = (df.groupby("month")',
        '             .agg(revenue=("amount", "sum"))',
        '             .pct_change())',
        '',
        'print(monthly.tail())'
      ],
      command: 'python analysis.py',
      output: 'revenue +18.4% MoM'
    },
    badges: ['Python', 'SQL', 'Pandas', 'Power BI'],
    modules: [
      {
        title: 'Python & SQL for Data',
        tag: 'Weeks 1–5',
        description: 'The two languages every data role assumes you already have.',
        skills: ['Python essentials', 'Pandas operations', 'SQL joins & aggregation', 'Window functions', 'Query optimisation', 'Data extraction'],
        tech: ['Python', 'Pandas', 'PostgreSQL', 'Jupyter'],
        outcome: 'A reproducible pipeline that pulls from a database and outputs a clean dataset.'
      },
      {
        title: 'Statistics & Experimentation',
        tag: 'Weeks 6–10',
        description: 'Inference, significance and A/B testing — how to know whether a difference is real.',
        skills: ['Descriptive statistics', 'Distributions', 'Confidence intervals', 'Hypothesis testing', 'A/B test design', 'Sample sizing'],
        tech: ['SciPy', 'statsmodels', 'Seaborn'],
        outcome: 'A complete A/B test analysis with a decision and a stated confidence level.'
      },
      {
        title: 'Data Cleaning & Feature Work',
        tag: 'Weeks 11–14',
        description: 'The 70% of the job nobody advertises: messy data, missing values and hidden bias.',
        skills: ['Missing data strategies', 'Outlier handling', 'Encoding', 'Time-series handling', 'Data validation', 'Pipeline design'],
        tech: ['Pandas', 'Great Expectations', 'Airflow basics'],
        outcome: 'A validated data pipeline that fails loudly instead of producing quiet garbage.'
      },
      {
        title: 'Machine Learning for Analysts',
        tag: 'Weeks 15–19',
        description: 'Predictive modelling aimed at business questions rather than leaderboard scores.',
        skills: ['Regression & classification', 'Clustering', 'Forecasting', 'Model evaluation', 'Explainability', 'Business framing'],
        tech: ['scikit-learn', 'Prophet', 'SHAP'],
        outcome: 'A forecast and a segmentation, each tied to a specific decision a manager could make.'
      },
      {
        title: 'Visualisation & Communication',
        tag: 'Weeks 20–24',
        description: 'Dashboards, reports and the harder skill of making a room agree with your analysis.',
        skills: ['Chart selection', 'Dashboard design', 'Power BI & Tableau', 'Executive summaries', 'Presenting findings', 'Stakeholder questions'],
        tech: ['Power BI', 'Tableau', 'Plotly', 'Streamlit'],
        outcome: 'Your capstone presented as a live dashboard plus a five-slide recommendation.'
      }
    ],
    technologies: [
      { name: 'Python', note: 'Analysis & modelling' },
      { name: 'SQL', note: 'Querying data at source' },
      { name: 'Pandas', note: 'Dataframes' },
      { name: 'scikit-learn', note: 'Predictive models' },
      { name: 'Power BI', note: 'Business dashboards' },
      { name: 'Tableau', note: 'Visual analytics' },
      { name: 'Excel', note: 'Still everywhere' },
      { name: 'Streamlit', note: 'Shareable data apps' }
    ],
    careers: [
      { icon: 'database', title: 'Data Scientist', text: 'Own analysis and modelling for a business area end to end.' },
      { icon: 'chart', title: 'Data Analyst', text: 'Answer operational questions with SQL, dashboards and clear writing.' },
      { icon: 'bot', title: 'Business Intelligence Analyst', text: 'Build the reporting layer a company runs its decisions on.' },
      { icon: 'code', title: 'Analytics Engineer', text: 'Model and transform data so everyone else can trust it.' },
      { icon: 'spark', title: 'Product Analyst', text: 'Measure features, run experiments and guide the roadmap.' },
      { icon: 'career', title: 'Machine Learning Engineer', text: 'Move into building and serving models full time.' }
    ],
    featured: {
      title: 'Retail Revenue Intelligence',
      kicker: 'Capstone project',
      text: 'Two years of transactional data turned into a working decision system: a SQL warehouse layer, cohort and RFM analysis, a demand forecast, a churn model with SHAP explanations, and a Power BI dashboard presented to a mock leadership panel with a costed recommendation.',
      tags: ['SQL', 'Pandas', 'Prophet', 'Power BI'],
      difficulty: 'Advanced',
      status: 'Presented',
      lines: [
        'WITH cohorts AS (',
        '  SELECT customer_id,',
        '         DATE_TRUNC(\'month\', MIN(order_date)) AS cohort',
        '  FROM orders GROUP BY 1',
        ')',
        'SELECT cohort, COUNT(DISTINCT customer_id)',
        'FROM cohorts GROUP BY 1 ORDER BY 1'
      ]
    },
    projects: [
      { title: 'Sales EDA', text: 'Exploratory analysis with a written set of findings.', tags: ['Pandas'], size: 'sm' },
      { title: 'A/B Test Report', text: 'Experiment analysis with significance and a decision.', tags: ['SciPy'], size: 'lg' },
      { title: 'Churn Analysis', text: 'Identify at-risk customers and quantify the revenue at stake.', tags: ['sklearn'], size: 'sm' },
      { title: 'Demand Forecast', text: 'Time-series forecasting with seasonality handling.', tags: ['Prophet'], size: 'sm' },
      { title: 'Executive Dashboard', text: 'A single-screen view of the metrics that matter.', tags: ['Power BI'], size: 'lg' }
    ],

    audience:
      '12th-pass students, college students from engineering, BCA, B.Sc., B.Tech., MCA, maths and statistics, graduates and freshers, working professionals in IT, finance, business, operations or marketing, career switchers, aspiring data analysts, and anyone aiming at AI and machine learning.',
    prerequisite:
      'None. Prior programming experience is not required — beginners start with Python fundamentals and progress toward data structures, statistics, analysis and machine learning.',

    /* Written as a local landing page. Its copy names Ludhiana
       throughout, which is also the default centre, so nothing here
       has to override `city`. */
    overviewTitle: DS_OVERVIEW.title,
    overviewLead: DS_OVERVIEW.lead,
    overviewBody: DS_OVERVIEW.body,

    /* replaces the six generic groups the factory writes, so the page
       answers "who can do this course" once, in its own words */
    joiners: DS_JOINERS,
    narrative: DS_NARRATIVE,

    /* No `testimonials` on purpose. The reviews supplied with this
       page's copy were labelled "sample testimonial formats, not
       verified student reviews", signed "Sample Student" and named
       nobody — they were explicitly marked to be replaced with
       permission-based feedback before publishing, so they are not
       wired up. See the note at the top of ./data-science-copy.js. */

    /* a complete question set of its own, so the standard seven the
       factory writes are replaced rather than appended to */
    ownFaqs: true,
    faqs: DS_FAQS,

    enquireEyebrow: 'Request a callback',
    enquireTitle: 'Ready to build your data science career?',
    enquireText:
      'Speak with the techcadd team to understand the syllabus, practical training, course schedule and career pathway before you enrol — plus current batch timings, fees and eligibility.'
  },

  {
    slug: 'data-analytics',
    name: 'Data Analytics Course',
    short: 'Data Analytics',
    subject: 'data analytics',
    category: 'AI & Data',
    eyebrow: 'Excel, SQL, Power BI and Python',
    duration: '4 months',
    headline: ['Read the data.', 'Say what it means.'],
    sub: 'The analyst toolkit taught in the order employers use it — advanced Excel, SQL, dashboards, and enough Python to automate the repetitive half of the job.',
    projectCount: 'Five shipped',
    highlights: [
      'Advanced Excel that still wins interviews',
      'SQL practised against real-sized tables',
      'Dashboards built for a business audience'
    ],
    code: {
      lang: 'sql',
      file: 'revenue.sql',
      lines: [
        'SELECT region,',
        '       SUM(amount) AS revenue,',
        '       COUNT(DISTINCT customer_id) AS customers',
        'FROM orders',
        'WHERE order_date >= CURRENT_DATE - 90',
        'GROUP BY region ORDER BY revenue DESC'
      ],
      command: 'psql -f revenue.sql',
      output: '6 rows returned'
    },
    badges: ['Excel', 'SQL', 'Power BI', 'Python'],
    modules: [
      {
        title: 'Advanced Excel & Spreadsheet Modelling',
        tag: 'Weeks 1–3',
        description: 'The tool most analysis still starts in — used properly rather than manually.',
        skills: ['Lookup functions', 'Pivot tables', 'Power Query', 'Conditional logic', 'Data validation', 'Dashboard sheets'],
        tech: ['Excel', 'Power Query', 'Google Sheets'],
        outcome: 'An automated monthly report that refreshes itself from a raw export.'
      },
      {
        title: 'SQL for Analysts',
        tag: 'Weeks 4–7',
        description: 'Querying data where it lives, including the joins and window functions interviews test.',
        skills: ['SELECT & filtering', 'Joins', 'Aggregation', 'Subqueries & CTEs', 'Window functions', 'Query performance'],
        tech: ['MySQL', 'PostgreSQL', 'DBeaver'],
        outcome: 'A set of business queries answered directly against a multi-table database.'
      },
      {
        title: 'Statistics & Analysis Methods',
        tag: 'Weeks 8–10',
        description: 'Enough statistics to avoid confidently wrong conclusions.',
        skills: ['Descriptive statistics', 'Correlation vs causation', 'Trend analysis', 'Cohort analysis', 'Significance testing'],
        tech: ['Excel', 'Python', 'SciPy'],
        outcome: 'A cohort analysis that explains a metric movement rather than just showing it.'
      },
      {
        title: 'Dashboards with Power BI & Tableau',
        tag: 'Weeks 11–14',
        description: 'Data models, DAX and visual design that a manager can read in ten seconds.',
        skills: ['Data modelling', 'DAX measures', 'Relationships', 'Interactive filters', 'Visual design', 'Publishing & sharing'],
        tech: ['Power BI', 'Tableau', 'DAX'],
        outcome: 'A published, interactive dashboard with drill-through and a documented data model.'
      },
      {
        title: 'Python Automation & Reporting',
        tag: 'Weeks 15–17',
        description: 'Automating the parts of the job you would otherwise repeat every month.',
        skills: ['Pandas basics', 'Automated cleaning', 'Scheduled reports', 'Excel automation', 'Chart generation', 'Email delivery'],
        tech: ['Python', 'Pandas', 'openpyxl', 'Matplotlib'],
        outcome: 'A scheduled script that produces and emails a formatted report with no manual step.'
      }
    ],
    technologies: [
      { name: 'Excel', note: 'Modelling & reporting' },
      { name: 'SQL', note: 'Querying source data' },
      { name: 'Power BI', note: 'Business dashboards' },
      { name: 'Tableau', note: 'Visual analytics' },
      { name: 'Python', note: 'Automation & analysis' },
      { name: 'Pandas', note: 'Dataframes' },
      { name: 'DAX', note: 'Measures & calculations' },
      { name: 'Power Query', note: 'Data preparation' }
    ],
    careers: [
      { icon: 'chart', title: 'Data Analyst', text: 'Own reporting and ad-hoc analysis for a business function.' },
      { icon: 'bot', title: 'Business Analyst', text: 'Translate business questions into data and back into decisions.' },
      { icon: 'database', title: 'MIS Executive', text: 'Run the reporting layer that operations depends on daily.' },
      { icon: 'code', title: 'BI Developer', text: 'Build data models and dashboards as a specialist.' },
      { icon: 'spark', title: 'Operations Analyst', text: 'Find and quantify inefficiency in real business processes.' },
      { icon: 'career', title: 'Data Scientist (track)', text: 'Progress into modelling once the analysis foundation is solid.' }
    ],
    featured: {
      title: 'Sales Performance Command Centre',
      kicker: 'Capstone project',
      text: 'A complete analytics deliverable: a cleaned SQL data model, DAX measures for targets and variance, a three-page Power BI dashboard with drill-through by region and rep, an automated Python refresh, and a written summary of the three actions the numbers support.',
      tags: ['SQL', 'Power BI', 'DAX', 'Python'],
      difficulty: 'Advanced',
      status: 'Published',
      lines: [
        'Revenue YoY % =',
        'VAR Current = [Total Revenue]',
        'VAR Prior =',
        '    CALCULATE([Total Revenue],',
        '        SAMEPERIODLASTYEAR(Calendar[Date]))',
        'RETURN DIVIDE(Current - Prior, Prior)'
      ]
    },
    projects: [
      { title: 'HR Attrition Report', text: 'Pivot-driven analysis of why people leave.', tags: ['Excel'], size: 'sm' },
      { title: 'Sales SQL Deep Dive', text: 'Twenty business questions answered in SQL.', tags: ['SQL'], size: 'lg' },
      { title: 'Marketing Dashboard', text: 'Campaign spend versus return, filterable by channel.', tags: ['Power BI'], size: 'sm' },
      { title: 'Inventory Tracker', text: 'Stock movement and reorder alerts in Tableau.', tags: ['Tableau'], size: 'sm' },
      { title: 'Automated Monthly Report', text: 'A Python job that builds and sends the report itself.', tags: ['Python'], size: 'lg' }
    ],
    prerequisite: 'No. The course starts with spreadsheets and builds from there. Comfort with numbers matters more than any prior tool.',

    heroArt: '/courses/data-analytics-hero.webp',
    heroArtSize: [1264, 839],
    heroArtAlt:
      'A data analytics workspace — a dashboard, a spreadsheet and the query behind them',

    overviewTitle: DATA_ANALYTICS_OVERVIEW.title,
    overviewLead: DATA_ANALYTICS_OVERVIEW.lead,
    overviewBody: DATA_ANALYTICS_OVERVIEW.body,

    joiners: DATA_ANALYTICS_JOINERS,
    narrative: DATA_ANALYTICS_NARRATIVE,

    /* no `testimonials`: the copy that arrived carried twelve reviews
       under its own author's instruction to use only verified student
       feedback on the live site. See data-analytics-copy.js. */

    ownFaqs: true,
    faqs: DATA_ANALYTICS_FAQS,

    enquireEyebrow: 'Talk to our experts',
    enquireTitle: 'Build practical data skills for your career',
    enquireText:
      'Ready to learn data analytics in Ludhiana? Develop practical skills in Excel, SQL, Power BI, Python, data visualization, reporting and business analytics — whether you are a student, graduate, fresher, job seeker or working professional.'
  },

  {
    slug: 'power-bi',
    heroArt: '/courses/power-bi-hero.webp',
    heroArtSize: [1200, 800],
    heroArtAlt:
      'A Power BI dashboard broken apart — the report canvas, a map visual, ' +
      'donut and bar charts around the Power BI mark',
    name: 'Power BI Course',
    short: 'Power BI',
    subject: 'Power BI',
    category: 'AI & Data',
    eyebrow: 'Microsoft business intelligence',
    duration: '2–3 months',
    headline: ['Model the data.', 'Build the dashboard.'],
    sub: 'Power Query, star schemas, DAX and publishing — the full Power BI workflow as a working BI developer uses it, not a click-through of the interface.',
    projectCount: 'Four shipped',
    highlights: [
      'Data modelling taught before any visual',
      'DAX understood, not copied',
      'Reports published and shared properly'
    ],
    code: {
      lang: 'txt',
      file: 'measures.dax',
      lines: [
        'Total Revenue = SUM(Sales[Amount])',
        '',
        'Revenue MTD =',
        '    TOTALMTD([Total Revenue], Calendar[Date])',
        '',
        'Target Variance = [Total Revenue] - [Target]'
      ],
      command: 'Refresh model',
      output: '3 measures · 0 errors'
    },
    badges: ['DAX', 'Power Query', 'Star schema', 'Service'],
    modules: [
      {
        title: 'Power BI Foundations',
        tag: 'Weeks 1–2',
        description: 'Desktop, Service and the pieces of a Power BI project — before touching a chart.',
        skills: ['Interface & workflow', 'Data sources', 'Import vs DirectQuery', 'Report structure', 'File management'],
        tech: ['Power BI Desktop', 'Power BI Service'],
        outcome: 'A first connected report built from three different source types.'
      },
      {
        title: 'Power Query & Data Preparation',
        tag: 'Weeks 3–4',
        description: 'Cleaning and shaping data with repeatable, refreshable steps.',
        skills: ['Query editor', 'Merging & appending', 'Unpivoting', 'Custom columns', 'M language basics', 'Parameters'],
        tech: ['Power Query', 'M'],
        outcome: 'A messy multi-file dataset transformed into a clean table by refreshable steps only.'
      },
      {
        title: 'Data Modelling',
        tag: 'Weeks 5–6',
        description: 'Star schemas, relationships and why a flat table stops working at scale.',
        skills: ['Star schema design', 'Relationships & cardinality', 'Date tables', 'Role-playing dimensions', 'Model performance'],
        tech: ['Power BI Desktop', 'Tabular Editor'],
        outcome: 'A proper star-schema model with a marked date table and clean relationships.'
      },
      {
        title: 'DAX in Depth',
        tag: 'Weeks 7–9',
        description: 'Filter context, CALCULATE and time intelligence — the part everyone finds hard.',
        skills: ['Row vs filter context', 'CALCULATE', 'Time intelligence', 'Iterators', 'Variables', 'Debugging measures'],
        tech: ['DAX', 'DAX Studio'],
        outcome: 'A measure library covering YoY, MTD, rolling averages and target variance.'
      },
      {
        title: 'Visual Design, Sharing & RLS',
        tag: 'Weeks 10–12',
        description: 'Reports people actually use, published with the right access controls.',
        skills: ['Visual selection', 'Report layout', 'Bookmarks & drill-through', 'Row-level security', 'Workspaces & apps', 'Scheduled refresh'],
        tech: ['Power BI Service', 'Gateway'],
        outcome: 'Your capstone published with row-level security and an automated refresh schedule.'
      }
    ],
    technologies: [
      { name: 'Power BI', note: 'Reports & dashboards' },
      { name: 'DAX', note: 'Calculations & measures' },
      { name: 'Power Query', note: 'Data preparation' },
      { name: 'M', note: 'Query language' },
      { name: 'SQL', note: 'Source data' },
      { name: 'Excel', note: 'Source & export' },
      { name: 'Tabular Editor', note: 'Model management' },
      { name: 'DAX Studio', note: 'Performance tuning' }
    ],
    careers: [
      { icon: 'chart', title: 'Power BI Developer', text: 'Build and maintain the reporting layer for a company.' },
      { icon: 'database', title: 'BI Analyst', text: 'Model data and answer recurring business questions.' },
      { icon: 'bot', title: 'MIS / Reporting Executive', text: 'Own the dashboards operations reviews every morning.' },
      { icon: 'code', title: 'Data Analyst', text: 'Combine SQL and Power BI into a full analysis role.' },
      { icon: 'spark', title: 'Analytics Consultant', text: 'Deliver BI implementations for client organisations.' },
      { icon: 'career', title: 'Data Engineer (track)', text: 'Move upstream into the pipelines that feed the reports.' }
    ],
    featured: {
      title: 'Enterprise Sales & Finance Report',
      kicker: 'Capstone project',
      text: 'A four-page Power BI report over a star-schema model: Power Query ingestion from SQL and Excel, a full DAX measure library, drill-through detail pages, bookmarked scenarios, row-level security per region and a gateway-backed refresh schedule.',
      tags: ['Power BI', 'DAX', 'RLS', 'Gateway'],
      difficulty: 'Advanced',
      status: 'Published',
      lines: [
        'Rolling 3M Revenue =',
        'CALCULATE(',
        '    [Total Revenue],',
        '    DATESINPERIOD(',
        '        Calendar[Date],',
        '        MAX(Calendar[Date]), -3, MONTH))'
      ]
    },
    projects: [
      { title: 'Retail Sales Report', text: 'Region, product and time analysis in one page.', tags: ['DAX'], size: 'sm' },
      { title: 'Finance Dashboard', text: 'P&L view with budget-versus-actual variance.', tags: ['Power BI'], size: 'lg' },
      { title: 'HR Analytics', text: 'Headcount, attrition and hiring funnel metrics.', tags: ['Modelling'], size: 'sm' },
      { title: 'Supply Chain View', text: 'Stock, lead times and supplier performance.', tags: ['Power Query'], size: 'sm' },
      { title: 'Executive Scorecard', text: 'KPIs with targets, RLS and mobile layout.', tags: ['RLS'], size: 'lg' }
    ],

    audience:
      'Students after 12th, graduates and freshers from any stream, existing Excel users, aspiring data analysts, working professionals in sales, finance, marketing, HR or operations, career switchers, and business owners who want to read their own numbers.',
    prerequisite:
      'None. Advanced programming knowledge is not required — basic computer skills and familiarity with spreadsheets make the start easier, and the course builds from the fundamentals.',

    /* Written as a local landing page. Its copy names Ludhiana
       throughout, which is also the default centre, so nothing here
       has to override `city`. */
    overviewTitle: PBI_OVERVIEW.title,
    overviewLead: PBI_OVERVIEW.lead,
    overviewBody: PBI_OVERVIEW.body,

    /* replaces the six generic groups the factory writes, so the page
       answers "who can do this course" once, in its own words */
    joiners: PBI_JOINERS,
    narrative: PBI_NARRATIVE,

    /* No `testimonials` on purpose. The reviews supplied with this
       page's copy were labelled "sample testimonial formats", signed
       "Sample Student Review" and named nobody — they were explicitly
       marked to be replaced with verified feedback before
       publication, so they are not wired up. See the note at the top
       of ./power-bi-copy.js. */

    /* a complete question set of its own, so the standard seven the
       factory writes are replaced rather than appended to */
    ownFaqs: true,
    faqs: PBI_FAQS,

    enquireEyebrow: 'Have questions before enrolling?',
    enquireTitle: 'Turn your data skills into career opportunities',
    enquireText:
      'Speak with the techcadd team to check the current Power BI course fees, duration, upcoming batches, classroom and online availability, syllabus, eligibility and admission process.'
  },

  {
    slug: 'tableau',
    heroArt: '/courses/tableau-hero.webp',
    heroArtSize: [1200, 675],
    heroArtAlt:
      'A Tableau dashboard open on a laptop — a filled world map, sales ' +
      'and profit tiles and the charts built beside them',
    name: 'Tableau Course',
    short: 'Tableau',
    subject: 'Tableau',
    category: 'AI & Data',
    eyebrow: 'Visual analytics, done well',
    duration: '2–3 months',
    headline: ['See the pattern.', 'Show it clearly.'],
    sub: 'Tableau Desktop from first connection to published dashboard — calculations, LOD expressions, parameters and the visual judgement that makes a chart persuasive.',
    projectCount: 'Four shipped',
    highlights: [
      'Chart choice taught as a decision, not a preference',
      'LOD expressions explained until they click',
      'Dashboards published to Tableau Public'
    ],
    code: {
      lang: 'txt',
      file: 'calculation.twb',
      lines: [
        '// Customer lifetime value',
        '{ FIXED [Customer ID] :',
        '    SUM([Sales]) - SUM([Cost]) }',
        '',
        '// Rank within region',
        'RANK(SUM([Sales]), \'desc\')'
      ],
      command: 'Publish to Tableau Public',
      output: 'Dashboard live'
    },
    badges: ['LOD', 'Parameters', 'Actions', 'Public'],
    modules: [
      {
        title: 'Tableau Foundations',
        tag: 'Weeks 1–2',
        description: 'Connections, the data pane, marks and how Tableau thinks about dimensions and measures.',
        skills: ['Data connections', 'Dimensions vs measures', 'Marks card', 'Filters & sorting', 'Aggregation', 'Data types'],
        tech: ['Tableau Desktop', 'Excel', 'CSV'],
        outcome: 'A first worksheet set answering five questions about one dataset.'
      },
      {
        title: 'Charts & Visual Design',
        tag: 'Weeks 3–4',
        description: 'Which chart for which question — and how to make it readable at a glance.',
        skills: ['Chart selection', 'Dual axes', 'Maps', 'Colour & annotation', 'Reference lines', 'Formatting discipline'],
        tech: ['Tableau Desktop'],
        outcome: 'A rebuilt version of a bad dashboard, with each change justified.'
      },
      {
        title: 'Calculations & LOD Expressions',
        tag: 'Weeks 5–7',
        description: 'Calculated fields, table calculations and level-of-detail expressions.',
        skills: ['Calculated fields', 'Table calculations', 'FIXED / INCLUDE / EXCLUDE', 'Parameters', 'Sets & groups', 'Date logic'],
        tech: ['Tableau Desktop'],
        outcome: 'A cohort retention view built entirely with LOD expressions and parameters.'
      },
      {
        title: 'Data Preparation & Joins',
        tag: 'Weeks 8–9',
        description: 'Blending, relationships and Tableau Prep for data that does not arrive clean.',
        skills: ['Joins vs relationships', 'Data blending', 'Unions', 'Pivoting', 'Tableau Prep flows', 'Extracts vs live'],
        tech: ['Tableau Prep', 'SQL'],
        outcome: 'A multi-source data flow feeding a single reliable dashboard.'
      },
      {
        title: 'Dashboards, Stories & Publishing',
        tag: 'Weeks 10–12',
        description: 'Interactive dashboards, guided stories and sharing them with an audience.',
        skills: ['Dashboard layout', 'Actions & filters', 'Device layouts', 'Story points', 'Performance tuning', 'Publishing'],
        tech: ['Tableau Public', 'Tableau Server'],
        outcome: 'Your capstone dashboard published publicly with a link you can put on a CV.'
      }
    ],
    technologies: [
      { name: 'Tableau Desktop', note: 'Analysis & dashboards' },
      { name: 'Tableau Prep', note: 'Data preparation' },
      { name: 'Tableau Public', note: 'Publishing & portfolio' },
      { name: 'SQL', note: 'Source data' },
      { name: 'Excel', note: 'Common data source' },
      { name: 'LOD', note: 'Level-of-detail logic' },
      { name: 'Parameters', note: 'Interactive controls' },
      { name: 'Tableau Server', note: 'Enterprise sharing' }
    ],
    careers: [
      { icon: 'chart', title: 'Tableau Developer', text: 'Build the visual analytics layer for a business.' },
      { icon: 'database', title: 'Data Visualisation Specialist', text: 'Turn complex datasets into interfaces people understand.' },
      { icon: 'bot', title: 'BI Analyst', text: 'Own recurring reporting and self-service analytics.' },
      { icon: 'code', title: 'Data Analyst', text: 'Pair Tableau with SQL for a full analysis role.' },
      { icon: 'spark', title: 'Analytics Consultant', text: 'Deliver dashboard projects for client organisations.' },
      { icon: 'career', title: 'Reporting Manager (track)', text: 'Grow into owning the analytics function itself.' }
    ],
    featured: {
      title: 'Global Superstore Analytics Suite',
      kicker: 'Capstone project',
      text: 'A published multi-dashboard Tableau story: profitability by segment, a geographic performance map, an LOD-driven cohort retention view, parameter-controlled scenarios, dashboard actions linking every view, and a mobile layout — hosted on Tableau Public.',
      tags: ['Tableau', 'LOD', 'Actions', 'Public'],
      difficulty: 'Advanced',
      status: 'Published',
      lines: [
        '// Profit ratio by sub-category',
        'SUM([Profit]) / SUM([Sales])',
        '',
        '// First purchase cohort',
        '{ FIXED [Customer ID] :',
        '    MIN([Order Date]) }'
      ]
    },
    projects: [
      { title: 'Sales Overview', text: 'A single-screen view of revenue, margin and growth.', tags: ['Tableau'], size: 'sm' },
      { title: 'Geographic Analysis', text: 'Mapped performance with drill-down by state.', tags: ['Maps'], size: 'lg' },
      { title: 'Cohort Retention', text: 'Customer retention built with LOD expressions.', tags: ['LOD'], size: 'sm' },
      { title: 'Survey Results', text: 'Likert-scale responses visualised without distortion.', tags: ['Prep'], size: 'sm' },
      { title: 'Executive Story', text: 'A guided story taking a leader through one decision.', tags: ['Stories'], size: 'lg' }
    ],

    overviewTitle: TABLEAU_OVERVIEW.title,
    overviewLead: TABLEAU_OVERVIEW.lead,
    overviewBody: TABLEAU_OVERVIEW.body,

    /* replaces the six generic groups the factory writes */
    joiners: TABLEAU_JOINERS,
    narrative: TABLEAU_NARRATIVE,

    /* NO `testimonials` here, deliberately. The copy that arrived for
       this page carried ten reviews under an explicit note from its
       own author: they are sample formats, to be replaced with
       verified student feedback before publishing. Publishing them
       would put ten invented students with invented names and towns
       on the page as though they were real. The course keeps the
       factory's generic quotes until techcadd has real ones. */

    /* a complete question set of its own, so the standard seven the
       factory writes are replaced rather than appended to */
    ownFaqs: true,
    faqs: TABLEAU_FAQS,

    enquireEyebrow: 'Talk to our experts',
    enquireTitle: 'Turn your data skills into a career-ready skillset',
    enquireText:
      'Ready to learn Tableau in Ludhiana and build practical data visualization skills? Learn Tableau through structured training, hands-on practice, dashboard development, and project-based learning — whether you are a student, graduate, fresher, working professional, or aspiring data analyst.'
  },

  {
    slug: 'generative-ai',
    heroArt: '/courses/generative-ai-hero.webp',
    heroArtSize: [1536, 1024],
    heroArtAlt:
      'The generative AI tools the course works in, lit up under a hand ' +
      'reaching for them',
    name: 'Generative AI Course',
    short: 'Generative AI',
    subject: 'generative AI',
    category: 'AI & Data',
    eyebrow: 'Build with large language models',
    duration: '3–4 months',
    headline: ['Build with LLMs.', 'Ship real products.'],
    sub: 'Prompting, embeddings, RAG, fine-tuning and agents — how to turn a language model into an application that behaves predictably enough to charge money for.',
    projectCount: 'Five shipped',
    highlights: [
      'Every module ends in a working application',
      'Evaluation and cost control taught as first-class topics',
      'Deployed apps, not notebook demos'
    ],
    code: {
      lang: 'py',
      file: 'app.py',
      lines: [
        'response = client.messages.create(',
        '    model="claude-sonnet-5",',
        '    max_tokens=1024,',
        '    messages=[{"role": "user", "content": prompt}]',
        ')',
        '',
        'print(response.content[0].text)'
      ],
      command: 'python app.py',
      output: 'Answer generated in 1.2s'
    },
    badges: ['LLMs', 'RAG', 'Agents', 'Embeddings'],
    modules: [
      {
        title: 'How Language Models Work',
        tag: 'Weeks 1–2',
        description: 'Tokens, context windows, sampling and cost — the mechanics behind the API call.',
        skills: ['Tokenisation', 'Context windows', 'Temperature & sampling', 'Model selection', 'Cost estimation', 'Limitations'],
        tech: ['Python', 'Claude API', 'OpenAI API'],
        outcome: 'A comparison of three models on the same task, with cost and quality measured.'
      },
      {
        title: 'Prompt Engineering & Structured Output',
        tag: 'Weeks 3–5',
        description: 'Getting reliable, parseable answers instead of impressive one-off demos.',
        skills: ['System prompts', 'Few-shot examples', 'Chain of thought', 'Structured JSON output', 'Guardrails', 'Prompt testing'],
        tech: ['Claude API', 'Pydantic', 'JSON Schema'],
        outcome: 'An extraction pipeline that returns valid structured data on every run.'
      },
      {
        title: 'Embeddings & RAG',
        tag: 'Weeks 6–9',
        description: 'Grounding a model in your own documents so it stops inventing answers.',
        skills: ['Embeddings', 'Chunking strategies', 'Vector databases', 'Hybrid search', 'Reranking', 'Citation handling'],
        tech: ['LangChain', 'FAISS', 'Pinecone', 'LlamaIndex'],
        outcome: 'A document assistant that answers only from your corpus and cites its sources.'
      },
      {
        title: 'Agents & Tool Use',
        tag: 'Weeks 10–12',
        description: 'Letting a model call functions, use tools and complete multi-step work safely.',
        skills: ['Tool definitions', 'Agent loops', 'Memory', 'Error recovery', 'Human approval steps', 'Multi-agent patterns'],
        tech: ['Claude API', 'LangGraph', 'MCP'],
        outcome: 'An agent that completes a real multi-step task with a human approval checkpoint.'
      },
      {
        title: 'Fine-Tuning, Evaluation & Deployment',
        tag: 'Weeks 13–16',
        description: 'Measuring quality, reducing cost and running a generative feature in production.',
        skills: ['When to fine-tune', 'Dataset preparation', 'LLM-as-judge evaluation', 'Caching & batching', 'Latency budgets', 'Deployment'],
        tech: ['Hugging Face', 'LoRA', 'FastAPI', 'Streamlit'],
        outcome: 'Your capstone deployed with an evaluation suite and a measured cost per request.'
      }
    ],
    technologies: [
      { name: 'Claude API', note: 'Frontier language models' },
      { name: 'LangChain', note: 'Application framework' },
      { name: 'Hugging Face', note: 'Open models & tuning' },
      { name: 'FAISS', note: 'Vector search' },
      { name: 'Pinecone', note: 'Managed vector database' },
      { name: 'LlamaIndex', note: 'Data framework for LLMs' },
      { name: 'FastAPI', note: 'Serving applications' },
      { name: 'Streamlit', note: 'Rapid interfaces' }
    ],
    careers: [
      { icon: 'bot', title: 'AI Application Developer', text: 'Build products with language models at their core.' },
      { icon: 'spark', title: 'Generative AI Engineer', text: 'Own prompting, retrieval and evaluation for a product team.' },
      { icon: 'code', title: 'LLM Engineer', text: 'Fine-tune, serve and optimise models in production.' },
      { icon: 'chart', title: 'AI Product Specialist', text: 'Decide where generative features genuinely help a business.' },
      { icon: 'database', title: 'Prompt Engineer', text: 'Design and test the instruction layer behind AI features.' },
      { icon: 'career', title: 'AI Consultant', text: 'Advise businesses on realistic, costed AI adoption.' }
    ],
    featured: {
      title: 'Grounded Knowledge Assistant',
      kicker: 'Capstone project',
      text: 'A production-shaped RAG application over a real document set: hybrid retrieval with reranking, cited answers, conversation memory, a refusal path when the corpus has no answer, an automated evaluation suite and a measured cost-per-query budget.',
      tags: ['RAG', 'Claude API', 'FAISS', 'FastAPI'],
      difficulty: 'Advanced',
      status: 'Deployed',
      lines: [
        'docs = retriever.search(question, k=8)',
        'ranked = reranker.rank(question, docs)[:3]',
        '',
        'answer = llm.ask(',
        '    question=question,',
        '    context=ranked,',
        '    refuse_if_empty=True)'
      ]
    },
    projects: [
      { title: 'Content Assistant', text: 'Structured drafting with tone and length controls.', tags: ['Prompting'], size: 'sm' },
      { title: 'PDF Q&A Bot', text: 'Upload documents and get cited answers back.', tags: ['RAG'], size: 'lg' },
      { title: 'Data Extractor', text: 'Unstructured text into validated JSON records.', tags: ['Structured output'], size: 'sm' },
      { title: 'Research Agent', text: 'A tool-using agent that searches and summarises.', tags: ['Agents'], size: 'sm' },
      { title: 'Support Copilot', text: 'A ticket assistant grounded in a help centre.', tags: ['RAG', 'Eval'], size: 'lg' }
    ],
    prerequisite: 'Basic Python. You do not need machine learning background — this course is about building with models, not training them from scratch.'
  },

  {
    slug: 'prompt-engineering',
    heroArt: '/courses/prompt-engineering-hero.webp',
    heroArtSize: [1200, 800],
    heroArtAlt:
      'Prompt engineering laid out — role, task, format and examples ' +
      'feeding a model, with clarity, context and iteration beside it',
    name: 'Prompt Engineering Course',
    short: 'Prompt Engineering',
    subject: 'prompt engineering',
    category: 'AI & Data',
    eyebrow: 'Reliable output, not lucky output',
    duration: '6–8 weeks',
    headline: ['Ask precisely.', 'Get it every time.'],
    sub: 'The engineering discipline behind AI output — system design, structured responses, evaluation and the testing habits that make prompts dependable at scale.',
    projectCount: 'Four shipped',
    highlights: [
      'Prompts treated as code — versioned and tested',
      'Evaluation suites, not vibe checks',
      'Techniques that transfer across every model'
    ],
    code: {
      lang: 'txt',
      file: 'system.md',
      lines: [
        'You are a claims triage assistant.',
        '',
        'Return JSON only:',
        '  { "category": string, "urgency": 1-5,',
        '    "needs_human": boolean }',
        '',
        'If the claim is ambiguous, set needs_human = true.'
      ],
      command: 'python evaluate.py',
      output: '94/100 cases passed'
    },
    badges: ['Systems', 'JSON mode', 'Eval', 'Guardrails'],
    modules: [
      {
        title: 'Model Behaviour & Prompt Anatomy',
        tag: 'Weeks 1–2',
        description: 'Why a model responds the way it does, and which parts of a prompt actually move the output.',
        skills: ['Tokens & context', 'System vs user roles', 'Instruction placement', 'Temperature effects', 'Model differences'],
        tech: ['Claude API', 'OpenAI API', 'Playground tools'],
        outcome: 'A tested prompt whose behaviour you can predict before you run it.'
      },
      {
        title: 'Core Techniques',
        tag: 'Weeks 3–4',
        description: 'Few-shot, decomposition, reasoning prompts and role framing — with measured results.',
        skills: ['Zero & few-shot', 'Chain of thought', 'Task decomposition', 'Self-consistency', 'Negative constraints', 'Output formatting'],
        tech: ['Claude API', 'Prompt libraries'],
        outcome: 'A before-and-after study showing measured accuracy gains from each technique.'
      },
      {
        title: 'Structured Output & Guardrails',
        tag: 'Weeks 5–6',
        description: 'Making output machine-readable and safe enough to put in a pipeline.',
        skills: ['JSON schemas', 'Validation & retries', 'Refusal handling', 'Injection defence', 'PII handling', 'Fallback paths'],
        tech: ['Pydantic', 'JSON Schema', 'Python'],
        outcome: 'A prompt that produces valid structured data on 100% of a hundred-case test set.'
      },
      {
        title: 'Evaluation & Production Practice',
        tag: 'Weeks 7–8',
        description: 'Test suites, regression tracking and versioning prompts like the software they are.',
        skills: ['Golden datasets', 'LLM-as-judge', 'Regression testing', 'Prompt versioning', 'Cost & latency tuning', 'Monitoring'],
        tech: ['Python', 'pytest', 'Promptfoo'],
        outcome: 'A CI-run evaluation suite that blocks a prompt change if quality drops.'
      }
    ],
    technologies: [
      { name: 'Claude API', note: 'Primary model' },
      { name: 'OpenAI API', note: 'Comparison model' },
      { name: 'Pydantic', note: 'Output validation' },
      { name: 'Promptfoo', note: 'Prompt testing' },
      { name: 'Python', note: 'Automation & evaluation' },
      { name: 'JSON Schema', note: 'Structured contracts' },
      { name: 'pytest', note: 'Regression suites' },
      { name: 'Git', note: 'Prompt versioning' }
    ],
    careers: [
      { icon: 'database', title: 'Prompt Engineer', text: 'Own the instruction layer of a product\'s AI features.' },
      { icon: 'bot', title: 'AI Application Developer', text: 'Build features where output reliability is the whole job.' },
      { icon: 'chart', title: 'AI Quality Analyst', text: 'Design evaluation suites and catch regressions before users do.' },
      { icon: 'spark', title: 'Conversation Designer', text: 'Shape how an assistant speaks, refuses and escalates.' },
      { icon: 'code', title: 'Automation Specialist', text: 'Replace manual workflows with tested AI pipelines.' },
      { icon: 'career', title: 'AI Content Strategist', text: 'Run AI-assisted production at scale without losing quality.' }
    ],
    featured: {
      title: 'Support Triage Prompt System',
      kicker: 'Capstone project',
      text: 'A versioned prompt system that classifies, prioritises and routes support tickets: structured JSON output, injection defence, a hundred-case golden dataset, an LLM-as-judge evaluation, and a CI check that blocks any change lowering accuracy.',
      tags: ['Structured output', 'Eval', 'CI', 'Guardrails'],
      difficulty: 'Advanced',
      status: 'Portfolio ready',
      lines: [
        'def test_no_regression(cases):',
        '    score = evaluate(PROMPT_V4, cases)',
        '    baseline = load_baseline()',
        '',
        '    assert score >= baseline - 0.02, (',
        '        f"regression: {score} < {baseline}")'
      ]
    },
    projects: [
      { title: 'Tone Rewriter', text: 'One text, five controlled tones, consistent every run.', tags: ['Few-shot'], size: 'sm' },
      { title: 'Resume Parser', text: 'Unstructured CVs into validated structured records.', tags: ['JSON'], size: 'lg' },
      { title: 'Meeting Summariser', text: 'Transcripts into decisions, owners and dates.', tags: ['Decomposition'], size: 'sm' },
      { title: 'Safety Filter', text: 'A prompt that refuses correctly under adversarial input.', tags: ['Guardrails'], size: 'sm' },
      { title: 'Eval Harness', text: 'A reusable test suite for any prompt you write.', tags: ['pytest'], size: 'lg' }
    ],
    audience: 'Developers, marketers, analysts, support leads and anyone whose work already touches AI output and needs it to be dependable.'
  },

  {
    slug: 'chatgpt-ai-tools',
    heroArt: '/courses/chatgpt-ai-tools-hero.webp',
    heroArtSize: [1200, 800],
    heroArtAlt:
      'A ChatGPT workspace — the assistant open on a laptop and tablet ' +
      'beside the GPTs and tools the course works through',
    name: 'ChatGPT & AI Tools Course',
    short: 'ChatGPT & AI Tools',
    subject: 'AI tools',
    category: 'AI & Data',
    eyebrow: 'AI fluency for everyday work',
    duration: '4–6 weeks',
    headline: ['Work faster.', 'Without faking it.'],
    sub: 'A practical tour of the AI tools that actually save time — writing, research, design, spreadsheets, meetings and automation — with the judgement to know when not to use them.',
    projectCount: 'Four shipped',
    highlights: [
      'Built around your real daily tasks',
      'Verification habits taught alongside every tool',
      'A personal automation stack by the end'
    ],
    code: {
      lang: 'txt',
      file: 'workflow.md',
      lines: [
        '1. Draft  → Claude / ChatGPT',
        '2. Verify → source check, always',
        '3. Design → Canva AI, Firefly',
        '4. Data   → Excel Copilot',
        '5. Ship   → Zapier automation'
      ],
      command: 'Run weekly workflow',
      output: '6 hours saved / week'
    },
    badges: ['ChatGPT', 'Claude', 'Canva', 'Zapier'],
    modules: [
      {
        title: 'Working With AI Assistants',
        tag: 'Week 1',
        description: 'How to brief an assistant so the first answer is usable, and how to check that it is true.',
        skills: ['Effective briefing', 'Context supply', 'Iterating on answers', 'Fact verification', 'Knowing the limits'],
        tech: ['ChatGPT', 'Claude', 'Gemini'],
        outcome: 'A personal prompt library for the five tasks you do most often.'
      },
      {
        title: 'Writing, Research & Documents',
        tag: 'Week 2',
        description: 'Drafting, editing, summarising and researching without producing generic text.',
        skills: ['Draft & edit workflows', 'Tone control', 'Long-document summarising', 'Research with citations', 'Plagiarism awareness'],
        tech: ['Claude', 'ChatGPT', 'NotebookLM', 'Perplexity'],
        outcome: 'A report researched, drafted and fact-checked in a fraction of the usual time.'
      },
      {
        title: 'Design, Media & Presentations',
        tag: 'Week 3',
        description: 'Images, video, slides and voice — with an eye for when AI output looks like AI output.',
        skills: ['Image generation', 'Editing & cleanup', 'Slide generation', 'Video & voice tools', 'Brand consistency', 'Licensing basics'],
        tech: ['Canva AI', 'Firefly', 'Gamma', 'ElevenLabs'],
        outcome: 'A complete branded deck and social set produced in one working session.'
      },
      {
        title: 'Data, Spreadsheets & Meetings',
        tag: 'Week 4',
        description: 'Turning AI on the admin work that quietly eats a week.',
        skills: ['Spreadsheet formulas & analysis', 'Chart generation', 'Meeting transcription', 'Action extraction', 'Email drafting', 'Inbox triage'],
        tech: ['Excel Copilot', 'Google Sheets AI', 'Otter', 'Fireflies'],
        outcome: 'An analysis and a meeting workflow that produce themselves from raw input.'
      },
      {
        title: 'Automation & Your Own Stack',
        tag: 'Weeks 5–6',
        description: 'Connecting tools so the routine work happens without you starting it.',
        skills: ['Zapier & Make', 'Custom GPTs & Projects', 'Workflow mapping', 'Trigger design', 'Cost management', 'Data privacy'],
        tech: ['Zapier', 'Make', 'Custom GPTs', 'Notion AI'],
        outcome: 'A running automation that handles a real recurring task in your week.'
      }
    ],
    technologies: [
      { name: 'ChatGPT', note: 'General assistant' },
      { name: 'Claude', note: 'Long-document work' },
      { name: 'Perplexity', note: 'Cited research' },
      { name: 'Canva AI', note: 'Design & branding' },
      { name: 'Excel Copilot', note: 'Spreadsheet analysis' },
      { name: 'Gamma', note: 'Presentations' },
      { name: 'Zapier', note: 'Workflow automation' },
      { name: 'Notion AI', note: 'Notes & knowledge' }
    ],
    careers: [
      { icon: 'spark', title: 'AI-Enabled Professional', text: 'Do your current job substantially faster and better.' },
      { icon: 'bot', title: 'Content Creator', text: 'Produce more output without dropping quality or voice.' },
      { icon: 'chart', title: 'Marketing Executive', text: 'Run campaigns with a fraction of the production overhead.' },
      { icon: 'career', title: 'Operations Coordinator', text: 'Automate reporting, scheduling and follow-up work.' },
      { icon: 'code', title: 'Virtual Assistant', text: 'Offer AI-accelerated services to more clients at once.' },
      { icon: 'database', title: 'Freelancer', text: 'Take on work that previously needed a small team.' }
    ],
    featured: {
      title: 'Your Personal AI Workflow',
      kicker: 'Capstone project',
      text: 'An audit of your own working week, a mapped set of AI interventions, a documented prompt library, a live automation connecting three tools, and a measured before-and-after of the hours it returns to you.',
      tags: ['Automation', 'Zapier', 'Prompt library', 'Audit'],
      difficulty: 'Practical',
      status: 'In daily use',
      lines: [
        'Trigger:  New form response',
        '  ↓',
        'Step 1:   Summarise with Claude',
        'Step 2:   Categorise → JSON',
        'Step 3:   Append to Sheet',
        'Step 4:   Notify on Slack if urgent'
      ]
    },
    projects: [
      { title: 'Prompt Library', text: 'Reusable prompts for your recurring tasks.', tags: ['ChatGPT'], size: 'sm' },
      { title: 'Branded Content Set', text: 'A month of posts and visuals in one sitting.', tags: ['Canva AI'], size: 'lg' },
      { title: 'Research Brief', text: 'A cited, verified summary of a real topic.', tags: ['Perplexity'], size: 'sm' },
      { title: 'Meeting Pipeline', text: 'Recording to action items with no manual step.', tags: ['Otter'], size: 'sm' },
      { title: 'Live Automation', text: 'A Zap that runs a weekly task for you.', tags: ['Zapier'], size: 'lg' }
    ],
    audience: 'Anyone whose work involves writing, planning, reporting or design — students, business owners, teachers, marketers and office professionals. No technical background needed.',
    prerequisite: 'None at all. If you can use a browser and a spreadsheet, you can take this course.'
  },

  {
    slug: 'agentic-ai',
    heroArt: '/courses/agentic-ai-hero.webp',
    heroArtSize: [1200, 800],
    heroArtAlt:
      'An agentic AI setup — a multi-armed assistant planning, reasoning ' +
      'and acting across tools, with the run log beside it',
    name: 'Agentic AI Course',
    short: 'Agentic AI',
    subject: 'AI agents',
    category: 'AI & Data',
    eyebrow: 'Systems that act, not just answer',
    duration: '3 months',
    headline: ['Give AI tools.', 'Keep it accountable.'],
    sub: 'Tool use, planning loops, memory, multi-agent orchestration and the guardrails that make an autonomous system safe enough to run against real data.',
    projectCount: 'Four shipped',
    highlights: [
      'Every agent ships with a human approval path',
      'Failure handling designed in, not bolted on',
      'Costs and loops bounded by construction'
    ],
    code: {
      lang: 'py',
      file: 'agent.py',
      lines: [
        'tools = [search_docs, create_ticket, send_email]',
        '',
        'while not done and steps < MAX_STEPS:',
        '    action = agent.decide(state, tools)',
        '    if action.needs_approval:',
        '        await human.confirm(action)',
        '    state = execute(action)'
      ],
      command: 'python agent.py --task triage',
      output: 'Completed in 6 steps · 1 approval'
    },
    badges: ['Tool use', 'MCP', 'LangGraph', 'Memory'],
    modules: [
      {
        title: 'Agent Foundations',
        tag: 'Weeks 1–2',
        description: 'What separates an agent from a chatbot, and where the pattern genuinely earns its complexity.',
        skills: ['Agent loops', 'State & context', 'When not to use an agent', 'Cost modelling', 'Step budgets'],
        tech: ['Python', 'Claude API'],
        outcome: 'A minimal agent loop you wrote yourself, with a hard step limit.'
      },
      {
        title: 'Tool Use & Function Calling',
        tag: 'Weeks 3–5',
        description: 'Defining tools a model can call reliably, and handling what happens when a call fails.',
        skills: ['Tool schemas', 'Parameter validation', 'Error recovery', 'Idempotency', 'Retry policy', 'Tool selection'],
        tech: ['Claude API', 'Pydantic', 'MCP'],
        outcome: 'A five-tool agent that recovers cleanly from every failure mode you test.'
      },
      {
        title: 'Memory, Planning & Retrieval',
        tag: 'Weeks 6–8',
        description: 'Giving an agent the context to work across steps, sessions and documents.',
        skills: ['Short & long-term memory', 'Task decomposition', 'Planning strategies', 'RAG integration', 'Context compaction'],
        tech: ['LangGraph', 'FAISS', 'Redis'],
        outcome: 'An agent that completes a multi-session task without losing what it already did.'
      },
      {
        title: 'Multi-Agent Systems & Safety',
        tag: 'Weeks 9–12',
        description: 'Orchestration, review agents, approval gates and running the whole thing in production.',
        skills: ['Orchestrator patterns', 'Specialist agents', 'Critic & review loops', 'Human-in-the-loop', 'Audit logging', 'Deployment'],
        tech: ['LangGraph', 'FastAPI', 'Docker', 'MCP'],
        outcome: 'Your capstone multi-agent system deployed with a full audit trail and approval gates.'
      }
    ],
    technologies: [
      { name: 'Claude API', note: 'Agent reasoning' },
      { name: 'LangGraph', note: 'Agent orchestration' },
      { name: 'MCP', note: 'Standard tool protocol' },
      { name: 'FAISS', note: 'Retrieval memory' },
      { name: 'Redis', note: 'Session state' },
      { name: 'FastAPI', note: 'Agent services' },
      { name: 'Docker', note: 'Sandboxed execution' },
      { name: 'Python', note: 'Implementation language' }
    ],
    careers: [
      { icon: 'bot', title: 'AI Agent Developer', text: 'Design and ship autonomous systems for real workflows.' },
      { icon: 'spark', title: 'Generative AI Engineer', text: 'Build the agentic layer of an AI product.' },
      { icon: 'code', title: 'Automation Architect', text: 'Replace multi-step manual processes with supervised agents.' },
      { icon: 'server', title: 'AI Platform Engineer', text: 'Run the infrastructure agents execute on, safely.' },
      { icon: 'chart', title: 'AI Solutions Consultant', text: 'Scope where agents help a business and where they will not.' },
      { icon: 'career', title: 'AI Product Engineer', text: 'Own agentic features from prototype to production.' }
    ],
    featured: {
      title: 'Operations Agent with Approval Gates',
      kicker: 'Capstone project',
      text: 'A supervised multi-agent system that triages incoming requests, researches context, drafts a response and executes an action — with a critic agent reviewing every plan, a human approval gate on anything irreversible, bounded step and cost budgets, and a full audit log.',
      tags: ['LangGraph', 'MCP', 'Human-in-loop', 'Audit'],
      difficulty: 'Advanced',
      status: 'Deployed',
      lines: [
        'plan = planner.build(task)',
        'review = critic.assess(plan)',
        '',
        'if review.risk == "high":',
        '    plan = await human.approve(plan)',
        '',
        'result = executor.run(plan, budget=BUDGET)'
      ]
    },
    projects: [
      { title: 'Research Agent', text: 'Searches, reads and reports with citations.', tags: ['Tools'], size: 'sm' },
      { title: 'Inbox Triage Agent', text: 'Categorises and drafts, never sends unapproved.', tags: ['Approval'], size: 'lg' },
      { title: 'Data Agent', text: 'Queries a database and explains its own SQL.', tags: ['SQL', 'Tools'], size: 'sm' },
      { title: 'Code Review Agent', text: 'Reviews a diff and reports issues by severity.', tags: ['MCP'], size: 'sm' },
      { title: 'Multi-Agent Pipeline', text: 'Planner, worker and critic completing one task.', tags: ['LangGraph'], size: 'lg' }
    ],
    prerequisite: 'Python and some experience calling an LLM API. The Generative AI course is the natural prerequisite if you have neither.'
  },

  {
    slug: 'ai-powered-marketing',
    heroArt: '/courses/ai-powered-marketing-hero.webp',
    heroArtSize: [1200, 800],
    heroArtAlt:
      'An AI marketing desk — ad creative and content ideas generated ' +
      'beside a campaign funnel and its analytics',
    name: 'AI-Powered Marketing Course',
    short: 'AI-Powered Marketing',
    subject: 'AI marketing',
    category: 'AI & Data',
    eyebrow: 'Marketing at AI speed',
    duration: '2–3 months',
    headline: ['Campaigns in hours.', 'Not in weeks.'],
    sub: 'Content production, audience research, ad creative, personalisation and analytics — the full marketing cycle rebuilt around AI tooling, with measurement to prove it worked.',
    projectCount: 'Five shipped',
    highlights: [
      'A full campaign produced during the course',
      'Attribution and measurement taught properly',
      'Brand voice preserved, not flattened'
    ],
    code: {
      lang: 'txt',
      file: 'campaign.md',
      lines: [
        'Audience:  ICP research → 3 segments',
        'Message:   Positioning → 9 angles',
        'Creative:  30 assets in one session',
        'Channel:   Meta · Google · Email',
        'Measure:   UTM → GA4 → attribution'
      ],
      command: 'Launch campaign',
      output: 'CPL down 38% vs baseline'
    },
    badges: ['GA4', 'Meta Ads', 'HubSpot', 'Canva AI'],
    modules: [
      {
        title: 'AI Marketing Foundations',
        tag: 'Weeks 1–2',
        description: 'Where AI genuinely changes marketing economics — and where it just produces more noise.',
        skills: ['Workflow audit', 'Tool landscape', 'Brand voice capture', 'Quality control', 'Disclosure & ethics'],
        tech: ['Claude', 'ChatGPT', 'Notion AI'],
        outcome: 'A documented brand voice guide an AI tool can reproduce consistently.'
      },
      {
        title: 'Research & Strategy',
        tag: 'Weeks 3–4',
        description: 'Audience research, competitor analysis and positioning done in a day instead of a fortnight.',
        skills: ['ICP definition', 'Competitor teardown', 'Keyword & topic research', 'Positioning statements', 'Content calendars'],
        tech: ['Perplexity', 'SEMrush', 'Claude'],
        outcome: 'A researched strategy document with segments, angles and a quarter of planned content.'
      },
      {
        title: 'Content & Creative Production',
        tag: 'Weeks 5–7',
        description: 'Producing a month of on-brand content across formats without it reading as generated.',
        skills: ['Long-form writing', 'Social adaptation', 'Ad copy variants', 'Image & video generation', 'Editing for voice', 'Batch production'],
        tech: ['Canva AI', 'Firefly', 'Descript', 'Claude'],
        outcome: 'A month of publish-ready content across blog, social, email and ads.'
      },
      {
        title: 'Campaigns, Ads & Personalisation',
        tag: 'Weeks 8–10',
        description: 'Running the campaign — targeting, creative testing and personalised journeys.',
        skills: ['Meta & Google Ads', 'Creative testing', 'Email sequences', 'Segmentation', 'Landing page optimisation', 'Chatbots'],
        tech: ['Meta Ads', 'Google Ads', 'HubSpot', 'Mailchimp'],
        outcome: 'A live multi-channel campaign with tested creative variants.'
      },
      {
        title: 'Analytics & Optimisation',
        tag: 'Weeks 11–12',
        description: 'Proving what worked, and using AI to find the pattern in the results.',
        skills: ['GA4 setup', 'UTM discipline', 'Attribution basics', 'Automated reporting', 'AI-assisted analysis', 'Iteration'],
        tech: ['GA4', 'Looker Studio', 'Python', 'Zapier'],
        outcome: 'A performance report with a measured lift and a costed plan for the next cycle.'
      }
    ],
    technologies: [
      { name: 'Claude', note: 'Copy & strategy' },
      { name: 'Canva AI', note: 'Creative production' },
      { name: 'Meta Ads', note: 'Paid social' },
      { name: 'Google Ads', note: 'Search & display' },
      { name: 'GA4', note: 'Measurement' },
      { name: 'HubSpot', note: 'CRM & automation' },
      { name: 'Looker Studio', note: 'Reporting' },
      { name: 'Zapier', note: 'Workflow automation' }
    ],
    careers: [
      { icon: 'chart', title: 'AI Marketing Specialist', text: 'Run campaigns with AI-accelerated production and analysis.' },
      { icon: 'spark', title: 'Growth Marketer', text: 'Test and scale acquisition channels with measurable results.' },
      { icon: 'bot', title: 'Content Marketing Manager', text: 'Own a content engine that produces at multiples of the old rate.' },
      { icon: 'code', title: 'Performance Marketer', text: 'Manage paid channels with AI-assisted creative testing.' },
      { icon: 'database', title: 'Marketing Automation Specialist', text: 'Build the journeys and triggers behind a CRM.' },
      { icon: 'career', title: 'Freelance Marketing Consultant', text: 'Serve more clients with a smaller production overhead.' }
    ],
    featured: {
      title: 'Full-Funnel Campaign Launch',
      kicker: 'Capstone project',
      text: 'A complete campaign for a real local business: AI-assisted market research, positioning, thirty creative assets, a landing page, live Meta and Google ads with tested variants, an email sequence, GA4 tracking and a final report showing cost per lead against the baseline.',
      tags: ['Meta Ads', 'GA4', 'Canva AI', 'HubSpot'],
      difficulty: 'Advanced',
      status: 'Live campaign',
      lines: [
        'Segment A — students, 18-24',
        '  Hook: "Skills that pay before your degree does"',
        '  CPL: ₹42   CTR: 3.8%',
        '',
        'Segment B — working professionals',
        '  Hook: "Weekend batches, career-shaped"',
        '  CPL: ₹61   CTR: 2.4%'
      ]
    },
    projects: [
      { title: 'Brand Voice Guide', text: 'A reusable voice spec any AI tool can follow.', tags: ['Claude'], size: 'sm' },
      { title: 'Content Month', text: 'Thirty on-brand assets produced in one session.', tags: ['Canva AI'], size: 'lg' },
      { title: 'Ad Creative Test', text: 'Nine variants, measured, with a clear winner.', tags: ['Meta Ads'], size: 'sm' },
      { title: 'Email Sequence', text: 'A personalised five-step nurture flow.', tags: ['HubSpot'], size: 'sm' },
      { title: 'Attribution Dashboard', text: 'Channel performance in one automated view.', tags: ['GA4'], size: 'lg' }
    ],
    audience: 'Marketing executives, business owners, freelancers and students entering marketing. No coding required.'
  },

  {
    slug: 'rag',
    heroArt: '/courses/rag-hero.webp',
    heroArtSize: [1200, 800],
    heroArtAlt:
      'A retrieval-augmented generation flow — a question retrieving from ' +
      'a knowledge base, augmenting the context, and a grounded answer ' +
      'coming back',
    name: 'RAG (Retrieval-Augmented Generation) Course',
    short: 'RAG Systems',
    subject: 'retrieval-augmented generation',
    category: 'AI & Data',
    eyebrow: 'Grounded AI on your own data',
    duration: '6–8 weeks',
    headline: ['Ground the model.', 'Stop the guessing.'],
    sub: 'Chunking, embeddings, vector search, reranking and evaluation — the architecture behind every AI assistant that answers from a company\'s own documents.',
    projectCount: 'Four shipped',
    highlights: [
      'Retrieval quality measured, not assumed',
      'Citations and refusal paths built in',
      'Cost and latency budgeted per query'
    ],
    code: {
      lang: 'py',
      file: 'retrieve.py',
      lines: [
        'chunks = splitter.split(documents, size=512, overlap=64)',
        'index.add(embed(chunks))',
        '',
        'hits = index.search(embed(question), k=20)',
        'top = reranker.rank(question, hits)[:4]'
      ],
      command: 'python evaluate_retrieval.py',
      output: 'recall@4 = 0.91 · MRR = 0.78'
    },
    badges: ['Embeddings', 'FAISS', 'Reranking', 'Eval'],
    modules: [
      {
        title: 'Why RAG, and When Not To',
        tag: 'Week 1',
        description: 'The failure mode RAG solves, and the cases where fine-tuning or plain prompting is the better answer.',
        skills: ['Hallucination causes', 'RAG vs fine-tuning', 'Architecture overview', 'Cost trade-offs', 'Scoping a corpus'],
        tech: ['Python', 'Claude API'],
        outcome: 'A written architecture decision for a real use case, with the alternatives ruled out.'
      },
      {
        title: 'Ingestion, Chunking & Embeddings',
        tag: 'Weeks 2–3',
        description: 'The unglamorous half that determines whether retrieval works at all.',
        skills: ['Document parsing', 'Chunking strategies', 'Metadata design', 'Embedding models', 'Batch indexing', 'Incremental updates'],
        tech: ['LlamaIndex', 'Unstructured', 'sentence-transformers'],
        outcome: 'An ingestion pipeline handling PDFs, HTML and spreadsheets into a searchable index.'
      },
      {
        title: 'Vector Search & Reranking',
        tag: 'Weeks 4–5',
        description: 'Dense search, keyword search, hybrid retrieval and the reranking step that fixes most bad results.',
        skills: ['Vector databases', 'Similarity metrics', 'Hybrid BM25 + dense', 'Cross-encoder reranking', 'Filtering by metadata', 'Query rewriting'],
        tech: ['FAISS', 'Pinecone', 'Elasticsearch', 'Cohere Rerank'],
        outcome: 'A hybrid retriever measurably outperforming a naive vector search on your corpus.'
      },
      {
        title: 'Generation, Citations & Evaluation',
        tag: 'Weeks 6–8',
        description: 'Answering from retrieved context, citing sources, refusing when there is nothing — and proving it works.',
        skills: ['Context assembly', 'Citation formatting', 'Refusal handling', 'Retrieval metrics', 'Answer faithfulness', 'Latency & cost tuning'],
        tech: ['Claude API', 'RAGAS', 'FastAPI', 'Streamlit'],
        outcome: 'A deployed RAG service with an evaluation report covering recall, faithfulness and cost.'
      }
    ],
    technologies: [
      { name: 'FAISS', note: 'Local vector search' },
      { name: 'Pinecone', note: 'Managed vector database' },
      { name: 'LlamaIndex', note: 'Ingestion & indexing' },
      { name: 'LangChain', note: 'Pipeline orchestration' },
      { name: 'Claude API', note: 'Answer generation' },
      { name: 'RAGAS', note: 'RAG evaluation' },
      { name: 'Elasticsearch', note: 'Keyword retrieval' },
      { name: 'FastAPI', note: 'Serving the pipeline' }
    ],
    careers: [
      { icon: 'bot', title: 'RAG Engineer', text: 'Build and tune retrieval systems behind AI assistants.' },
      { icon: 'spark', title: 'AI Application Developer', text: 'Ship grounded AI features on company data.' },
      { icon: 'database', title: 'Search Engineer', text: 'Own relevance across hybrid retrieval systems.' },
      { icon: 'code', title: 'LLM Engineer', text: 'Combine retrieval, prompting and serving into one product.' },
      { icon: 'chart', title: 'Knowledge Systems Specialist', text: 'Make an organisation\'s documents genuinely searchable.' },
      { icon: 'career', title: 'AI Solutions Engineer', text: 'Deliver grounded assistants for client organisations.' }
    ],
    featured: {
      title: 'Enterprise Document Assistant',
      kicker: 'Capstone project',
      text: 'A grounded assistant over a thousand-document corpus: multi-format ingestion, metadata-filtered hybrid retrieval, cross-encoder reranking, cited answers, an explicit refusal path, a RAGAS evaluation report and a per-query cost budget — served behind an API.',
      tags: ['Hybrid retrieval', 'Reranking', 'RAGAS', 'FastAPI'],
      difficulty: 'Advanced',
      status: 'Deployed',
      lines: [
        'if not hits or top_score < THRESHOLD:',
        '    return Answer(',
        '        text="Not covered in the provided documents.",',
        '        citations=[])',
        '',
        'return llm.answer(question, context=top, cite=True)'
      ]
    },
    projects: [
      { title: 'PDF Assistant', text: 'Ask questions of a single document, with citations.', tags: ['FAISS'], size: 'sm' },
      { title: 'Policy Search', text: 'Metadata-filtered retrieval across HR documents.', tags: ['Hybrid'], size: 'lg' },
      { title: 'Code Q&A', text: 'Retrieval over a repository with symbol awareness.', tags: ['Chunking'], size: 'sm' },
      { title: 'Eval Report', text: 'Recall, MRR and faithfulness on your own corpus.', tags: ['RAGAS'], size: 'sm' },
      { title: 'Support Assistant', text: 'A grounded help-centre bot with a refusal path.', tags: ['RAG', 'API'], size: 'lg' }
    ],
    prerequisite: 'Python and some experience calling an LLM API. Take the Generative AI course first if either is new to you.'
  }
]
