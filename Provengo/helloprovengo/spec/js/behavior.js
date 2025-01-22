/* @provengo summon selenium */

bthread('Reply', function () {
  let session = new SeleniumSession('reply');
  session.start(URL, 'chrome');

  // Login as admin
  sync({ request: Event("loginAdmin") });

  // Create a course
  sync({ request: Event("createCourse"),waitFor:Event("loginAdmin"),block:Event("navigateToCourse")});

  // Navigate to the course
  sync({ request: Event("navigateToCourse"),waitFor:Event("createCourse"),block:Event("createForum")});

  // Enroll a student in the course
  sync({ request: Event("enrollStudent"), waitFor:Event("createCourse"),block:Event("logout")});

  // Create a forum
  sync({ request: Event("createForum"),waitFor:Event("createCourse"),block:Event("logout") });

  // Logout admin
  sync({ request: Event("logout"),waitFor: Event("createForum"),block:Event("loginStudent")});
  logout(session);

  // Login as student
  sync({ request: Event("loginStudent"), waitFor:Event("logout"),block:Event("navigateToForum")});

  // Navigate to the forum
  sync({ request: Event("navigateToForum"), waitFor:Event("loginStudent"),block:Event("createTopic")});
  navigateToForum(session);

  // Create a topic in the forum
  sync({ request: Event("createTopic"),waitFor: Event("createForum"),block:Event("navigateToTopic")});

  // Navigate to the specific topic
  sync({ request: Event("navigateToTopic"),waitFor: Event("createTopic"),block:Event("commentOnForum")});
  navigateToTopic(session);

  // Comment on the forum (ensure it's unblocked first)

  sync({ block: Event("hideForum") });
  sync({ request: Event("commentOnForum") , waitFor: Event("navigateToTopic"),block: Event("checkCommentExist")});

  // Verify the comment exists
  sync({ request: Event("checkCommentExist") ,waitFor: Event("commentOnForum"),block: Event("logout")});
  if (checkCommentExist(session)) {
    console.log('Comment successfully added.');
  } else {
    console.error('Comment could not be added.');
  }

  sync({ request: Event("logout") ,waitFor: Event("checkCommentExist") });
  logout(session);

  session.stop(); // End the session
});

bthread('Hide', function () {
  let session = new SeleniumSession('hide');
  session.start(URL, 'chrome');

  // Login as admin
  sync({ request: Event("loginAdmin"), waitFor:Event("checkCommentExist"),block:Event("createCourse")});

  // Create a course
  sync({ request: Event("createCourse"), waitFor: Event("loginAdmin"),block:Event("navigateToCourse")});

  // Navigate to the course
  sync({ request: Event("navigateToCourse"), waitFor: Event("createCourse"),block:Event("createForum")});
  navigateToCourseFromHomePage(session);

  // Enroll a student in the course
  sync({ request: Event("enrollStudent"),waitFor:Event("loginAdmin"),block:Event("logout") });

  // Enroll a teacher in the course
  sync({ request: Event("enrollTeacher"),waitFor:Event("loginAdmin"),block:Event("logout") });

  // Create a forum
  sync({ request: Event("createForum"), waitFor:Event("navigateToCourse"),block:Event("logout")});

  // Logout admin
  sync({ request: Event("logout"),waitFor:Event("createForum"),block:Event("loginTeacher")});
  logout(session);

  // Login as teacher
  sync({ request: Event("loginTeacher") , waitFor:Event("logout"),block:Event("navigateToForum")});

  // Navigate to the forum
  sync({ request: Event("navigateToForum"),waitFor: Event("loginTeacher"),block:Event("hideForum")});
  navigateToForum(session);

  // Block comments before hiding the forum
  sync({ block: Event("commentOnForum") });
  sync({ request: Event("hideForum"),waitFor:Event("navigateToForum"),block:Event("checkForumHiding")});
  hideForum(session);

  // Verify the forum is hidden
  sync({ request: Event("checkForumHiding"),waitFor: Event("hideForum")});
  if (checkForumHiding(session)) {
    console.log('Forum successfully hidden.');
  } else {
    console.error('Forum could not be hidden.');
  }

  sync({ request: Event("logout"),waitFor:Event("checkForumHiding") });
  logout(session);

  session.stop();
});