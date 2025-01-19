function login(session, username, password) {
  session.click(xpaths.Login.navigateToLogin);
  session.type(xpaths.Login.enterUsername, username);
  session.type(xpaths.Login.enterPassword, password);
  session.click(xpaths.Login.loginButton);
}

function loginStudent(session, data) {
  login(session, data.Login.studentUsername, data.Login.password);
}

function loginAdmin(session, data) {
  login(session, data.Login.adminUsername, data.Login.password);
}

function loginTeacher(session, data) {
  login(session, data.Login.teacherUsername, data.Login.password);
}

function logout(session) {
  session.click(xpaths.Logout.userMenuToggle);
  session.click(xpaths.Logout.logoutLink);
}

function createCourse(session, data) {
  session.click(xpaths.CreateCourse.navigateToMyCourses);
  session.click(xpaths.CreateCourse.navigateToCreateCourse);
  session.type(xpaths.CreateCourse.enterFullName, data.Course.fullName);
  session.type(xpaths.CreateCourse.enterShortName, data.Course.shortName);
  session.click(xpaths.CreateCourse.createButton);
}

function navigateToCourseFromHomePage(session) {
  session.click(xpaths.NavigateToCourseFromHomePage.navigateToCourse);
}

function enrollStudent(session) {
  session.click(xpaths.EnrollStudent.navigateToParticipates);
  session.click(xpaths.EnrollStudent.enrollUserButton);
  session.type(xpaths.EnrollStudent.selectUserComboBox, moodledata.Login.studentUsername);
  session.click(xpaths.EnrollStudent.enrollButton);
  session.click(xpaths.EnrollStudent.navigateToCourseHome);
}

function selectDropdownValue(session, dropdownXpath, value) {
  session.click(dropdownXpath); // Open dropdown
  session.click(`//option[text()='${value}']`); // Select option
}

function enrollTeacher(session) {
  session.click(xpaths.EnrollTeacher.navigateToParticipates);
  session.click(xpaths.EnrollTeacher.enrollUserButton);
  session.type(xpaths.EnrollTeacher.selectUserComboBox, moodledata.Login.teacherUsername);
  selectDropdownValue(session, xpaths.EnrollTeacher.enrollTeacherRoleDropdown, "Teacher");
  session.click(xpaths.EnrollTeacher.enrollButton);
  session.click(xpaths.EnrollTeacher.navigateToCourseHome);
}

function switchToIframe(session, iframeXpath) {
  session.switchToFrame(iframeXpath);
}

function createForum(session, data) {
  session.click(xpaths.CreateForum.editModeButton);
  session.click(xpaths.CreateForum.addAnActivity);
  session.click(xpaths.CreateForum.addForumButton);
  session.type(xpaths.CreateForum.enterForumName, data.Forum.forumName);
  session.click(xpaths.CreateForum.createForumButton);
}

function createTopic(session, data) {
  session.click(xpaths.CreateTopic.addNewTopic);
  session.type(xpaths.CreateTopic.enterTopicSubject, data.Forum.topicSubject);
  switchToIframe(session, xpaths.CreateTopic.enterMessageIframe);
  session.type("body", data.Forum.topicMessage); // Target body within iframe
  session.switchToDefaultContent(); // Return to main context
  session.click(xpaths.CreateTopic.submitButton);
  session.click(xpaths.CreateTopic.returnToForum);
}

function navigateToForum(session) {
  session.click(xpaths.NavigateToForum.forumLink);
}

function commentOnForum(session, data) {
  session.click(xpaths.CommentForum.replyButton);
  session.type(xpaths.CommentForum.enterReplyTextArea, data.Forum.replyMessage);
  session.click(xpaths.CommentForum.postReplyButton);
}

function navigateToTopic(session) {
  session.click(xpaths.NavigateToTopic.forumLink);
}

function hideForum(session) {
  session.click(xpaths.HideForum.editForumButton);
  session.click(xpaths.HideForum.forumVisibilitySection);
  selectDropdownValue(session, xpaths.HideForum.visibilityDropdown, "Hide on course page");
  session.click(xpaths.HideForum.saveChangesButton);
}

function checkForumHiding(session) {
  return session.findElement(xpaths.CheckForumHiding.hiding) !== null;
}

function checkCommentExist(session) {
  return session.findElement(xpaths.CheckCommentExist.replyExist) !== null;
}
