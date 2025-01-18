/* @provengo summon selenium */

/**
 * Behavior: Student Replies to a Forum Topic
 */
bthread("Student Reply to Forum", function () {
  let session = new SeleniumSession("reply"); // Initialize session
  session.start(URL, "chrome"); // Start session with specified URL and browser

  // Log in as a student
  sync({ request: session.event("loginStudent") });
  loginStudent(session, moodledata);

  // Navigate to course
  sync({ request: session.event("navigateToCourse") });
  navigateToCourseFromHomePage(session);

  // Navigate to forum
  sync({ request: session.event("navigateToForum") });
  navigateToForum(session);

  // Navigate to topic
  sync({ request: session.event("navigateToTopic") });
  navigateToTopic(session);

  // Add a comment to the forum topic
  sync({ request: session.event("commentOnForum") });
  commentOnForum(session, moodledata);

  // Validate that the comment exists
  if (checkCommentExist(session)) {
    console.log("Comment successfully added.");
  } else {
    console.error("Comment could not be added.");
  }

  // Log out
  sync({ request: session.event("logout") });
  logout(session);

  session.stop(); // End session
});

/**
 * Behavior: Teacher Hides Forum from Students
 */
bthread("Teacher Hides Forum", function () {
  let session = new SeleniumSession("hide"); // Initialize session
  session.start(URL, "chrome"); // Start session with specified URL and browser

  // Log in as a teacher
  sync({ request: session.event("loginTeacher") });
  loginTeacher(session, moodledata);

  // Navigate to course
  sync({ request: session.event("navigateToCourse") });
  navigateToCourseFromHomePage(session);

  // Navigate to forum
  sync({ request: session.event("navigateToForum") });
  navigateToForum(session);

  // Hide the forum
  sync({ request: session.event("hideForum") });
  hideForum(session);

  // Validate that the forum is hidden
  if (checkForumHiding(session)) {
    console.log("Forum successfully hidden.");
  } else {
    console.error("Forum could not be hidden.");
  }

  // Log out
  sync({ request: session.event("logout") });
  logout(session);

  session.stop(); // End session
});
