/* @provengo summon selenium */

bthread('Reply', function () {
  let session = new SeleniumSession('reply');
  session.start(URL, 'chrome');

  // Login as admin
  bp.sync({ request: bp.Event("loginAdmin") });

  // Create a course
  bp.sync({ request: bp.Event("createCourse") });

  // Navigate to the course
  bp.sync({ request: bp.Event("navigateToCourse") });

  // Enroll a student in the course
  bp.sync({ request: bp.Event("enrollStudent") });

  // Create a forum
  bp.sync({ request: bp.Event("createForum") });

  // Logout admin
  bp.sync({ request: bp.Event("logout") });
  logout(session);

  // Login as student
  bp.sync({ request: bp.Event("loginStudent") });

  // Navigate to the forum
  bp.sync({ request: bp.Event("navigateToForum") });
  navigateToForum(session);

  // Create a topic in the forum
  bp.sync({ request: bp.Event("createTopic") });

  // Navigate to the specific topic
  bp.sync({ request: bp.Event("navigateToTopic") });
  navigateToTopic(session);

  // Comment on the forum (ensure it's unblocked first)
  bp.sync({ block: bp.Event("hideForum") });
  bp.sync({ request: bp.Event("commentOnForum") });

  // Verify the comment exists
  bp.sync({ request: bp.Event("checkCommentExist") });
  if (checkCommentExist(session)) {
    console.log('Comment successfully added.');
  } else {
    console.error('Comment could not be added.');
  }

  bp.sync({ request: bp.Event("logout") });
  logout(session);

  session.stop(); // End the session
});

bthread('Hide', function () {
  let session = new SeleniumSession('hide');
  session.start(URL, 'chrome');

  // Login as admin
  bp.sync({ request: bp.Event("loginAdmin") });

  // Create a course
  bp.sync({ request: bp.Event("createCourse") });

  // Navigate to the course
  bp.sync({ request: bp.Event("navigateToCourse") });
  navigateToCourseFromHomePage(session);

  // Enroll a student in the course
  bp.sync({ request: bp.Event("enrollStudent") });

  // Enroll a teacher in the course
  bp.sync({ request: bp.Event("enrollTeacher") });

  // Create a forum
  bp.sync({ request: bp.Event("createForum") });

  // Logout admin
  bp.sync({ request: bp.Event("logoutAdmin") });
  logout(session);

  // Login as teacher
  bp.sync({ request: bp.Event("loginTeacher") });

  // Navigate to the forum
  bp.sync({ request: bp.Event("navigateToForum") });
  navigateToForum(session);

  // Block comments before hiding the forum
  bp.sync({ block: bp.Event("commentOnForum") });

  // Hide the forum
  bp.sync({ request: bp.Event("hideForum") });
  hideForum(session);

  // Verify the forum is hidden
  bp.sync({ request: bp.Event("checkForumHiding") });
  if (checkForumHiding(session)) {
    console.log('Forum successfully hidden.');
  } else {
    console.error('Forum could not be hidden.');
  }

  bp.sync({ request: bp.Event("logout") });
  logout(session);

  session.stop();
});