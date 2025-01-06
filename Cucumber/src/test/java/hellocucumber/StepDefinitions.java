package hellocucumber;

import io.cucumber.java.en.*;

import org.junit.jupiter.api.Assertions.*;

public class StepDefinitions {

    // The function creates forum
    @Given("There is a forum")
    public void createForum() {

    }

    // The function creates comment
    @When("Student comment on forum")
    public void commentingOnForum() {
    }

    // The function checks existence of comment
    @Then("The comment should be shown")
    public void commentIsShownOnForum() {
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
