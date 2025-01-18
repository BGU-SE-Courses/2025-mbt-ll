/*
 *  This is a good place to put common test data, project-wide constants, etc.
 */

const URL = "https://sandbox.moodledemo.net/";

const xpaths = {
  Login: {
    navigateToLogin: "/html/body/div[2]/nav/div/div[2]/div[5]/div/span/a",
    enterUsername: "//*[@id=\"username\"]",
    enterPassword: "//*[@id="\password\"]",
    loginButton: "//*[@id=\"loginbtn\"]"
  }
  CreateCourse: {
    navigateToMyCourses: "/html/body/div[2]/nav/div/div[1]/nav/ul/li[3]/a",
    navigateToCreateCourse: "button.btn.btn-primary[type='submit']",
    enterFullName: "//*[@id=\"id_fullname\"]",
    enterShortName: "//*[@id=\"id_shortname\"]",
    createButton: "//*[@id=\"id_saveanddisplay\"]"
  }
  NavigateToCourseFromHomePage: {
    navigateToCourse: "/html/body/div[2]/div[3]/div/div[2]/div/section/div/div[2]/div/div[1]/div[1]/h3/a"
  }
  EnrollStudent: {
    navigateToParticipates: "/html/body/div[2]/div[4]/div/div[2]/nav/ul/li[3]/a",
    enrollUserButton: "//input[@type='submit' and @class='btn btn-primary']",
    selectUserComboBox: "//input[@role='combobox' and @data-fieldtype='autocomplete']",
    enrollButton: "//button[@type='button' and @class='btn btn-primary' and @data-action='save']",
    navigateToCourseHome: "//li[@data-key='coursehome']//a"
  }
  CreateForum: {
    editModeButton: "//input[@type='checkbox' and @name='setmode']",
    addAnActivity: "/html/body/div[4]/div[5]/div/div[3]/div/section/div/div/div/ul/li[1]/div[1]/div[2]/div[2]/div/button/div/span",
    addForumButton: "//a[@title='Add a new Forum']",
    enterForumName: "//*[@id=\"id_name\"]",
    createForumButton: "//*[@id=\"id_submitbutton\"]"
  }
   CreateTopic: {
      addNewTopic: "/html/body/div[5]/div[5]/div/div[3]/div/section/div[2]/div[1]/div/div[2]/a",
      enterTopicSubject: "//[@id="id_subject"]",
      enterMessageIframe: "//[@id="id_message_ifr"]",
      enterMessageBody: "tinymce",
      submitButton: "//[@id="id_submitbutton"]",
      returnToForum: "/html/body/div[5]/div[5]/div/header/div/div[1]/div[1]/nav/ol/li[2]/a"
    }
    NavigateToForum: {
      forumLink: "/html/body/div[2]/div[4]/div/div[3]/div/section/div/div/div/ul/li[1]/div/div[2]/ul/li[2]/div/div[2]/div[2]/div/div/a"
    }
    CommentForum: {
      replyButton: "/html/body/div[2]/div[4]/div/div[2]/div/section/div[2]/div/article/div[1]/div/div/div[2]/div[2]/div/a[2]",
      enterReplyTextArea: "/html/body/div[2]/div[4]/div/div[2]/div/section/div[2]/div/article/div[1]/div/div[2]/div/form/div[1]/span/textarea",
      postReplyButton: "/html/body/div[2]/div[4]/div/div[2]/div/section/div[2]/div/article/div[1]/div/div[2]/div/form/div[2]/button[1]/span[1]"
    }
    NavigateToTopic: {
      forumLink: "/html/body/div[3]/div[4]/div/div[2]/div/section/div[2]/div[2]/div[3]/div/table/tbody/tr/th/div/div[1]/a"
    }
    Logout: {
      userMenuToggle: "//[@id="user-menu-toggle"]",
      logoutLink: "//*[@id="carousel-item-main"]/a[10]"
    }
    LogoutAfterReplying: {
      userMenuToggle: "//[@id="user-menu-toggle"]",
      logoutLink: "//*[@id="carousel-item-main"]/a[9]"
    }
    CheckCommentExist: {
      replyExist: "//*[contains(text(),'reply')]"
    }
    EnrollTeacher: {
       navigateToParticipates: "/html/body/div[2]/div[4]/div/div[2]/nav/ul/li[3]/a",
       enrollUserButton: "//input[@type='submit' and @class='btn btn-primary']",
       selectUserComboBox: "//input[@role='combobox' and @data-fieldtype='autocomplete']",
       enrollTeacherRoleDropdown: "//[@id='id_roletoassign']",
       teacherRoleValue: "3",
       enrollButton: "//button[@type='button' and @class='btn btn-primary' and @data-action='save']",
       navigateToCourseHome: "//li[@data-key='coursehome']//a"
    }
    HideForum: {
      editForumButton: "//li[@data-key='modedit']//a",
      forumVisibilitySection: "//[@id='collapseElement-8']",
      visibilityDropdown: "//[@id='id_visible']",
      hideOnCoursePageOption: "Hide on course page",
      saveChangesButton: "//[@id='id_submitbutton']"
    }
    CheckForumHiding: {
     hiding: "//*[@id=\"section-0\"]"
    }
}

const moodledata = {
  Login: {
    adminUsername: "admin",
    teacherUsername: "teacher",
    studentUsername: "student",
    password: "sandbox24"
  },
  Course: {
    fullName: "test_course",
    shortName: "test"
  },
  Forum: {
    forumName: "test",
    topicSubject: "test",
    topicMessage: "test",
    replyMessage: "reply"
  }
};