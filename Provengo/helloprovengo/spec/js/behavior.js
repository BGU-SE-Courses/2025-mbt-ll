/* @provengo summon selenium */

bthread('Reply', function () {
  let session = new SeleniumSession('reply');
  session.start(URL, 'chrome');

  // Login as admin
  bp.sync({ request: bp.Event("loginAdmin") });

  // Create a course
  bp.sync({ request: bp.Event("createCourse"),waitFor:bp.Event("loginAdmin")});

  // Navigate to the course
  bp.sync({ request: bp.Event("navigateToCourse"),waitFor:bp.Event("createCourse")});

  // Enroll a student in the course
  bp.sync({ request: bp.Event("enrollStudent"), waitFor:bp.Event("createCourse")});

  // Create a forum
  bp.sync({ request: bp.Event("createForum"),waitFor:bp.Event("createCourse") });

  // Logout admin
  bp.sync({ request: bp.Event("logout"),waitFor: bp.Event("createForum")});
  logout(session);

  // Login as student
  bp.sync({ request: bp.Event("loginStudent"), waitFor:bp.Event("logout")});

  // Navigate to the forum
  bp.sync({ request: bp.Event("navigateToForum"), waitFor:bp.Event("loginStudent")});
  navigateToForum(session);

  // Create a topic in the forum
  bp.sync({ request: bp.Event("createTopic"),waitFor: bp.Event("createForum")});

  // Navigate to the specific topic
  bp.sync({ request: bp.Event("navigateToTopic"),waitFor: bp.Event("createTopic")});
  navigateToTopic(session);

  // Comment on the forum (ensure it's unblocked first)
  bp.sync({ block: bp.Event("hideForum") });
  bp.sync({ request: bp.Event("commentOnForum") , waitFor: bp.Event("navigateToTopic") });

  // Verify the comment exists
  bp.sync({ request: bp.Event("checkCommentExist") ,waitFor: bp.Event("commentOnForum")});
  if (checkCommentExist(session)) {
    console.log('Comment successfully added.');
  } else {
    console.error('Comment could not be added.');
  }

  bp.sync({ request: bp.Event("logout") ,waitFor: bp.Event("checkCommentExist") });
  logout(session);

  session.stop(); // End the session
});

bthread('Hide', function () {
  let session = new SeleniumSession('hide');
  session.start(URL, 'chrome');

  // Login as admin
  bp.sync({ request: bp.Event("loginAdmin")});

  // Create a course
  bp.sync({ request: bp.Event("createCourse"), waitFor: bp.Event("loginAdmin")});

  // Navigate to the course
  bp.sync({ request: bp.Event("navigateToCourse"), waitFor: bp.Event("createCourse")});
  navigateToCourseFromHomePage(session);

  // Enroll a student in the course
  bp.sync({ request: bp.Event("enrollStudent"),waitFor:bp.Event("loginAdmin") });

  // Enroll a teacher in the course
  bp.sync({ request: bp.Event("enrollTeacher"),waitFor:bp.Event("loginAdmin") });

  // Create a forum
  bp.sync({ request: bp.Event("createForum"), waitFor:bp.Event("navigateToCourse")});

  // Logout admin
  bp.sync({ request: bp.Event("logoutAdmin"),waitFor:bp.Event("createForum")});
  logout(session);

  // Login as teacher
  bp.sync({ request: bp.Event("loginTeacher") , waitFor:bp.Event("logoutAdmin")});

  // Navigate to the forum
  bp.sync({ request: bp.Event("navigateToForum"),waitFor: bp.Event("loginTeacher")});
  navigateToForum(session);

  // Block comments before hiding the forum
  bp.sync({ block: bp.Event("commentOnForum") });

  // Hide the forum
  bp.sync({ request: bp.Event("hideForum"),waitFor:bp.Event("navigateToForum")});
  hideForum(session);

  // Verify the forum is hidden
  bp.sync({ request: bp.Event("checkForumHiding"),waitFor: bp.Event("hideForum")});
  if (checkForumHiding(session)) {
    console.log('Forum successfully hidden.');
  } else {
    console.error('Forum could not be hidden.');
  }

  bp.sync({ request: bp.Event("logout"),waitFor:bp.Event("checkForumHiding") });
  logout(session);

  session.stop();
});