package hellocucumber;
import io.cucumber.java.en.*;

public class CreateTopicStepDefinitions {
    private String webDriver = "webdriver.chrome.driver";
    private String path = "...\\Selenium\\chromedriver.exe";
    private CreateTopic createTopic = new CreateTopic();

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
         createTopic.logoutAdmin();
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

}