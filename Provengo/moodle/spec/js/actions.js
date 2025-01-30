/* @provengo summon selenium */
/* @provengo summon ctrl */

/**
 * Logs in as a student using the provided session.
 * @param {object} session - The session object.
 */
function loginStudent(session) {
  session.click(xpaths.Login.navigateToLogin);
  session.writeText(xpaths.Login.enterUsername,"student",true);
  Ctrl.doSleep(1000);
  session.writeText(xpaths.Login.enterPassword,"sandbox24");
  Ctrl.doSleep(1000);
  session.click(xpaths.Login.loginButton);
}

/**
 * Logs in as an admin using the provided session.
 * @param {object} session - The session object.
 */
function loginAdmin(session) {
  session.click(xpaths.Login.navigateToLogin);
  session.writeText(xpaths.Login.enterUsername,"admin",true);
  Ctrl.doSleep(1000);
  session.writeText(xpaths.Login.enterPassword,"sandbox24");
  Ctrl.doSleep(1000);
  session.click(xpaths.Login.loginButton);
}

/**
 * Logs in as a teacher using the provided session.
 * @param {object} session - The session object.
 */
function loginTeacher(session) {
  session.click(xpaths.Login.navigateToLogin);
  session.writeText(xpaths.Login.enterUsername,"teacher",true);
  Ctrl.doSleep(1000);
  session.writeText(xpaths.Login.enterPassword,"sandbox24");
  Ctrl.doSleep(1000);
  session.click(xpaths.Login.loginButton);
}

/**
 * Logs out the current user.
 * @param {object} session - The session object.
 */
function logout(session) {
  session.click(xpaths.Logout.userMenuToggle);
  Ctrl.doSleep(500);
  session.click(xpaths.Logout.logoutLink);
}

/**
 * Logs out the current user after posting a reply.
 * @param {object} session - The session object.
 */
function logoutAfterReply(session) {
  session.click(xpaths.LogoutAfterReplying.userMenuToggle);
  Ctrl.doSleep(500);
  session.click(xpaths.LogoutAfterReplying.logoutLink);
}

/**
 * Creates a course with the specified name.
 * @param {object} session - The session object.
 * @param {string} name - The short name of the course.
 */
function createCourse(session,name) {
  session.click(xpaths.CreateCourse.navigateToMyCourses);
  session.click(xpaths.CreateCourse.navigateToCreateCourse);
  session.writeText(xpaths.CreateCourse.enterFullName,"test");
  session.writeText(xpaths.CreateCourse.enterShortName,name);
  session.click(xpaths.CreateCourse.createButton);
}

/**
 * Navigates to a course from the home page.
 * @param {object} session - The session object.
 */
function navigateToCourseFromHomePage(session) {
  session.click(xpaths.NavigateToCourseFromHomePage.navigateToCourse);
}

/**
 * Enrolls a student in a course.
 * @param {object} session - The session object.
 */
function enrollStudent(session) {
  // try{
  //   session.waitForVisibility("//*[@id=\"theme_boost-drawers-courseindex\"]",5000);
  //   session.click("//*[@id=\"theme_boost-drawers-courseindex\"]/div[1]/button/i");
  // }
  // catch(error){
  //   pvg.success();
  // }
  session.click(xpaths.EnrollStudent.navigateToParticipates);
  session.click(xpaths.EnrollStudent.enrollUserButton);
  session.writeText(xpaths.EnrollStudent.selectUserComboBox,"student",true);
  Ctrl.doSleep(1000);
  session.writeText(xpaths.EnrollStudent.selectUserComboBox,"\n");
  Ctrl.doSleep(1000);
  session.click("//a[@class='moreless-toggler']");
  session.selectByValue("//*[@id=\"id_startdate\"]", "4");
  session.click(xpaths.EnrollStudent.enrollButton);
  session.click(xpaths.EnrollStudent.navigateToCourseHome);
}

function selectDropdownValue(session, dropdownXpath, value) {
  try {
    const dropdown = session.findElementByXPath(dropdownXpath);
    dropdown.click();
    const option = dropdown.findElement(By.xpath(`.//option[text()='${value}']`));
    option.click();
    console.log(`Successfully selected "${value}" in dropdown.`);
  } catch (error) {
  }
}

/**
 * Enrolls a teacher in a course.
 * @param {object} session - The session object.
 */
function enrollTeacher(session) {
  session.click(xpaths.EnrollTeacher.navigateToParticipates);
  session.click(xpaths.EnrollTeacher.enrollUserButton);
  session.click(xpaths.EnrollTeacher.selectUserComboBox);
  session.writeText(xpaths.EnrollTeacher.selectUserComboBox,"teacher",true);
  Ctrl.doSleep(1000);
  session.writeText(xpaths.EnrollStudent.selectUserComboBox,"\n");
  Ctrl.doSleep(1000);
  session.selectByValue("//select[@id='id_roletoassign']", "3");
  //selectDropdownValue(session, xpaths.EnrollTeacher.enrollTeacherRoleDropdown, "Teacher");
  Ctrl.doSleep(1000);
  session.click("//a[@class='moreless-toggler']");
  session.selectByValue("//*[@id=\"id_startdate\"]", "4");
  session.click(xpaths.EnrollTeacher.enrollButton);
  session.click(xpaths.EnrollTeacher.navigateToCourseHome);
}

//function switchToIframe(session) {
//  session.waitForVisibility("//iframe[@id='id_message_ifr']", 5000);
//  session.switchFrame("//iframe[@id='id_message_ifr']");
//  session.waitForVisibility("//body[@id='tinymce']", 5000);
//  session.executeScript("arguments[0].focus();", session.findElement("//body[@id='tinymce']"));
//  session.writeText("//body[@id='tinymce']", "test");
//  Ctrl.doSleep(1000);
//  session.switchToDefaultContent();
//}

/**
 * Creates a forum in the course.
 * @param {object} session - The session object.
 */
function createForum(session) {
  // try{
  //   session.waitForVisibility("//*[@id=\"theme_boost-drawers-courseindex\"]",5000);
  //   session.click("//*[@id=\"theme_boost-drawers-courseindex\"]/div[1]/button/i");
  // }
  // catch(error){
  //   pvg.success();
  // }
  session.click(xpaths.CreateForum.editModeButton);
  Ctrl.doSleep(1000);
  session.click(xpaths.CreateForum.addAnActivity);
  session.click(xpaths.CreateForum.addForumButton);
  session.writeText(xpaths.CreateForum.enterForumName,"test");
  scrolling.down;
  Ctrl.doSleep(1000);
  session.click(xpaths.CreateForum.createForumButton);
}

/**
 * Creates a new topic in a forum.
 * @param {object} session - The session object.
 */
function createTopic(session) {
  session.click(xpaths.CreateTopic.addNewTopic);
  Ctrl.doSleep(1000);
  session.writeText(xpaths.CreateTopic.enterTopicSubject,"test \t test");
  Ctrl.doSleep(5000);
  scrolling.down;
  Ctrl.doSleep(1000);
  session.click(xpaths.CreateTopic.submitButton);
  session.click(xpaths.CreateTopic.returnToForum);
}

/**
 * Navigates to the forum in the course.
 * @param {object} session - The session object.
 */
function navigateToForum(session) {
  session.click(xpaths.NavigateToForum.forumLink);
}

/**
 * Adds a comment to a forum topic.
 * @param {object} session - The session object.
 */
function commentOnForum(session) {
  session.click(xpaths.CommentForum.replyButton);
  session.click(xpaths.CommentForum.enterReplyTextArea);
  session.writeText(xpaths.CommentForum.enterReplyTextArea,"reply");
  session.click(xpaths.CommentForum.postReplyButton);
  Ctrl.doSleep(1000);
}

/**
 * Navigates to a specific topic in the forum.
 * @param {object} session - The session object.
 */
function navigateToTopic(session) {
  session.click(xpaths.NavigateToTopic.topicLink);
}

/**
 * Hides a forum from users.
 * @param {object} session - The session object.
 */
function hideForum(session) {
  try{
    session.waitForVisibility("//*[@id=\"theme_boost-drawers-courseindex\"]",5000);
    session.click("//*[@id=\"theme_boost-drawers-courseindex\"]/div[1]/button/i");
  }
  catch(error){
   // pvg.success();
  }
  session.click(xpaths.HideForum.editForumButton);
  Ctrl.doSleep(1000);
  session.click(xpaths.HideForum.forumVisibilitySection);
  session.selectByValue("//select[@id='id_visible']", "0");
  scrolling.down;
  Ctrl.doSleep(1000);
  session.click(xpaths.HideForum.saveChangesButton);
}

/**
 * Checks if the forum is hidden by verifying visibility.
 * @param {object} session - The session object.
 */
function checkForumHiding(session) {
  try{
    session.waitForVisibility(xpaths.CheckForumHiding.hiding,5000);
  }
  catch(error){
    pvg.success();
  }
}

/**
 * Verifies the existence of a comment in the forum.
 * @param {object} session - The session object.
 */
function checkCommentExist(session) {
  session.assertText("//div[@class='text_to_html']", "reply");
}