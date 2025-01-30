/* @provengo summon selenium */

// Reply Bthread
bthread('Reply', function () {
  let session = new SeleniumSession('reply');
  session.start(URL);

  // Login as admin
  sync({ request: Event("loginAdmin") });
  loginAdmin(session);

  // Create a course
  sync({ request: Event("createCourse"), waitFor: Event("loginAdmin"), block: Event("enrollStudent") });
  createCourse(session,"test13");

  sync({ request: Event("enrollStudent"), block: Event("createTopic"),waitFor:Event("createForum") });
  enrollStudent(session);

  // Create a forum
  sync({ request: Event("createForum"), waitFor: Event("enrollStudent"), block: Event("logout") });
  createForum(session)

  // Create a topic in the forum
  sync({ request: Event("createTopic"), waitFor: Event("createForum"), block: Event("logout") });
  createTopic(session)

  ///Logout admin
  sync({ request: Event("logout"), waitFor: Event("createForum"), block: Event("loginStudent") });
  logout(session);

  // Login as student
  sync({ request: Event("loginStudent"), waitFor: Event("logout"), block: Event("navigateToForum") });
  loginStudent(session)

  sync({ request: Event("navigateToCourse"), waitFor: Event("loginStudent"), block: Event("navigateToForum") });
  navigateToCourseFromHomePage(session);

  //Navigate to the forum
  sync({ request: Event("navigateToForum"), waitFor: Event("navigateToCourse"), block: Event("navigateToTopic") });
  navigateToForum(session);

  // Navigate to the specific topic
  sync({ request: Event("navigateToTopic"), waitFor: Event("navigateToForum"), block: Event("commentOnForum") });
  navigateToTopic(session);

  // Comment on the forum
  sync({ request: Event("commentOnForum"), waitFor: Event("navigateToTopic"), block: Event("checkCommentExist") });
  commentOnForum(session)

  // Verify the comment exists
  sync({ request: Event("checkCommentExist"), waitFor: Event("commentOnForum"), block: Event("logout") });
  checkCommentExist(session)

  // Logout student
  sync({ request: Event("logout"), waitFor: Event("checkCommentExist") });
  logoutAfterReply(session);

  // Emit the trigger event to wake up the Hide Bthread
  sync({ request: Event("replyCompletedTrigger") });
});

// Hide Bthread
bthread('Hide', function () {
  // Wait for the Reply Bthread to signal completion using the trigger event
  sync({ waitFor: Event("replyCompletedTrigger") });

  let session = new SeleniumSession('hide');
  session.start(URL);

  // Login as admin
  sync({ request: Event("loginAdmin"), block: Event("createCourse") });
  loginAdmin(session)

  // Create a course
  sync({ request: Event("createCourse"), waitFor: Event("loginAdmin"), block: Event("enrollStudent") });
  createCourse(session,"test14")

  sync({ request: Event("enrollStudent"), block: Event("enrollTeacher"),waitFor:Event("createCourse") });
  enrollStudent(session);

  sync({ request: Event("enrollTeacher"), block: Event("createForum"),waitFor:Event("enrollStudent") });
  enrollTeacher(session);

  // Create a forum
  sync({ request: Event("createForum"), waitFor: Event("enrollTeacher"), block: Event("logout") });
  createForum(session)

  // Logout admin
  sync({ request: Event("logout"), waitFor: Event("createForum"), block: Event("loginTeacher") });
  logout(session);

  // Login as teacher
  sync({ request: Event("loginTeacher"), waitFor: Event("logout"), block: Event("navigateToForum") });
  loginTeacher(session)

  sync({ request: Event("navigateToCourse"), waitFor: Event("loginTeacher"), block: Event("navigateToForum") });
  navigateToCourseFromHomePage(session);

  // Navigate to the forum
  sync({ request: Event("navigateToForum"), waitFor: Event("loginTeacher"), block: Event("hideForum") });
  navigateToForum(session);

  // Block comments before hiding the forum
  sync({ request: Event("hideForum"), waitFor: Event("navigateToForum"), block: Event("checkForumHiding") });
  hideForum(session);

  sync({ request: Event("logoutTeacher"), waitFor: Event("hideForum"), block: Event("loginStudent")});
  logout(session);

  sync({ request: Event("loginStudent"), waitFor: Event("logoutTeacher"), block: Event("navigateToCourse") });
  loginStudent(session);

  sync({ request: Event("navigateToCourse"), waitFor: Event("loginStudent"), block: Event("checkForumHiding") });
  navigateToCourseFromHomePage(session);

  // Verify the forum is hidden
  sync({ request: Event("checkForumHiding"), waitFor: Event("hideForum") });
  checkForumHiding(session);

  // Logout teacher
  sync({ request: Event("logout"), waitFor: Event("checkForumHiding") });
  logoutAfterReply(session);

  // Ensure finished hiding forum
  sync({ request: Event("finishedHidingForum") });

});

// bthread('CommentEnrollStudent', function () {
//   sync({ waitFor: Event("gettingToEnrollForComment")});
//   sync({ request: Event("enrollStudent"), block: Event("createTopic") });
// });
//
// bthread('HideEnrollStudent', function () {
//   sync({ waitFor: Event("gettingToEnrollForHide")});
//   sync({ request: Event("enrollStudent"), block: Event("logout") });
// });
//
// bthread('HideEnrollTeacher', function () {
//   sync({ waitFor: Event("gettingToEnrollForHide")});
//   sync({ request: Event("enrollTeacher"), block: Event("logout") });
// });