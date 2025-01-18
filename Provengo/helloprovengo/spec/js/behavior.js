/* @provengo summon selenium */

/**
 * This story creates a new reply comment by a student on an existing topic in a course's forum.
 */
bthread('Reply', function () {
  let session = new SeleniumSession('reply');
  session.start(URL);

  // Login as a student
  loginStudent(session, moodledata);

  // Navigate to the course from the homepage
  awaitFor(session.event('navigateToCourse'));
  navigateToCourseFromHomePage(session);

  // Navigate to the forum
  awaitFor(session.event('navigateToForum'));
  navigateToForum(session);

  // Navigate to the topic
  awaitFor(session.event('navigateToTopic'));
  navigateToTopic(session);

  // Comment on the forum
  block(session.event('hideForum')); // Prevent hiding the forum during commenting
  awaitFor(session.event('commentOnForum'));
  commentOnForum(session, moodledata);

  // Check if the comment exists
  if (checkCommentExist(session)) {
    console.log('Comment successfully added.');
  } else {
    console.error('Comment could not be added.');
  }

  // Logout
  awaitFor(session.event('logout'));
  logout(session);

  session.stop();
});

/**
 * This story hides a forum from students by a teacher.
 */
bthread('Hide', function () {
  let session = new SeleniumSession('hide');
  session.start(URL);

  // Login as a teacher
  loginTeacher(session, moodledata);

  // Navigate to the course from the homepage
  awaitFor(session.event('navigateToCourse'));
  navigateToCourseFromHomePage(session);

  // Navigate to the forum
  awaitFor(session.event('navigateToForum'));
  navigateToForum(session);

  // Hide the forum
  block(session.event('commentOnForum')); // Prevent commenting while hiding
  awaitFor(session.event('hideForum'));
  hideForum(session);

  // Check if the forum is hidden
  if (checkForumHiding(session)) {
    console.log('Forum successfully hidden.');
  } else {
    console.error('Forum could not be hidden.');
  }

  // Logout
  awaitFor(session.event('logout'));
  logout(session);

  session.stop();
});
