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
    session.writeText(moodledata.Login.studentUsername).then(r => "");
    session.click(xpaths.EnrollStudent.enrollButton);
    session.click(xpaths.EnrollStudent.navigateToCourseHome);
}

function selectDropdownValue(session, dropdownXpath, value) {
    try {
        const dropdown = session.findElementByXPath(dropdownXpath);
        dropdown.click(); // Open the dropdown
        const optionXpath = `.//option[text()='${value}']`;
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
    session.click(xpaths.EnrollTeacher.selectUserComboBox);
    session.writeText(moodledata.Login.teacherUsername).then(r => "");
    selectDropdownValue(session, xpaths.EnrollTeacher.enrollTeacherRoleDropdown, "Teacher");
    session.click(xpaths.EnrollTeacher.enrollButton);
    session.click(xpaths.EnrollTeacher.navigateToCourseHome);
}

function switchToIframe(session, iframeXpath) {
    try {
        const iframe = session.findElementByXPath(iframeXpath);
        session.switchToFrame(iframe);
        console.log(`Switched to iframe at "${iframeXpath}".`);
    } catch (error) {
        console.error(`Error switching to iframe at "${iframeXpath}":`, error);
    }
}

function createForum(session, data) {
    session.click(xpaths.CreateForum.editModeButton);
    session.click(xpaths.CreateForum.addAnActivity);
    session.click(xpaths.CreateForum.addForumButton);
    session.click(xpaths.CreateForum.enterForumName);
    session.writeText(data.Forum.forumName).then(r => "");
    session.click(xpaths.CreateForum.createForumButton);
}

function createTopic(session, data) {
    session.click(xpaths.CreateTopic.addNewTopic);
    session.click(xpaths.CreateTopic.enterTopicSubject);
    session.writeText(data.Forum.topicSubject).then(r => "");
    switchToIframe(session, xpaths.CreateTopic.enterMessageIframe);
    const iframeBody = session.findElementByTagName("body");
    iframeBody.clear();
    iframeBody.writeText(data.Forum.topicMessage).then(r => "");
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
