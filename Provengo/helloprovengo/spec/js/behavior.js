/* @provengo summon selenium */

// Define a function to create events
function createEvent(name, session) {
  return {
    name: name,
    type: "event",
    session: session,
    toString: function () {
      return `Event: ${this.name}`;
    }
  };
}

/**
 * Behavior: Student Replies to a Forum Topic
 */
bthread("Student Reply to Forum", function () {
  let session = new SeleniumSession("reply");
  session.start(URL, "chrome");

  // Log in as a student
  sync({ request: createEvent("loginStudent", session) });
  loginStudent(session, moodledata);

  // Navigate to course
  sync({ request: createEvent("navigateToCourse", session) });
  navigateToCourseFromHomePage(session);

  // Navigate to forum
  sync({ request: createEvent("navigateToForum", session) });
  navigateToForum(session);

  // Navigate to topic
  sync({ request: createEvent("navigateToTopic", session) });
  navigateToTopic(session);

  // Add a comment to the forum
  sync({ request: createEvent("commentOnForum", session) });
  commentOnForum(session, moodledata);

  // Validate that the comment exists
  if (checkCommentExist(session)) {
    console.log("Comment successfully added.");
  } else {
    console.error("Comment could not be added.");
  }

  // Log out
  sync({ request: createEvent("logout", session) });
  logout(session);

  session.stop();
});

/**
 * Behavior: Teacher Hides Forum from Students
 */
bthread("Teacher Hides Forum", function () {
  let session = new SeleniumSession("hide");
  session.start(URL, "chrome");

  // Log in as a teacher
  sync({ request: createEvent("loginTeacher", session) });
  loginTeacher(session, moodledata);

  // Navigate to course
  sync({ request: createEvent("navigateToCourse", session) });
  navigateToCourseFromHomePage(session);

  // Navigate to forum
  sync({ request: createEvent("navigateToForum", session) });
  navigateToForum(session);

  // Hide the forum
  sync({ request: createEvent("hideForum", session) });
  hideForum(session);

  // Validate that the forum is hidden
  if (checkForumHiding(session)) {
    console.log("Forum successfully hidden.");
  } else {
    console.error("Forum could not be hidden.");
  }

  // Log out
  sync({ request: createEvent("logout", session) });
  logout(session);

  session.stop();
});
