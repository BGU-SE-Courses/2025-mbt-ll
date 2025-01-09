package hellocucumber;

import org.openqa.selenium.By;
import org.openqa.selenium.Point;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class loginActuatorTeacher {
    private static WebDriver driver;
    private static WebDriverWait wait;

    public void initSessionAsUser(String webDriver, String path) {
        System.setProperty(webDriver, path);
        this.driver = new ChromeDriver();
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        driver.get("https://sandbox.moodledemo.net/");
        driver.manage().window().setPosition(new Point(700, 5));
        System.out.println("Driver setup finished for - " + driver.getTitle());
    }

    public void loginTeacher(){
        driver.findElement(By.xpath("/html/body/div[2]/nav/div/div[2]/div[5]/div/span/a")).click();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"username\"]"))).sendKeys("teacher");
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"password\"]"))).sendKeys("sandbox24");
        driver.findElement(By.xpath("//*[@id=\"loginbtn\"]")).click();
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
