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

  }



  searchWindow: {
    searchInput: '//textarea[@aria-label="Search"]',
    searchButton: '//input[@aria-label="Google Search"]',
    feelingLuckyButton: '//input[@aria-label="I\'m Feeling Lucky"]',

  }
}

const searchTerm = 'pizza'