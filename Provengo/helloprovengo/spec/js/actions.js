

function login(session, username, password) {
  session.click(xpaths.Login.navigateToLogin);
  session.click(xpaths.Login.enterUsername);
  session.writeText(username).then(r => "");
  session.click(xpaths.Login.enterPassword);
  session.writeText(password).then(r => "");
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
  session.click(xpaths.CreateCourse.enterFullName);
  session.writeText(data.Course.fullName).then(r => "");
  session.click(xpaths.CreateCourse.enterShortName);
  session.writeText(data.Course.shortName).then(r => "");
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
  session.click(xpaths.CreateForum.enterForumName);
  session.writeText(data.Forum.forumName).then(r => "");
  session.click(xpaths.CreateForum.createForumButton);
}

let session;
session.switchToIframe = function (enterMessageIframe) {
  try {
    const iframe = session.findElementByXPath(iframeXpath);
    session.switchToFrame(iframe);
    console.log(`Successfully switched to iframe at XPath "${iframeXpath}".`);
  } catch (error) {
    console.error(`Error switching to iframe at XPath "${iframeXpath}":, error`);
  }
};

function createTopic(session, data) {
  session.click(xpaths.CreateTopic.addNewTopic);
  session.click(xpaths.CreateTopic.enterTopicSubject);
  session.writeText(data.Forum.topicSubject).then(r => "");
  session.switchToIframe(xpaths.CreateTopic.enterMessageIframe);
  session.click(xpaths.CreateTopic.enterMessageBody);
  session.writeText(data.Forum.topicMessage).then(r => "");
  session.switchToDefaultContent();
  session.click(xpaths.CreateTopic.submitButton);
  session.click(xpaths.CreateTopic.returnToForum);
}

function navigateToForum(session) {
  session.click(xpaths.NavigateToForum.forumLink);
}

function commentOnForum(session, data) {
  session.click(xpaths.CommentForum.replyButton);
  session.click(xpaths.CommentForum.enterReplyTextArea);
  session.writeText(data.Forum.replyMessage).then(r => "");
  session.click(xpaths.CommentForum.postReplyButton);
}

function navigateToTopic(session) {
  session.click(xpaths.NavigateToTopic.forumLink);
}

session.selectDropdownValue = function (enrollTeacherRoleDropdown, teacherRoleValue) {
  try {
    const dropdown = session.findElementByXPath(xpath);
    dropdown.click(); // Open the dropdown
    const optionXpath = `.//option[text()='${value}']`;
    const option = dropdown.findElementByXPath(optionXpath);
    option.click(); // Click the option to select
    console.log(`Successfully selected value "${value}" from dropdown.`);
  } catch (error) {
    console.error(`Error selecting value "${value}" from dropdown at XPath "${xpath}":, error`);
  }
};

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