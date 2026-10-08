public/gallery/ — the campus wall
=================================

Save the fourteen photographs here, under exactly these names. The
wall is src/components/Gallery.jsx; a frame whose file is missing
shows a labelled placeholder naming what it is waiting for, so you
can add them one at a time and watch the wall fill in.

Served from the site root, so `gallery/main-lab.jpg` on disk is
`/gallery/main-lab.jpg` in the browser. No import, no code change —
Vite copies public/ through untouched.


THE SHOT LIST
-------------

Each frame is sized to the shape of its photograph, so a file saved
at roughly the listed ratio is barely cropped. A file at the wrong
ratio still works — it is centre-cropped to fit — it just loses more
of its edges.

  COLUMN A  (visible at every screen width)
    main-lab.jpg        1:1   square     The main lab, full for an afternoon session
    video-editing.jpg   3:4   portrait   Trainer and student over two editing timelines
    doubt-session.jpg   4:3   landscape  Trainer taking a group through a problem

  COLUMN B  (visible at every screen width)
    classroom.jpg       3:4   portrait   Full classroom, screen at the front in use
    group-project.jpg   4:3   landscape  A student team building on a shared project
    laptops-row.jpg     1:1   square     Students on their own laptops down the lab

  COLUMN C  (hidden under 720px)
    seo-class.jpg       3:4   portrait   Two students on an SEO dashboard, mural behind
    it-lab.jpg          1:1   square     The IT lab, course banner along the wall
    analytics.jpg       3:4   portrait   A Google Analytics traffic report on a laptop

  COLUMN D  (hidden under 980px)
    seminar.jpg        16:9   wide       Speaker taking questions in the seminar room
    design-lab.jpg      3:4   portrait   Trainer reviewing design work at the desktops
    lab-wide.jpg        1:1   square     The lab from the back, every machine in use

  COLUMN E  (hidden under 1240px)
    google-ads.jpg      3:4   portrait   Setting up a campaign in Google Ads
    lab-floor.jpg       3:4   portrait   Trainer helping students at their machines


WHICH COLUMN MATTERS
--------------------

Gallery.css drops column 5 below 1240px, column 4 below 980px and
column 3 below 720px. A phone sees columns A and B only — six photos.
Those two hold the shots that best represent the place, on purpose.
If you swap the photography around, keep that in mind: anything in
columns C, D or E is a wide-screen bonus, not something every visitor
will see.


BEFORE YOU SAVE
---------------

  * Resize the long edge to about 1200px. The frames are never wider
    than roughly 300px on screen and the wall loads fourteen of them,
    so a 4000px phone photo costs the visitor several megabytes for
    no visible gain.

  * Save as JPEG at around 80% quality. If you would rather use WebP,
    rename the entries in Gallery.jsx to match — the component reads
    whatever filename is in the list.

  * Check faces are near the centre. The frames are `object-fit:
    cover`, so a subject hard against one edge is the first thing to
    get cropped.

  * Get permission for recognisable faces before this goes live. Most
    of these are students, and a training centre publishing photos of
    identifiable people needs their say-so.
