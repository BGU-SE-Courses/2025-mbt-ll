/* @provengo summon selenium */

bthread('Reply', function () {
  let session = new SeleniumSession('reply');
  session.start(URL, 'chrome');

  bp.sync({ request: bp.Event("loginAdmin") });
  loginAdmin(session, moodledata);

  bp.sync({ request: bp.Event("createCourse") });
  createCourse(session, moodledata);

  bp.sync({ request: bp.Event("navigateToCourse") });
  navigateToCourseFromHomePage(session);

  bp.sync({ request: bp.Event("enrollStudent") });
  enrollStudent(session);

  bp.sync({ request: bp.Event("createForum") });
  createForum(session, moodledata);

  bp.sync({ request: bp.Event("logoutAdmin") });
  logout(session);

  bp.sync({ request: bp.Event("loginStudent") });
  loginStudent(session, moodledata);

  bp.sync({ request: bp.Event("navigateToForum") });
  navigateToForum(session);

  bp.sync({ request: bp.Event("createTopic") });
  createTopic(session, moodledata);

  bp.sync({ request: bp.Event("navigateToTopic") });
  navigateToTopic(session);

  bp.sync({ block: bp.Event("hideForum") });

  bp.sync({ request: bp.Event("commentOnForum") });
  commentOnForum(session, moodledata);

  bp.sync({ request: bp.Event("checkCommentExist") });
  if (checkCommentExist(session)) {
    console.log('Comment successfully added.');
  } else {
    console.error('Comment could not be added.');
  }

  bp.sync({ request: bp.Event("logoutStudent") });
  logout(session);

  session.stop();
});

bthread('Hide', function () {
  let session = new SeleniumSession('hide');
  session.start(URL, 'chrome');

  bp.sync({ request: bp.Event("loginAdmin") });
  loginAdmin(session, moodledata);

  bp.sync({ request: bp.Event("createCourse") });
  createCourse(session, moodledata);

  bp.sync({ request: bp.Event("navigateToCourse") });
  navigateToCourseFromHomePage(session);

  bp.sync({ request: bp.Event("enrollStudent") });
  enrollStudent(session);

  bp.sync({ request: bp.Event("enrollTeacher") });
  enrollTeacher(session);

  bp.sync({ request: bp.Event("createForum") });
  createForum(session, moodledata);

  bp.sync({ request: bp.Event("logoutAdmin") });
  logout(session);

  bp.sync({ request: bp.Event("loginTeacher") });
  loginTeacher(session, moodledata);

  bp.sync({ request: bp.Event("navigateToForum") });
  navigateToForum(session);

  bp.sync({ block: bp.Event("commentOnForum") });

  bp.sync({ request: bp.Event("hideForum") });
  hideForum(session);

  bp.sync({ request: bp.Event("checkForumHiding") });
  if (checkForumHiding(session)) {
    console.log('Forum successfully hidden.');
  } else {
    console.error('Forum could not be hidden.');
  }

  bp.sync({ request: bp.Event("logoutTeacher") });
  logout(session);

  session.stop();
});
