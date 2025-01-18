/* @provengo summon selenium */

/**
This story creates a new reply comment by a student on an existing topic in a course's forum.*/
bthread('Reply', function () {
  let session = new SeleniumSession('reply');
  session.start(URL,'chrome');

  // Log in as a student
  loginStudent(session, moodledata);

  // Wait for and navigate to the course
  waitFor(session.event('navigateToCourse'));
  navigateToCourseFromHomePage(session);

  // Wait for and navigate to the forum
  waitFor(session.event('navigateToForum'));
  navigateToForum(session);

  // Wait for and navigate to the topic
  waitFor(session.event('navigateToTopic'));
  navigateToTopic(session);

  // Block hiding the forum during this interaction
  block(session.event('hideForum'));

  // Wait for and add a comment to the forum
  waitFor(session.event('commentOnForum'));
  commentOnForum(session, moodledata);

  // Check if the comment exists
  if (checkCommentExist(session)) {
    console.log('Comment successfully added.');
  } else {
    console.error('Comment could not be added.');
  }

  // Wait for and log out
  waitFor(session.event('logout'));
  logout(session);

  session.stop();
});

/**

This story hides a forum from students by a teacher.*/
bthread('Hide', function () {
  let session = new SeleniumSession('hide');
  session.start(URL,'chrome');

  // Log in as a teacher
  loginTeacher(session, moodledata);

  // Wait for and navigate to the course
  waitFor(session.event('navigateToCourse'));
  navigateToCourseFromHomePage(session);

  // Wait for and navigate to the forum
  waitFor(session.event('navigateToForum'));
  navigateToForum(session);

  // Block commenting on the forum during this interaction
  block(session.event('commentOnForum'));

  // Wait for and hide the forum
  waitFor(session.event('hideForum'));
  hideForum(session);

  // Check if the forum is successfully hidden
  if (checkForumHiding(session)) {
    console.log('Forum successfully hidden.');
  } else {
    console.error('Forum could not be hidden.');
  }

  // Wait for and log out
  waitFor(session.event('logout'));
  logout(session);

  session.stop();
});