package hellocucumber;

import io.cucumber.java.en.*;


public class StepDefinitions {

    private final MoodleActuator moodleActuator = new MoodleActuator();

    /**
     * Initializes a user session.
     */
    public void initSession() {
        String path = "...\\Selenium\\chromedriver.exe";
        String webDriver = "webdriver.chrome.driver";
        moodleActuator.initSession(webDriver, path);
    }

    // =============================
    // Use Case: Create Topic
    // =============================

    /**
     * Step: There is a course
     * <p>
     * This step creates a course in Moodle by:
     * 1. Initializing a session.
     * 2. Logging in as an admin.
     * 3. Creating a new course.
     */
    @Given("There is a course for comments scenario")
    public void createCourseForCommenting() {
        initSession();
        moodleActuator.login("admin", "sandbox24");
        moodleActuator.createCourse("test9");
    }

    /**
     * Step: There is a forum
     * <p>
     * This step creates a forum within the course by:
     * 1. Enrolling a student in the course.
     * 2. Creating a forum within the course.
     */
    @And("There is a forum for comments scenario")
    public void createForumForCommenting() {
        moodleActuator.enrollStudent();
        moodleActuator.createForum("forum1");
    }

    /**
     * Step: There is a topic
     * <p>
     * This step creates a topic in the forum by:
     * 1. Creating a topic.
     */
    @And("There is a topic")
    public void createTopic() {
        moodleActuator.createTopic();
    }

    /**
     * Step: "Student is on forum page"
     * <p>
     * This step simulates a student navigating to the forum page by:
     * 1. Logging out as admin.
     * 2. Logging in as a student.
     * 3. Navigating to the course.
     * 4. Accessing the forum page.
     */
    @And("Student is on forum page")
    public void studentInOnForumPage() {
        moodleActuator.logout();
        moodleActuator.login("student", "sandbox24");
        moodleActuator.goToCourse();
        moodleActuator.goToForum();
    }

    /**
     * Step: "Student comment on forum"
     * <p>
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
     * <p>
     * This step verifies that a student's comment is visible in the forum and logs out the user.
     */
    @Then("The comment should be shown")
    public void commentIsShownOnForum() {
        moodleActuator.checkCommentExists();
        moodleActuator.logoutAfterReplying();
    }

    // =============================
    // Use Case: Hide Forum
    // =============================

    /**
     * Step: There is a course
     * <p>
     * This step creates a course in Moodle by:
     * 2. Logging in as an admin.
     * 3. Creating a new course.
     */
    @Given("There is a course for hiding forum scenario")
    public void createCourseForHiding() {
        moodleActuator.login("admin", "sandbox24");
        moodleActuator.createCourse("test1");
    }

    /**
     * Step: There is a forum
     * <p>
     * This step creates a forum within the course by:
     * 1. Enrolling a user in the course.
     * 2. Creating a forum within the course.
     */
    @And("There is a forum for hiding scenario")
    public void createForumForHiding() {
        moodleActuator.enrollStudent();
        moodleActuator.createForum("forum2");
    }

    /**
     * Step: "Teacher is enrolled"
     * <p>
     * This step enrolls a teacher into the course.
     */
    @And("Teacher is enrolled")
    public void teacherIsEnrolled() {
        moodleActuator.enrollTeacher();
    }

    /**
     * Step: "Teacher is on forum page"
     * <p>
     * This step simulates a teacher navigating to the forum page by:
     * 1. Logging out as admin.
     * 2. Logging in as a teacher.
     * 3. Navigating to the course.
     */
    @And("Teacher is on forum page")
    public void teacherInOnForumPage() {
        moodleActuator.logout();
        moodleActuator.login("teacher", "sandbox24");
        moodleActuator.goToCourse();
    }

    /**
     * Step: "Teacher hides forum"
     * <p>
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
     * <p>
     * This step verifies that the forum is hidden from students by:
     * 1. Logging in as a student.
     * 2. Navigating to the course.
     * 3. Checking the visibility status of the forum.
     */
    @Then("The forum is hidden")
    public void hiddenForum() {
        moodleActuator.login("student", "sandbox24");
        moodleActuator.goToCourse();
        moodleActuator.checkForumHiding();
    }
}