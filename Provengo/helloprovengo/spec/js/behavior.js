/* @provengo summon selenium */

bthread('Reply', function () {
  let session = new SeleniumSession('reply');
  session.start(URL, 'chrome');
  loginAdmin(session, moodledata);
  createCourse(session,moodledata);

  bp.sync({ request: bp.Event("navigateToCourse") });
    navigateToCourseFromHomePage(session);

  enrollStudent(session);
  createForum(session,moodledata);

  logout(session);
  loginStudent(session, moodledata);

  bp.sync({ request: bp.Event("navigateToForum") });
  navigateToForum(session);

  createTopic(session,moodledata);

  bp.sync({ request: bp.Event("navigateToTopic") });
  navigateToTopic(session);

  bp.sync({ block: bp.Event("hideForum") });

  bp.sync({ request: bp.Event("commentOnForum") });
  commentOnForum(session, moodledata);

  if (checkCommentExist(session)) {
    console.log('Comment successfully added.');
  } else {
    console.error('Comment could not be added.');
  }

  bp.sync({ request: bp.Event("logout") });
  logout(session);

  session.stop();
});

bthread('Hide', function () {
  let session = new SeleniumSession('hide');
  session.start(URL, 'chrome');

  loginAdmin(session, moodledata);
  createCourse(session,moodledata);

  bp.sync({ request: bp.Event("navigateToCourse") });
  navigateToCourseFromHomePage(session);

  enrollStudent(session);
  enrollTeacher(session);
  createForum(session,moodledata);

  logout(session);
  loginTeacher(session,moodledata);

  bp.sync({ request: bp.Event("navigateToForum") });
  navigateToForum(session);

  bp.sync({ block: bp.Event("commentOnForum") });

  bp.sync({ request: bp.Event("hideForum") });
  hideForum(session);

  if (checkForumHiding(session)) {
    console.log('Forum successfully hidden.');
  } else {
    console.error('Forum could not be hidden.');
  }

  bp.sync({ request: bp.Event("logout") });
  logout(session);

  session.stop();
});
