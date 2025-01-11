//package hellocucumber;
//
//import io.cucumber.java.en.And;
//import io.cucumber.java.en.Given;
//import io.cucumber.java.en.Then;
//import io.cucumber.java.en.When;
//
//public class HideForumStepDefinitions {
//    private String webDriver = "webdriver.chrome.driver";
//    private String path = "...\\Selenium\\chromedriver.exe";
//    private HideForum hideForum;
//
//    public void hideForumInitUser(){
//        System.setProperty(webDriver, path);
//        hideForum = new HideForum();
//        hideForum.initSessionAsUser(webDriver,path);
//    }
//
//    // The function creates course
//    @Given("There is a course")
//    public void createCourse() {
//        hideForumInitUser();
//        hideForum.loginAdmin();
//        hideForum.createCourse();
//    }
//
//    // The function creates forum
//    @And("There is a forum")
//    public void createForum() {
//        hideForum.goToCourse();
//        hideForum.enrollUser();
//        hideForum.enrollTeacher();
//        hideForum.createForum();
//    }
//
//    // The function go to forum page
//    @And("Teacher is on forum page")
//    public void teacherInOnForumPage() {
//        hideForum.logout();
//        hideForum.loginTeacher();
//        hideForum.goToCourse();
//    }
//
//    //The function hides forum
//    @When("Teacher hides forum")
//    public void hideForum() {
//        hideForum.hideForum();
//        hideForum.logout();
//    }
//
//    //The function checks if forum is hidden
//    @Then("The forum is hidden")
//    public void hiddenForum() {
//        hideForum.loginStudent();
//        hideForum.goToCourse();
//        hideForum.checkForumHiding();
//    }
//}
