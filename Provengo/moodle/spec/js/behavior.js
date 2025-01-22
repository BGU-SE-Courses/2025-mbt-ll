/* @provengo summon selenium */

// Reply Bthread
bthread('Reply', function () {
  let session = new SeleniumSession('reply');
  session.start(URL, 'chrome');

  // Login as admin
  sync({ request: Event("loginAdmin") });

  // Create a course
  sync({ request: Event("createCourse"), waitFor: Event("loginAdmin"), block: Event("createForum") });

  sync({ request: Event("gettingToEnrollForComment")});

  // Create a forum
  sync({ request: Event("createForum"), waitFor: Event("createCourse"), block: Event("logout") });

  // Create a topic in the forum
  sync({ request: Event("createTopic"), waitFor: Event("createForum"), block: Event("logout") });

  // Logout admin
  sync({ request: Event("logout"), waitFor: Event("createForum"), block: Event("loginStudent") });
  logout(session);

  // Login as student
  sync({ request: Event("loginStudent"), waitFor: Event("logout"), block: Event("navigateToForum") });

  sync({ request: Event("navigateToCourse"), waitFor: Event("loginStudent"), block: Event("navigateToForum") });
  navigateToCourseFromHomePage(session);

  // Navigate to the forum
  sync({ request: Event("navigateToForum"), waitFor: Event("navigateToCourse"), block: Event("navigateToTopic") });
  navigateToForum(session);

  // Navigate to the specific topic
  sync({ request: Event("navigateToTopic"), waitFor: Event("navigateToForum"), block: Event("commentOnForum") });
  navigateToTopic(session);

  // Comment on the forum
  sync({ request: Event("commentOnForum"), waitFor: Event("navigateToTopic"), block: Event("checkCommentExist") });

  // Verify the comment exists
  sync({ request: Event("checkCommentExist"), waitFor: Event("commentOnForum"), block: Event("logout") });

  // Logout student
  sync({ request: Event("logout"), waitFor: Event("checkCommentExist") });
  logout(session);

  // Emit the trigger event to wake up the Hide Bthread
  sync({ request: Event("replyCompletedTrigger") });
});

// Hide Bthread
bthread('Hide', function () {
  // Wait for the Reply Bthread to signal completion using the trigger event
  sync({ waitFor: Event("replyCompletedTrigger") });

  let session = new SeleniumSession('hide');
  session.start(URL, 'chrome');

  // Login as admin
  sync({ request: Event("loginAdmin"), block: Event("createCourse") });

  // Create a course
  sync({ request: Event("createCourse"), waitFor: Event("loginAdmin"), block: Event("createForum") });

  sync({ request: Event("gettingToEnrollForHide")});

  // Create a forum
  sync({ request: Event("createForum"), waitFor: Event("createCourse"), block: Event("logoutAdmin") });

  // Logout admin
  sync({ request: Event("logout"), waitFor: Event("createForum"), block: Event("loginTeacher") });
  logout(session);

  // Login as teacher
  sync({ request: Event("loginTeacher"), waitFor: Event("logout"), block: Event("navigateToForum") });

  sync({ request: Event("navigateToCourse"), waitFor: Event("loginTeacher"), block: Event("navigateToForum") });
  navigateToCourseFromHomePage(session);

  // Navigate to the forum
  sync({ request: Event("navigateToForum"), waitFor: Event("loginTeacher"), block: Event("hideForum") });
  navigateToForum(session);

  // Block comments before hiding the forum
  sync({ request: Event("hideForum"), waitFor: Event("navigateToForum"), block: Event("checkForumHiding") });
  hideForum(session);

  // Verify the forum is hidden
  sync({ request: Event("checkForumHiding"), waitFor: Event("hideForum") });

  // Logout teacher
  sync({ request: Event("logout"), waitFor: Event("checkForumHiding") });
  logout(session);
});

bthread('CommentEnrollStudent', function () {
  sync({ waitFor: Event("gettingToEnrollForComment")});
  sync({ request: Event("enrollStudent"), block: Event("createTopic") });
});

bthread('HideEnrollStudent', function () {
  sync({ waitFor: Event("gettingToEnrollForHide")});
  sync({ request: Event("enrollStudent"), block: Event("logout") });
});

bthread('HideEnrollTeacher', function () {
  sync({ waitFor: Event("gettingToEnrollForHide")});
  sync({ request: Event("enrollTeacher"), block: Event("logout") });
});
