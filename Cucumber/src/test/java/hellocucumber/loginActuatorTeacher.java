package hellocucumber;

import org.openqa.selenium.Point;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class loginActuatorTeacher {
    private static WebDriver driver;
    private static WebDriverWait wait;

    public void initSessionAsUser(String webDriver, String path) {
        // webDriver = "webdriver.chrome.driver"
        System.setProperty(webDriver, path);
        this.driver = new ChromeDriver();
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(40));
        driver.get("http://localhost/OpenCartFile/"); //TODO : Change the path
        driver.manage().window().setPosition(new Point(700, 5));
        System.out.println("Driver setup finished for - " + driver.getTitle());
    }

    public void loginAdmin() {
        return;
    }
}
