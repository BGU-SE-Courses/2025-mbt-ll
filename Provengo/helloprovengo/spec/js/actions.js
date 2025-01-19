function login(session, username, password) {
  session.click(xpaths.Login.navigateToLogin);
  session.sendKeys(xpaths.Login.enterUsername, username);
  session.sendKeys(xpaths.Login.enterPassword, password);
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
  session.sendKeys(xpaths.CreateCourse.enterFullName, data.Course.fullName);
  session.sendKeys(xpaths.CreateCourse.enterShortName, data.Course.shortName);
  session.click(xpaths.CreateCourse.createButton);
}

function navigateToCourseFromHomePage(session) {
  session.click(xpaths.NavigateToCourseFromHomePage.navigateToCourse);
}

function enrollStudent(session) {
  session.click(xpaths.EnrollStudent.navigateToParticipates);
  session.click(xpaths.EnrollStudent.enrollUserButton);
  session.sendKeys(xpaths.EnrollStudent.selectUserComboBox, moodledata.Login.studentUsername);
  session.click(xpaths.EnrollStudent.enrollButton);
  session.click(xpaths.EnrollStudent.navigateToCourseHome);
}

// Improved selectDropdownValue
function selectDropdownValue(session, dropdownXpath, value) {
  try {
    const dropdown = session.findElementByXPath(dropdownXpath); // Locate the dropdown
    dropdown.click(); // Open the dropdown
    const optionXpath = `.//option[text()='${value}']`; // Find the desired option
    const option = dropdown.findElementByXPath(optionXpath);
    option.click(); // Select the option
    console.log(`Successfully selected "${value}" in dropdown at "${dropdownXpath}".`);
  } catch (error) {
    console.error(`Error selecting "${value}" in dropdown at "${dropdownXpath}":`, error);
  }
}

function enrollTeacher(session) {
  session.click(xpaths.EnrollTeacher.navigateToParticipates);
  session.click(xpaths.EnrollTeacher.enrollUserButton);
  session.sendKeys(xpaths.EnrollTeacher.selectUserComboBox, moodledata.Login.teacherUsername);
  selectDropdownValue(session, xpaths.EnrollTeacher.enrollTeacherRoleDropdown, "Teacher");
  session.click(xpaths.EnrollTeacher.enrollButton);
  session.click(xpaths.EnrollTeacher.navigateToCourseHome);
}

// Improved switchToIframe
function switchToIframe(session, iframeXpath) {
  try {
    const iframe = session.findElementByXPath(iframeXpath); // Locate the iframe
    session.switchToFrame(iframe); // Switch context to iframe
    console.log(`Switched to iframe at "${iframeXpath}".`);
  } catch (error) {
    console.error(`Error switching to iframe at "${iframeXpath}":`, error);
  }
}

function createForum(session, data) {
  session.click(xpaths.CreateForum.editModeButton);
  session.click(xpaths.CreateForum.addAnActivity);
  session.click(xpaths.CreateForum.addForumButton);
  session.sendKeys(xpaths.CreateForum.enterForumName, data.Forum.forumName);
  session.click(xpaths.CreateForum.createForumButton);
}

function createTopic(session, data) {
  session.click(xpaths.CreateTopic.addNewTopic);
  session.sendKeys(xpaths.CreateTopic.enterTopicSubject, data.Forum.topicSubject);
  switchToIframe(session, xpaths.CreateTopic.enterMessageIframe);
  const iframeBody = session.findElementByTagName("body"); // Locate the body tag in the iframe
  iframeBody.clear(); // Clear any existing content
  iframeBody.sendKeys(data.Forum.topicMessage); // Enter the message
  session.switchToDefaultContent(); // Switch back to the main page
  session.click(xpaths.CreateTopic.submitButton);
  session.click(xpaths.CreateTopic.returnToForum);
}

function navigateToForum(session) {
  session.click(xpaths.NavigateToForum.forumLink);
}

function commentOnForum(session, data) {
  session.click(xpaths.CommentForum.replyButton);
  session.sendKeys(xpaths.CommentForum.enterReplyTextArea, data.Forum.replyMessage);
  session.click(xpaths.CommentForum.postReplyButton);
}

function navigateToTopic(session) {
  session.click(xpaths.NavigateToTopic.forumLink);
}

function hideForum(session) {
  session.click(xpaths.HideForum.editForumButton);
  session.click(xpaths.HideForum.forumVisibilitySection);
  selectDropdownValue(session, xpaths.HideForum.visibilityDropdown, xpaths.HideForum.hideOnCoursePageOption);
  session.click(xpaths.HideForum.saveChangesButton);
}

function checkForumHiding(session) {
  return session.isElementPresent(xpaths.CheckForumHiding.hiding);
}

function checkCommentExist(session) {
  return session.isElementPresent(xpaths.CheckCommentExist.replyExist);
}
