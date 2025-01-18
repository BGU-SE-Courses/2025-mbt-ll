/* @provengo summon selenium */

/**
 * This story creates a new reply comment by a student on an existing topic in a course's forum.
 */
bthread("Reply", function () {
  let session = new SeleniumSession("reply");
  session.start(URL, "chrome"); // Ensure browser type is specified

  // Log in as a student
  loginStudent(session, moodledata);

  // Wait for and navigate to the course
  let navigateToCourseEvent = session.event("navigateToCourse");
  waitFor(navigateToCourseEvent);
  navigateToCourseFromHomePage(session);

  // Wait for and navigate to the forum
  let navigateToForumEvent = session.event("navigateToForum");
  waitFor(navigateToForumEvent);
  navigateToForum(session);

  // Wait for and navigate to the topic
  let navigateToTopicEvent = session.event("navigateToTopic");
  waitFor(navigateToTopicEvent);
  navigateToTopic(session);

  // Block hiding the forum during this interaction
  block(session.event("hideForum"));

  // Wait for and add a comment to the forum
  let commentOnForumEvent = session.event("commentOnForum");
  waitFor(commentOnForumEvent);
  commentOnForum(session, moodledata);

  // Check if the comment exists
  if (checkCommentExist(session)) {
    console.log("Comment successfully added.");
  } else {
    console.error("Comment could not be added.");
  }

  // Wait for and log out
  let logoutEvent = session.event("logout");
  waitFor(logoutEvent);
  logout(session);

  session.stop();
});

/**
 * This story hides a forum from students by a teacher.
 */
bthread("Hide", function () {
  let session = new SeleniumSession("hide");
  session.start(URL, "chrome"); // Ensure browser type is specified

  // Log in as a teacher
  loginTeacher(session, moodledata);

  // Wait for and navigate to the course
  let navigateToCourseEvent = session.event("navigateToCourse");
  waitFor(navigateToCourseEvent);
  navigateToCourseFromHomePage(session);

  // Wait for and navigate to the forum
  let navigateToForumEvent = session.event("navigateToForum");
  waitFor(navigateToForumEvent);
  navigateToForum(session);

  // Block commenting on the forum during this interaction
  block(session.event("commentOnForum"));

  // Wait for and hide the forum
  let hideForumEvent = session.event("hideForum");
  waitFor(hideForumEvent);
  hideForum(session);

  // Check if the forum is successfully hidden
  if (checkForumHiding(session)) {
    console.log("Forum successfully hidden.");
  } else {
    console.error("Forum could not be hidden.");
  }

  // Wait for and log out
  let logoutEvent = session.event("logout");
  waitFor(logoutEvent);
  logout(session);

  session.stop();
});
