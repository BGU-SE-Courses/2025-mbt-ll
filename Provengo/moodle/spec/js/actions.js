/* @provengo summon selenium */


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function loginStudent(session) {
  session.click(xpaths.Login.navigateToLogin);
  session.writeText(xpaths.Login.enterUsername,"student");
  session.writeText(xpaths.Login.enterPassword,"sandbox24");
  session.click(xpaths.Login.loginButton);
}

function loginAdmin(session) {
  session.click(xpaths.Login.navigateToLogin);
  session.writeText(xpaths.Login.enterUsername,"admin");
  session.writeText(xpaths.Login.enterPassword,"sandbox24");
  session.click(xpaths.Login.loginButton);
}

function loginTeacher(session) {
  session.click(xpaths.Login.navigateToLogin);
  session.writeText(xpaths.Login.enterUsername,"teacher");
  session.writeText(xpaths.Login.enterPassword,"sandbox24");
  session.click(xpaths.Login.loginButton);
}

function logout(session) {
  session.click(xpaths.Logout.userMenuToggle);
  sleep(1000);
  session.click(xpaths.Logout.logoutLink);
}

function createCourse(session) {
  session.click(xpaths.CreateCourse.navigateToMyCourses);
  session.click(xpaths.CreateCourse.navigateToCreateCourse);
  session.writeText(xpaths.CreateCourse.enterFullName,"test_course");
  session.writeText(xpaths.CreateCourse.enterShortName,"test11");
  session.click(xpaths.CreateCourse.createButton);
}

function navigateToCourseFromHomePage(session) {
  session.click(xpaths.NavigateToCourseFromHomePage.navigateToCourse);
}

function enrollStudent(session) {
  session.click(xpaths.EnrollStudent.navigateToParticipates);
  session.click(xpaths.EnrollStudent.enrollUserButton);
  session.writeText(xpaths.EnrollStudent.selectUserComboBox,"student");
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
    //console.error(`Error selecting "${value}" in dropdown at "${dropdownXpath}":`, error);
  }
}

function enrollTeacher(session) {
  session.click(xpaths.EnrollTeacher.navigateToParticipates);
  session.click(xpaths.EnrollTeacher.enrollUserButton);
  session.click(xpaths.EnrollTeacher.selectUserComboBox);
  session.writeText(xpaths.EnrollTeacher.selectUserComboBox,"teacher");
  selectDropdownValue(session, xpaths.EnrollTeacher.enrollTeacherRoleDropdown, "Teacher");
  session.click(xpaths.EnrollTeacher.enrollButton);
  session.click(xpaths.EnrollTeacher.navigateToCourseHome);
}

function switchToIframe(session) {
  const iframe = session.findElement('xpath','//iframe[@id="id_message_ifr"]');
  session.switchFrame(iframe);
  const tinymce = session.findElement('xpath', '//body[@id="tinymce"]');
  tinymce.sendKeys('test');
  new Promise(resolve => setTimeout(resolve, 500));
  session.switchToParentFrame();
}

//TODO add scroll
function createForum(session) {
  session.click(xpaths.CreateForum.editModeButton);
  session.click(xpaths.CreateForum.addAnActivity);
  session.click(xpaths.CreateForum.addForumButton);
  session.writeText(xpaths.CreateForum.enterForumName,"test");
  session.click(xpaths.CreateForum.createForumButton);
}

function createTopic(session) {
  session.click(xpaths.CreateTopic.addNewTopic);
  session.writeText(xpaths.CreateTopic.enterTopicSubject,"test");
  session.click("//iframe[@id='id_message_ifr']");
  session.writeText("//body[@id='tinymce']", 'test');
  session.click(xpaths.CreateTopic.submitButton);
  session.click(xpaths.CreateTopic.returnToForum);
}

function navigateToForum(session) {
 session.click(xpaths.NavigateToForum.forumLink);
}

function commentOnForum(session) {
  session.click(xpaths.CommentForum.replyButton);
  session.click(xpaths.CommentForum.enterReplyTextArea);
  session.writeText(xpaths.CommentForum.enterReplyTextArea,"reply");
  session.click(xpaths.CommentForum.postReplyButton);
}

function navigateToTopic(session) {
  session.click(xpaths.NavigateToTopic.topicLink);
}

function hideForum(session) {
  session.click(xpaths.HideForum.editForumButton);
  session.click(xpaths.HideForum.forumVisibilitySection);
  selectDropdownValue(session, xpaths.HideForum.visibilityDropdown, xpaths.HideForum.hideOnCoursePageOption);
  session.click(xpaths.HideForum.saveChangesButton);
}

function checkForumHiding(session) {
  //return session.isElementPresent(xpaths.CheckForumHiding.hiding);
}

function checkCommentExist(session) {
  session.assertText("//[@class='text_to_html']","reply");
}
