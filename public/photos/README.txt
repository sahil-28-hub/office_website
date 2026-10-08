Drop your real institute photography in this folder. Anything missing
falls back to a brand gradient tile, so nothing breaks while you gather
the shots.

About section (src/components/About.jsx)
  team.jpg        trainers / faculty            top right frame
  lab.jpg         students in the project lab   centre, largest frame
  placement.jpg   placement drive / offer day   bottom right frame

Navigation dropdowns (src/data/navMenus.js)
  team.jpg        About Us menu  -> "About Techcadd" card
  mission.jpg     About Us menu  -> "Mission and Vision" card
  founder.jpg     About Us menu  -> "Our Founder" card
  ai-class.jpg    AI menu        -> featured course card
  lab.jpg         Resources menu -> "Blogs" card
  mentoring.jpg   Resources menu -> "FAQ" card
  students.jpg    Resources menu -> "Reviews" card

Gallery wall (src/components/Gallery.jsx)
  Sixteen photographs across five drifting columns, split 3/3/4/3/3.

  Column 1   lab.jpg             portrait    students in the project lab
             team.jpg            landscape   trainers / faculty
             workshop.jpg        portrait    weekend workshop
  Column 2   ai-class.jpg        landscape   an AI class in session
             students.jpg        tall        a full batch together
             library.jpg         landscape   the quiet study room
  Column 3   mentoring.jpg       portrait    one-to-one doubt session
             placement.jpg       landscape   placement drive / offer day
             seminar.jpg         portrait    guest speaker, full room
             hackathon.jpg       landscape   a late build night in the lab
  Column 4   campus.jpg          landscape   the building / entrance
             convocation.jpg     tall        certificate day
             reception.jpg       landscape   front desk / counselling
  Column 5   classroom.jpg       portrait    trainer teaching at the board
             interview-prep.jpg  landscape   a mock technical interview
             group-project.jpg   portrait    a student team working together

  Six of the sixteen are already listed above, so ten are new. Each
  frame crops to its own ratio (portrait 3:4, landscape 4:3, tall 2:3),
  so shoot wider than you need and keep the subject centred. Until a
  file exists its frame shows a placeholder naming it, which means the
  wall doubles as a shot list.

  Columns drop off on narrow screens — 5 above 1200px, then 4, 3 and 2.
  Columns 1 and 2 are the only ones a phone shows, so put your six
  strongest photographs there.

Landscape, 1200px wide or more, under ~400KB each.
