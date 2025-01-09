package hellocucumber;
import io.cucumber.java.en.*;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;
import java.util.ArrayList;

public class StepDefinitions {
    private String webDriver = "webdriver.chrome.driver";
    private String path = "...\\Selenium\\chromedriver.exe";
    private HideForum hideForum;
    private CreateTopic createTopic;


    public void createTopicInitUser(){
        System.setProperty(webDriver, path);
        createTopic = new CreateTopic();
        createTopic.initSessionAsUser(webDriver,path);
    }

    public void hideForumInitUser(){
        System.setProperty(webDriver, path);
        hideForum = new HideForum();
        hideForum.initSessionAsUser(webDriver,path);
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
        createTopic.goToCourse();
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



    // The function go to forum page
    @And("Teacher is on forum page")
    public void teacherInOnForumPage() {


    }

    //The function hides forum
    @When("Teacher hides forum")
    public void hideForum() {
    }

    //The function checks if forum is hidden
    @Then("The forum is hidden")
    public void hiddenForum() {
    }

}
