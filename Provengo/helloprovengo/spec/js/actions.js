function login(session, username, password) {
  session.click(xpaths.Login.navigateToLogin);
  session.writeText(xpaths.Login.enterUsername, username);
  session.writeText(xpaths.Login.enterPassword, password);
  session.click(xpaths.Login.loginButton);
}

function loginStudent(session, data) {
  login(session, data.Login.studentUsername, data.Login.studentPassword);
}

function loginAdmin(session, data) {
  login(session, data.Login.adminUsername, data.Login.adminPassword);
}

function loginTeacher(session, data) {
  login(session, data.Login.teacherUsername, data.Login.teacherPassword);
}

function logout(session) {
  session.click(xpaths.Logout.userMenuToggle);
  session.click(xpaths.Logout.logoutLink);
}

function createCourse(session,data){
  session.click(xpaths.CreateCourse.navigateToMyCourses);
  session.click(xpaths.CreateCourse.navigateToCreateCourse);
  session.writeText(xpaths.CreateCourse.enterFullName, data.Course.fullName);
  session.writeText(xpaths.CreateCourse.enterShortName, data.Course.shortName);
  session.click(xpaths.CreateCourse.createButton);
}

function NavigateToCourseFromHomePage(session){
  session.click(xpaths.NavigateToCourseFromHomePage.navigateToCourse)
}

function EnrollStudent{
  session.click(xpaths.EnrollStudent.navigateToParticipates)
  session.click(xpaths.EnrollStudent.enrollUserButton)
  session.click(xpaths.EnrollStudent.selectUserComboBox)
  session.click(xpaths.EnrollStudent.enrollButton)
  session.click(xpaths.EnrollStudent.navigateToCourseHome)
}

function CreateForum{
  session.click(xpaths.CreateForum.editModeButton)
  session.click(xpaths.CreateForum.addAnActivity)
  session.click(xpaths.CreateForum.addForumButton)
  session.writeText(xpaths.CreateForum.enterForumName, data.Forum.forumName)
  session.click(xpaths.CreateForum.createForumButton)
}

























function composeQuery(session, data) {
  session.writeText(xpaths.searchWindow.searchInput, data.text)
}

function startSearch(session) {
  with(session) {
    click(xpaths.searchWindow.searchButton)
  }
}

function feelLucky(session) {
  with(session) {
    click(xpaths.searchWindow.feelingLuckyButton)
  }
}