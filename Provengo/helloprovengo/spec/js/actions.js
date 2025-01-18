function login(session, username, password) {
  session.click(xpaths.Login.navigateToLogin);
  session.writeText(xpaths.Login.enterUsername, username);
  session.writeText(xpaths.Login.enterPassword, password);
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
  session.writeText(xpaths.CreateCourse.enterFullName, data.Course.fullName);
  session.writeText(xpaths.CreateCourse.enterShortName, data.Course.shortName);
  session.click(xpaths.CreateCourse.createButton);
}

function navigateToCourseFromHomePage(session) {
  session.click(xpaths.NavigateToCourseFromHomePage.navigateToCourse);
}

function enrollStudent(session) {
  session.click(xpaths.EnrollStudent.navigateToParticipates);
  session.click(xpaths.EnrollStudent.enrollUserButton);
  session.click(xpaths.EnrollStudent.selectUserComboBox);
  session.click(xpaths.EnrollStudent.enrollButton);
  session.click(xpaths.EnrollStudent.navigateToCourseHome);
}

function createForum(session, data) {
  session.click(xpaths.CreateForum.editModeButton);
  session.click(xpaths.CreateForum.addAnActivity);
  session.click(xpaths.CreateForum.addForumButton);
  session.writeText(xpaths.CreateForum.enterForumName, data.Forum.forumName);
  session.click(xpaths.CreateForum.createForumButton);
}

function createTopic(session, data) {
  session.click(xpaths.CreateTopic.addNewTopic);
  session.writeText(xpaths.CreateTopic.enterTopicSubject, data.Forum.topicSubject);
  session.switchToIframe(xpaths.CreateTopic.enterMessageIframe);
  session.writeText(xpaths.CreateTopic.enterMessageBody, data.Forum.topicMessage);
  session.switchToDefaultContent();
  session.click(xpaths.CreateTopic.submitButton);
  session.click(xpaths.CreateTopic.returnToForum);
}

function navigateToForum(session) {
  session.click(xpaths.NavigateToForum.forumLink);
}

function commentOnForum(session, data) {
  session.click(xpaths.CommentForum.replyButton);
  session.writeText(xpaths.CommentForum.enterReplyTextArea, data.Forum.replyMessage);
  session.click(xpaths.CommentForum.postReplyButton);
}

function navigateToTopic(session) {
  session.click(xpaths.NavigateToTopic.forumLink);
}

function enrollTeacher(session) {
  session.click(xpaths.EnrollTeacher.navigateToParticipates);
  session.click(xpaths.EnrollTeacher.enrollUserButton);
  session.click(xpaths.EnrollTeacher.selectUserComboBox);
  session.selectDropdownValue(xpaths.EnrollTeacher.enrollTeacherRoleDropdown, xpaths.EnrollTeacher.teacherRoleValue);
  session.click(xpaths.EnrollTeacher.enrollButton);
  session.click(xpaths.EnrollTeacher.navigateToCourseHome);
}

function hideForum(session) {
  session.click(xpaths.HideForum.editForumButton);
  session.click(xpaths.HideForum.forumVisibilitySection);
  session.selectDropdownValue(xpaths.HideForum.visibilityDropdown, xpaths.HideForum.hideOnCoursePageOption);
  session.click(xpaths.HideForum.saveChangesButton);
}

function checkForumHiding(session) {
  return session.hiding(xpaths.CheckForumHiding.hiding);
}

function checkCommentExist(session) {
  return session.replyExist(xpaths.CheckCommentExist.replyExist);
}