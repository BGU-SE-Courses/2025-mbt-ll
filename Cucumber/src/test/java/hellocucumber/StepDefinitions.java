package hellocucumber;
import io.cucumber.java.en.*;

public class StepDefinitions {
    private String webDriver = "webdriver.chrome.driver";
    private String path = "...\\Selenium\\chromedriver.exe";
    private MoodleActuator createTopic = new MoodleActuator();

    //Use Case : Create Topic

    public void createTopicInitUser(){
        createTopic.initSessionAsUser(webDriver,path);
    }

    // The function creates course
    @Given("There is a course")
    public void createCourse() {
        createTopicInitUser();
        createTopic.loginAdmin();
        createTopic.createCourse();
    }

    // The function creates forum
    @And("There is a forum")
    public void createForum() {
         //createTopic.goToCourse();
         createTopic.enrollUser();
         createTopic.createForum();
    }

    // The function creates topic
    @And("There is a topic")
    public void createTopic() {
         createTopic.createTopic();
         createTopic.logout();
    }

    // The function go to forum page
    @And("Student is on forum page")
    public void studentInOnForumPage() {
         createTopic.loginStudent();
         createTopic.goToCourse();
         createTopic.goToForum();
    }

    // The function creates comment
    @When("Student comment on forum")
    public void commentingOnForum() {
         createTopic.goToTopic();
         createTopic.commentForum();
    }

    // The function checks existence of comment
    @Then("The comment should be shown")
    public void commentIsShownOnForum() {
         createTopic.checkCommentExists();
    }

    //Use Case : Hide Forum

    // The function go to forum page
    @And("Teacher is enrolled")
    public void teacherIsEnrolled() {
        createTopic.enrollTeacher();
    }

    @And("Teacher is on forum page")
    public void teacherInOnForumPage() {
        createTopic.logout();
        createTopic.loginTeacher();
        createTopic.goToCourse();
    }

    //The function hides forum
    @When("Teacher hides forum")
    public void hideForum() {
        createTopic.goToForum();
        createTopic.hideForum();
        createTopic.logout();
    }

    //The function checks if forum is hidden
    @Then("The forum is hidden")
    public void hiddenForum() {
        createTopic.loginStudent();
        createTopic.goToCourse();
        createTopic.checkForumHiding();
    }

}