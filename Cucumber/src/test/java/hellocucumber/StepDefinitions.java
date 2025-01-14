
package hellocucumber;
import io.cucumber.java.en.*;


public class StepDefinitions {
    
    private String webDriver = "webdriver.chrome.driver";
    private String path = "...\\Selenium\\chromedriver.exe";
    private MoodleActuator moodleActuator = new MoodleActuator();

    /**
     * Initializes a user session for creating topics.
     */
    public void initSession() {
        moodleActuator.initSession(webDriver, path);
    }

    // =============================
    // Use Case: Create Topic
    // =============================

    /**
     * Step: There is a course
     *
     * This step creates a course in Moodle by:
     * 1. Initializing a session.
     * 2. Logging in as an admin.
     * 3. Creating a new course.
     */
    @Given("There is a course")
    public void createCourse() {
        initSession();
        moodleActuator.loginAdmin();
        moodleActuator.createCourse();
    }

    /**
     * Step: There is a forum
     *
     * This step creates a forum within the course by:
     * 1. Enrolling a user in the course.
     * 2. Creating a forum within the course.
     */
    @And("There is a forum")
    public void createForum() {
        moodleActuator.enrollUser();
        moodleActuator.createForum();
    }

    /**
     * Step: There is a topic
     *
     * This step creates a topic in the forum by:
     * 1. Creating a topic.
     */
    @And("There is a topic")
    public void createTopic() {
        moodleActuator.createTopic();
    }

    /**
     * Step: "Student is on forum page"
     *
     * This step simulates a student navigating to the forum page by:
     * 1. Logging out as admin.
     * 2. Logging in as a student.
     * 3. Navigating to the course.
     * 4. Accessing the forum page.
     */
    @And("Student is on forum page")
    public void studentInOnForumPage() {
        moodleActuator.logout();
        moodleActuator.loginStudent();
        moodleActuator.goToCourse();
        moodleActuator.goToForum();
    }

    /**
     * Step: "Student comment on forum"
     *
     * This step simulates a student posting a comment in a forum by:
     * 1. Navigating to a specific topic within the forum.
     * 2. Posting a comment in the forum.
     */
    @When("Student comment on forum")
    public void commentingOnForum() {
        moodleActuator.goToTopic();
        moodleActuator.commentForum();
    }

    /**
     * Step: "The comment should be shown"
     *
     * This step verifies that a student's comment is visible in the forum.
     */
    @Then("The comment should be shown")
    public void commentIsShownOnForum() {
        moodleActuator.checkCommentExists();
    }

    // =============================
    // Use Case: Hide Forum
    // =============================

    /**
     * Step: "Teacher is enrolled"
     *
     * This step enrolls a teacher into the course.
     */
    @And("Teacher is enrolled")
    public void teacherIsEnrolled() {
        moodleActuator.enrollTeacher();
    }

    /**
     * Step: "Teacher is on forum page"
     *
     * This step simulates a teacher navigating to the forum page by:
     * 1. Logging out as admin.
     * 2. Logging in as a teacher.
     * 3. Navigating to the course.
     */
    @And("Teacher is on forum page")
    public void teacherInOnForumPage() {
        moodleActuator.logout();
        moodleActuator.loginTeacher();
        moodleActuator.goToCourse();
    }

    /**
     * Step: "Teacher hides forum"
     *
     * This step simulates a teacher hiding a forum by:
     * 1. Accessing the forum page.
     * 2. Executing the hide forum action.
     * 3. Logging out as teacher.
     */
    @When("Teacher hides forum")
    public void hideForum() {
        moodleActuator.goToForum();
        moodleActuator.hideForum();
        moodleActuator.logout();
    }

    /**
     * Step: "The forum is hidden"
     *
     * This step verifies that the forum is hidden from students by:
     * 1. Logging in as a student.
     * 2. Navigating to the course.
     * 3. Checking the visibility status of the forum.
     */
    @Then("The forum is hidden")
    public void hiddenForum() {
        moodleActuator.loginStudent();
        moodleActuator.goToCourse();
        moodleActuator.checkForumHiding();
    }
}