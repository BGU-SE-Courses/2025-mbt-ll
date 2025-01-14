package hellocucumber;

import org.openqa.selenium.By;
import org.openqa.selenium.Point;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;
import java.util.List;

public class CreateTopic {
    private static final WebDriver driver= new ChromeDriver();
    private static final WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

    public void initSessionAsUser(String webDriver, String path) {
        System.setProperty(webDriver, path);
        driver.get("https://sandbox.moodledemo.net/");
        driver.manage().window().setPosition(new Point(700, 5));
    }

    public void loginAdmin() {
        driver.findElement(By.xpath("/html/body/div[2]/nav/div/div[2]/div[5]/div/span/a")).click();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"username\"]"))).sendKeys("admin");
        try {
            Thread.sleep(250);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"password\"]"))).sendKeys("sandbox24");
        driver.findElement(By.xpath("//*[@id=\"loginbtn\"]")).click();
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    //TODO (maybe css selector) find other identifier than text? + update shortname value each run
    public void createCourse() {
        driver.findElement(By.xpath("/html/body/div[2]/nav/div/div[1]/nav/ul/li[3]/a")).click();
        driver.findElement(By.xpath("//button[text()='Create course']")).click();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"id_fullname\"]"))).sendKeys("test_course");
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"id_shortname\"]"))).sendKeys("test");
        driver.findElement(By.xpath("//*[@id=\"id_saveanddisplay\"]")).click();
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void goToCourse() {
        wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("/html/body/div[2]/div[3]/div/div[2]/div/section/div/div[2]/div/div[1]/div[1]/h3/a")));
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("/html/body/div[2]/div[3]/div/div[2]/div/section/div/div[2]/div/div[1]/div[1]/h3/a"))).click();
    }

    //TODO other identifier than text?
    public void enrollUser() {
        driver.findElement(By.xpath("/html/body/div[2]/div[4]/div/div[2]/nav/ul/li[3]/a")).click();
        driver.findElement(By.xpath("//input[@data-initial-value='Enrol users']")).click();
        driver.findElement(By.xpath("//*[@id=\"form_autocomplete_input-1736448939818\"]")).click();
        driver.findElement(By.xpath("/html/body/div[6]/div[2]/div/div/div[2]/form/fieldset/div[2]/div[1]/div[2]/ul/li[3]/span")).click();
        driver.findElement(By.xpath("//*[@id=\"yui_3_18_1_1_1736448939619_665\"]")).click();
        driver.findElement(By.xpath("//*[@id=\"id_startdate\"]")).click();
        driver.findElement(By.xpath("//*[@id=\"yui_3_18_1_1_1736448939619_691\"]")).click();
        driver.findElement(By.xpath("//*[@id=\"yui_3_18_1_1_1736448939619_877\"]")).click();
        driver.findElement(By.xpath("//*[@id=\"yui_3_18_1_1_1736449386912_402\"]")).click();
    }

    public void createForum() {
        driver.findElement(By.xpath("//*[@id=\"67801dacecf3967801dacea8f76-editingswitch\"]")).click();
        driver.findElement(By.xpath("/html/body/div[4]/div[5]/div/div[3]/div/section/div/div/div/ul/li[1]/div[1]/div[2]/div[2]/div/button/div/span")).click();
        driver.findElement(By.xpath("/html/body/div[7]/div[2]/div/div/div[2]/div/div/div[1]/div/div[2]/div[2]/div[2]/div/div[8]/div/a")).click();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"id_name\"]"))).sendKeys("test");
        driver.findElement(By.xpath("//*[@id=\"id_submitbutton\"]")).click();
    }

    public void createTopic() {
        driver.findElement(By.xpath("/html/body/div[5]/div[5]/div/div[3]/div/section/div[2]/div[1]/div/div[2]/a")).click();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"id_subject\"]"))).sendKeys("test");
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("Iframe: //*[@id=\"id_message_ifr\"]\n" +
                "XPath: /html/body/p"))).sendKeys("test");
        driver.findElement(By.xpath("//*[@id=\"id_submitbutton\"]")).click();
        driver.findElement(By.xpath("/html/body/div[5]/div[5]/div/header/div/div[1]/div[1]/nav/ol/li[2]/a")).click();
    }

    public void logoutAdmin() {
        driver.findElement(By.xpath("//*[@id=\"user-menu-toggle\"]")).click();
        driver.findElement(By.xpath("/html/body/div[4]/nav/div/div[2]/div[5]/div/div/div/div/div/div[1]/a[10]")).click();
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void loginStudent() {
        driver.findElement(By.xpath("/html/body/div[2]/nav/div/div[2]/div[5]/div/span/a")).click();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"username\"]"))).sendKeys("student");
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"password\"]"))).sendKeys("sandbox24");
        driver.findElement(By.xpath("//*[@id=\"loginbtn\"]")).click();
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void goToForum() {
        driver.findElement(By.xpath("/html/body/div[2]/div[4]/div/div[3]/div/section/div/div/div/ul/li[1]/div/div[2]/ul/li[2]/div/div[2]/div[2]/div/div/a")).click();
    }

    public void goToTopic() {
        driver.findElement(By.xpath("/html/body/div[3]/div[4]/div/div[2]/div/section/div[2]/div[2]/div[3]/div/table/tbody/tr/th/div/div[1]/a")).click();
    }

    public void commentForum() {
        driver.findElement(By.xpath("/html/body/div[2]/div[4]/div/div[2]/div/section/div[2]/div/article/div[1]/div/div/div[2]/div[2]/div/a[2]")).click();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("/html/body/div[2]/div[4]/div/div[2]/div/section/div[2]/div/article/div[1]/div/div[2]/div/form/div[1]/span/textarea"))).sendKeys("reply");
        driver.findElement(By.xpath("/html/body/div[2]/div[4]/div/div[2]/div/section/div[2]/div/article/div[1]/div/div[2]/div/form/div[2]/button[1]/span[1]")).click();
    }

    public boolean checkCommentExists() {
        try {
            WebElement commentsSection = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("forum-comments-id"))); // Replace 'forum-comments-id' with the actual ID or locator for the comments section.
            List<WebElement> comments = commentsSection.findElements(By.tagName("p"));
            for (WebElement comment : comments) {
                if (comment.getText().equals("reply")) {
                    return true;
                }
            }
            return false;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}