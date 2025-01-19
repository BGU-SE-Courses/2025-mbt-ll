function login(session, username, password) {
  session.findElementByXPath(xpaths.Login.navigateToLogin).click();
  session.findElementByXPath(xpaths.Login.enterUsername).sendKeys(username);
  session.findElementByXPath(xpaths.Login.enterPassword).sendKeys(password);
  session.findElementByXPath(xpaths.Login.loginButton).click();
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
  session.findElementByXPath(xpaths.Logout.userMenuToggle).click();
  session.findElementByXPath(xpaths.Logout.logoutLink).click();
}

function createCourse(session, data) {
  session.findElementByXPath(xpaths.CreateCourse.navigateToMyCourses).click();
  session.findElementByXPath(xpaths.CreateCourse.navigateToCreateCourse).click();
  session.findElementByXPath(xpaths.CreateCourse.enterFullName).sendKeys(data.Course.fullName);
  session.findElementByXPath(xpaths.CreateCourse.enterShortName).sendKeys(data.Course.shortName);
  session.findElementByXPath(xpaths.CreateCourse.createButton).click();
}

function navigateToCourseFromHomePage(session) {
  session.findElementByXPath(xpaths.NavigateToCourseFromHomePage.navigateToCourse).click();
}

function enrollStudent(session) {
  session.findElementByXPath(xpaths.EnrollStudent.navigateToParticipates).click();
  session.findElementByXPath(xpaths.EnrollStudent.enrollUserButton).click();
  session.findElementByXPath(xpaths.EnrollStudent.selectUserComboBox).sendKeys(moodledata.Login.studentUsername);
  session.findElementByXPath(xpaths.EnrollStudent.enrollButton).click();
  session.findElementByXPath(xpaths.EnrollStudent.navigateToCourseHome).click();
}

function selectDropdownValue(session, dropdownXpath, value) {
  try {
    const dropdown = session.findElementByXPath(dropdownXpath);
    dropdown.click(); // Open the dropdown
    const option = dropdown.findElement(By.xpath(`.//option[text()='${value}']`));
    option.click(); // Select the option
    console.log(`Successfully selected "${value}" in dropdown.`);
  } catch (error) {
    console.error(`Error selecting "${value}" in dropdown at "${dropdownXpath}":`, error);
  }
}

function enrollTeacher(session) {
  session.findElementByXPath(xpaths.EnrollTeacher.navigateToParticipates).click();
  session.findElementByXPath(xpaths.EnrollTeacher.enrollUserButton).click();
  session.findElementByXPath(xpaths.EnrollTeacher.selectUserComboBox).sendKeys(moodledata.Login.teacherUsername);
  selectDropdownValue(session, xpaths.EnrollTeacher.enrollTeacherRoleDropdown, "Teacher");
  session.findElementByXPath(xpaths.EnrollTeacher.enrollButton).click();
  session.findElementByXPath(xpaths.EnrollTeacher.navigateToCourseHome).click();
}

function switchToIframe(session, iframeXpath) {
  try {
    const iframe = session.findElementByXPath(iframeXpath);
    session.switchTo().frame(iframe); // Switch context to iframe
    console.log(`Switched to iframe at "${iframeXpath}".`);
  } catch (error) {
    console.error(`Error switching to iframe at "${iframeXpath}":`, error);
  }
}

function createForum(session, data) {
  session.findElementByXPath(xpaths.CreateForum.editModeButton).click();
  session.findElementByXPath(xpaths.CreateForum.addAnActivity).click();
  session.findElementByXPath(xpaths.CreateForum.addForumButton).click();
  session.findElementByXPath(xpaths.CreateForum.enterForumName).sendKeys(data.Forum.forumName);
  session.findElementByXPath(xpaths.CreateForum.createForumButton).click();
}

function createTopic(session, data) {
  session.findElementByXPath(xpaths.CreateTopic.addNewTopic).click();
  session.findElementByXPath(xpaths.CreateTopic.enterTopicSubject).sendKeys(data.Forum.topicSubject);
  switchToIframe(session, xpaths.CreateTopic.enterMessageIframe);
  const iframeBody = session.findElement(By.tagName("body"));
  iframeBody.clear();
  iframeBody.sendKeys(data.Forum.topicMessage);
  session.switchTo().defaultContent(); // Switch back to the main page
  session.findElementByXPath(xpaths.CreateTopic.submitButton).click();
  session.findElementByXPath(xpaths.CreateTopic.returnToForum).click();
}

function navigateToForum(session) {
  session.findElementByXPath(xpaths.NavigateToForum.forumLink).click();
}

function commentOnForum(session, data) {
  session.findElementByXPath(xpaths.CommentForum.replyButton).click();
  session.findElementByXPath(xpaths.CommentForum.enterReplyTextArea).sendKeys(data.Forum.replyMessage);
  session.findElementByXPath(xpaths.CommentForum.postReplyButton).click();
}

function navigateToTopic(session) {
  session.findElementByXPath(xpaths.NavigateToTopic.forumLink).click();
}

function hideForum(session) {
  session.findElementByXPath(xpaths.HideForum.editForumButton).click();
  session.findElementByXPath(xpaths.HideForum.forumVisibilitySection).click();
  selectDropdownValue(session, xpaths.HideForum.visibilityDropdown, "Hide on course page");
  session.findElementByXPath(xpaths.HideForum.saveChangesButton).click();
}

function checkForumHiding(session) {
  return session.findElementByXPath(xpaths.CheckForumHiding.hiding) !== null;
}

function checkCommentExist(session) {
  return session.findElementByXPath(xpaths.CheckCommentExist.replyExist) !== null;
}
