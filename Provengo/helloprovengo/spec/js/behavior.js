/* @provengo summon selenium */

/**
 * This story creates a new reply comment by a student on an existing topic in a course's forum.
 */
bthread('Reply', function () {
  let session = new SeleniumSession('reply');
  session.start(URL);
  loginStudent(session, moodledata);
  waitFor(session.event('navigateToCourse'));
  navigateToCourseFromHomePage(session);
  waitFor(session.event('navigateToForum'));
  navigateToForum(session);
  waitFor(session.event('navigateToTopic'));
  navigateToTopic(session);
  block(session.event('hideForum'));
  waitFor(session.event('commentOnForum'));
  commentOnForum(session, moodledata);
  if (checkCommentExist(session)) {
    console.log('Comment successfully added.');
  } else {
    console.error('Comment could not be added.');
  }
  waitFor(session.event('logout'));
  logout(session);
  session.stop();
});

/**
 * This story hides a forum from students by a teacher.
 */
bthread('Hide', function () {
  let session = new SeleniumSession('hide');
  session.start(URL);
  loginTeacher(session, moodledata);
  waitFor(session.event('navigateToCourse'));
  navigateToCourseFromHomePage(session);
  waitFor(session.event('navigateToForum'));
  navigateToForum(session);
  block(session.event('commentOnForum'));
  waitFor(session.event('hideForum'));
  hideForum(session);
  if (checkForumHiding(session)) {
    console.log('Forum successfully hidden.');
  } else {
    console.error('Forum could not be hidden.');
  }
  waitFor(session.event('logout'));
  logout(session);
  session.stop();
});
