/* @provengo summon selenium */

// Reply Bthread
// bthread('Reply', function () {
//   let session = new SeleniumSession('reply');
//   session.start(URL);
//
//   // Login as admin
//   sync({ request: Event("loginAdmin") });
//   loginAdmin(session);
//
//   // Create a course
//   sync({ request: Event("createCourse"), waitFor: Event("loginAdmin"), block: Event("enrollStudent") });
//   createCourse(session,"test19")
//
//   sync({ request: Event("gettingToEnrollForComment")});
//
//   sync({ request: Event("enrollStudent"),waitFor: Event("createCourse") ,block: Event("createForum") });
//   enrollStudent(session);
//
//   // Create a forum
//   sync({ request: Event("createForum"), waitFor: Event("enrollStudent"), block: Event("logout") });
//   createForum(session)
//
//   // Create a topic in the forum
//   sync({ request: Event("createTopic"), waitFor: Event("createForum"), block: Event("logout") });
//   createTopic(session)
//
//   ///Logout admin
//   sync({ request: Event("logout"), waitFor: Event("createForum"), block: Event("loginStudent") });
//   logout(session);
//
//   // Login as student
//   sync({ request: Event("loginStudent"), waitFor: Event("logout"), block: Event("navigateToForum") });
//   loginStudent(session)
//
//   sync({ request: Event("navigateToCourse"), waitFor: Event("loginStudent"), block: Event("navigateToForum") });
//   navigateToCourseFromHomePage(session);
//
//   //Navigate to the forum
//   sync({ request: Event("navigateToForum"), waitFor: Event("navigateToCourse"), block: Event("navigateToTopic") });
//   navigateToForum(session);
//
//   // Navigate to the specific topic
//   sync({ request: Event("navigateToTopic"), waitFor: Event("navigateToForum"), block: Event("commentOnForum") });
//   navigateToTopic(session);
//
//   // Comment on the forum
//   sync({ request: Event("commentOnForum"), waitFor: Event("navigateToTopic"), block: Event("checkCommentExist") });
//   commentOnForum(session)
//
//   // Verify the comment exists
//   sync({ request: Event("checkCommentExist"), waitFor: Event("commentOnForum"), block: Event("logout") });
//   checkCommentExist(session)
//
//   // Logout student
//   sync({ request: Event("logout"), waitFor: Event("checkCommentExist") });
//   logoutAfterReply(session);
//
//   // Emit the trigger event to wake up the Hide Bthread
//   sync({ request: Event("replyCompletedTrigger") });
// });

// Hide Bthread
// ----------------------------------------------------
//  Main "Hide" bthread — the overall flow
// ----------------------------------------------------
bthread('Hide', function () {
  let session = new SeleniumSession('hide');
  session.start(URL);

  // 1) Login as admin
  sync({ request: Event("loginAdmin") });
  loginAdmin(session);

  // 2) Create a course
  sync({ request: Event("createCourse"), waitFor: Event("loginAdmin") });
  createCourse(session, "test9");

  // 3) Signal to the “child” bthreads that they can now
  //    proceed to do createForum, enrollStudent, and enrollTeacher.
  sync({ request: Event("gettingToEnrollForHide") });

  // 4) Wait for all three to complete, THEN do logout
  sync({
    request: Event("logout"),
    // We must wait for these 3 events to happen first
    waitFor: [Event("createForum"), Event("enrollStudent"), Event("enrollTeacher")]
  });
  logout(session);

  // 5) After admin logs out, continue as teacher...
  sync({
    request: Event("loginTeacher"),
    waitFor: Event("logout"),
    block: Event("navigateToForum")
  });
  loginTeacher(session);

  sync({
    request: Event("navigateToCourse"),
    waitFor: Event("loginTeacher"),
    block: Event("navigateToForum")
  });
  navigateToCourseFromHomePage(session);

  sync({
    request: Event("navigateToForum"),
    waitFor: Event("navigateToCourse"),
    block: Event("hideForum")
  });
  navigateToForum(session);

  sync({
    request: Event("hideForum"),
    waitFor: Event("navigateToForum"),
    block: Event("checkForumHiding")
  });
  hideForum(session);

  sync({
    request: Event("checkForumHiding"),
    waitFor: Event("hideForum")
  });
  checkForumHiding(session);

  sync({
    request: Event("logout"),
    waitFor: Event("checkForumHiding")
  });
  logout(session);
});

// ----------------------------------------------------
//  Bthread: Create Forum
// ----------------------------------------------------
bthread('HideCreateForum', function () {
  let session = new SeleniumSession('hide');

  // Wait for the signal that we may enroll or create forum
  // and also wait for the course to be created
  sync({ waitFor: [Event("gettingToEnrollForHide"), Event("createCourse")] });

  // Ensure we never do createForum simultaneously with enrolls
  sync({
    request: Event("createForum"),
    waitFor: Event("createCourse"),
    block: [Event("enrollStudent"), Event("enrollTeacher")]
  });
  createForum(session);
});

// ----------------------------------------------------
//  Bthread: Enroll Student
// ----------------------------------------------------
bthread('HideEnrollStudent', function () {
  let session = new SeleniumSession('hide');

  // Wait for the “go” signal + course creation
  sync({ waitFor: [Event("gettingToEnrollForHide"), Event("createCourse")] });

  // Mutually exclude createForum + enrollTeacher
  sync({
    request: Event("enrollStudent"),
    waitFor: Event("createCourse"),
    block: [Event("createForum"), Event("enrollTeacher")]
  });
  enrollStudent(session);
});

// ----------------------------------------------------
//  Bthread: Enroll Teacher
// ----------------------------------------------------
bthread('HideEnrollTeacher', function () {
  let session = new SeleniumSession('hide');

  // Wait for the “go” signal + course creation
  sync({ waitFor: [Event("gettingToEnrollForHide"), Event("createCourse")] });

  // Mutually exclude createForum + enrollStudent
  sync({
    request: Event("enrollTeacher"),
    waitFor: Event("createCourse"),
    block: [Event("createForum"), Event("enrollStudent")]
  });
  enrollTeacher(session);
});

