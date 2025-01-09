package hellocucumber;
import io.cucumber.java.en.*;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class StepDefinitions {
    private String webDriver = "webdriver.chrome.driver";
    private String path = "...\\Selenium\\chromedriver.exe";
    private WebDriver driver;
    private WebDriverWait wait;

    public void LoginInitUser(){
        System.setProperty(webDriver, path);
        this.driver = new ChromeDriver();
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    }

    // The function creates forum
    @Given("There is a forum")
    public void createForum() {
    }

    // The function creates topic
    @And("There is a topic")
    public void createTopic() {
    }

    // The function go to forum page
    @And("Student is on forum page")
    public void studentInOnForumPage() {
    }

    // The function creates comment
    @When("Student comment on forum")
    public void commentingOnForum() {
    }

    // The function checks existence of comment
    @Then("The comment should be shown")
    public void commentIsShownOnForum() {
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
