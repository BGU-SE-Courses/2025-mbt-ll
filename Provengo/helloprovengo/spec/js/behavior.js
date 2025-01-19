/* @provengo summon selenium */

bthread('Reply', function () {
  let session = new SeleniumSession('reply');
  session.start(URL, 'chrome');

  // Login as admin
  bp.sync({ request: bp.Event("loginAdmin") });
  loginAdmin(session, moodledata);

  // Create a course
  bp.sync({ request: bp.Event("createCourse") });
  createCourse(session, moodledata);

  // Navigate to the course
  bp.sync({ request: bp.Event("navigateToCourse") });
  navigateToCourseFromHomePage(session);

  // Enroll a student in the course
  bp.sync({ request: bp.Event("enrollStudent") });
  enrollStudent(session);

  // Create a forum
  bp.sync({ request: bp.Event("createForum") });
  createForum(session, moodledata);

  // Logout admin
  bp.sync({ request: bp.Event("logoutAdmin") });
  logout(session);

  // Login as student
  bp.sync({ request: bp.Event("loginStudent") });
  loginStudent(session, moodledata);

  // Navigate to the forum
  bp.sync({ request: bp.Event("navigateToForum") });
  navigateToForum(session);

  // Create a topic in the forum
  bp.sync({ request: bp.Event("createTopic") });
  createTopic(session, moodledata);

  // Navigate to the specific topic
  bp.sync({ request: bp.Event("navigateToTopic") });
  navigateToTopic(session);

  // Comment on the forum (ensure it's unblocked first)
  bp.sync({ block: bp.Event("hideForum") });
  bp.sync({ request: bp.Event("commentOnForum") });
  commentOnForum(session, moodledata);

  // Verify the comment exists
  bp.sync({ request: bp.Event("checkCommentExist") });
  if (checkCommentExist(session)) {
    console.log('Comment successfully added.');
  } else {
    console.error('Comment could not be added.');
  }

  // Logout student
  bp.sync({ request: bp.Event("logoutStudent") });
  logout(session);

  session.stop(); // End the session
});

bthread('Hide', function () {
  let session = new SeleniumSession('hide');
  session.start(URL, 'chrome');

  // Login as admin
  bp.sync({ request: bp.Event("loginAdmin") });
  loginAdmin(session, moodledata);

  // Create a course
  bp.sync({ request: bp.Event("createCourse") });
  createCourse(session, moodledata);

  // Navigate to the course
  bp.sync({ request: bp.Event("navigateToCourse") });
  navigateToCourseFromHomePage(session);

  // Enroll a student in the course
  bp.sync({ request: bp.Event("enrollStudent") });
  enrollStudent(session);

  // Enroll a teacher in the course
  bp.sync({ request: bp.Event("enrollTeacher") });
  enrollTeacher(session);

  // Create a forum
  bp.sync({ request: bp.Event("createForum") });
  createForum(session, moodledata);

  // Logout admin
  bp.sync({ request: bp.Event("logoutAdmin") });
  logout(session);

  // Login as teacher
  bp.sync({ request: bp.Event("loginTeacher") });
  loginTeacher(session, moodledata);

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

  // Logout teacher
  bp.sync({ request: bp.Event("logoutTeacher") });
  logout(session);

  session.stop(); // End the session
});