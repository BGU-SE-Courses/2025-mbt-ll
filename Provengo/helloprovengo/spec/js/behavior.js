/* @provengo summon selenium */

bthread('Reply', function () {
  let session = new SeleniumSession('reply');
  session.start(URL, 'chrome'); // Ensure browser type is explicitly passed

  // Log in as a student
  loginStudent(session, moodledata);

  // Wait for and navigate to the course
  bp.sync({ request: bp.Event("navigateToCourse") });
  navigateToCourseFromHomePage(session);

  // Wait for and navigate to the forum
  bp.sync({ request: bp.Event("navigateToForum") });
  navigateToForum(session);

  // Wait for and navigate to the topic
  bp.sync({ request: bp.Event("navigateToTopic") });
  navigateToTopic(session);

  // Block hiding the forum during this interaction
  bp.sync({ block: bp.Event("hideForum") });

  // Wait for and add a comment to the forum
  bp.sync({ request: bp.Event("commentOnForum") });
  commentOnForum(session, moodledata);

  // Check if the comment exists
  if (checkCommentExist(session)) {
    console.log('Comment successfully added.');
  } else {
    console.error('Comment could not be added.');
  }

  // Wait for and log out
  bp.sync({ request: bp.Event("logout") });
  logout(session);

  session.stop();
});

bthread('Hide', function () {
  let session = new SeleniumSession('hide');
  session.start(URL, 'chrome'); // Ensure browser type is explicitly passed

  // Log in as a teacher
  loginTeacher(session, moodledata);

  // Wait for and navigate to the course
  bp.sync({ request: bp.Event("navigateToCourse") });
  navigateToCourseFromHomePage(session);

  // Wait for and navigate to the forum
  bp.sync({ request: bp.Event("navigateToForum") });
  navigateToForum(session);

  // Block commenting on the forum during this interaction
  bp.sync({ block: bp.Event("commentOnForum") });

  // Wait for and hide the forum
  bp.sync({ request: bp.Event("hideForum") });
  hideForum(session);

  // Check if the forum is successfully hidden
  if (checkForumHiding(session)) {
    console.log('Forum successfully hidden.');
  } else {
    console.error('Forum could not be hidden.');
  }

  // Wait for and log out
  bp.sync({ request: bp.Event("logout") });
  logout(session);

  session.stop();
});
