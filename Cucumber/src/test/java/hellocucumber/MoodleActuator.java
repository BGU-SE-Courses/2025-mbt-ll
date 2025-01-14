package hellocucumber;

import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class MoodleActuator {
    private static final WebDriver driver = new ChromeDriver();
    private static final WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

    public void initSession(String webDriver, String path) {
        System.setProperty(webDriver, path);
        driver.get("https://sandbox.moodledemo.net/");
    }

    public void loginAdmin() {
        driver.findElement(By.xpath("/html/body/div[2]/nav/div/div[2]/div[5]/div/span/a")).click();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"username\"]"))).sendKeys("admin");
        try {
            Thread.sleep(750);
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

    public void createCourse() {
        driver.findElement(By.xpath("/html/body/div[2]/nav/div/div[1]/nav/ul/li[3]/a")).click();
        driver.findElement(By.cssSelector("button.btn.btn-primary[type='submit']")).click();
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

    public void enrollUser() {
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("/html/body/div[2]/div[4]/div/div[2]/nav/ul/li[3]/a"))).click();
        driver.findElement(By.xpath("//input[@type='submit' and @class='btn btn-primary']")).click();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//input[@role='combobox' and @data-fieldtype='autocomplete']"))).sendKeys("Sam Student");
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        driver.findElement(By.xpath("//input[@role='combobox' and @data-fieldtype='autocomplete']")).sendKeys(Keys.ENTER);
        driver.findElement(By.xpath("//button[@type='button' and @class='btn btn-primary' and @data-action='save']")).click();
//        driver.findElement(By.xpath("//input[@type='submit' and @class='btn btn-primary']")).click();
//        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//input[@role='combobox' and @data-fieldtype='autocomplete']"))).sendKeys("Terri Teacher");
//        try {
//            Thread.sleep(500);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
//        driver.findElement(By.xpath("//input[@role='combobox' and @data-fieldtype='autocomplete']")).sendKeys(Keys.ENTER);
//        new Select(driver.findElement(By.xpath("//*[@id=\"id_roletoassign\"]"))).selectByValue("3");
//        driver.findElement(By.xpath("//button[@type='button' and @class='btn btn-primary' and @data-action='save']")).click();
        driver.findElement(By.xpath("//li[@data-key='coursehome']//a")).click();
    }

    public void createForum() {
        driver.findElement(By.xpath("//input[@type='checkbox' and @name='setmode']")).click();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("/html/body/div[4]/div[5]/div/div[3]/div/section/div/div/div/ul/li[1]/div[1]/div[2]/div[2]/div/button/div/span"))).click();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//a[@title='Add a new Forum']"))).click();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"id_name\"]"))).sendKeys("test");
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", driver.findElement(By.id("id_submitbutton")));
        wait.until(ExpectedConditions.elementToBeClickable(By.id("id_submitbutton"))).click();
    }

    public void createTopic() {
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("/html/body/div[5]/div[5]/div/div[3]/div/section/div[2]/div[1]/div/div[2]/a"))).click();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"id_subject\"]"))).sendKeys("test");
        driver.switchTo().frame(wait.until(ExpectedConditions.presenceOfElementLocated(By.id("id_message_ifr"))));
        driver.findElement(By.id("tinymce")).sendKeys("test");
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        driver.switchTo().defaultContent();
        driver.findElement(By.xpath("//*[@id=\"id_submitbutton\"]")).click();
        driver.findElement(By.xpath("/html/body/div[5]/div[5]/div/header/div/div[1]/div[1]/nav/ol/li[2]/a")).click();
    }

    public void logout() {
        driver.findElement(By.xpath("//*[@id=\"user-menu-toggle\"]")).click();
        //wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("/html/body/div[4]/nav/div/div[2]/div[5]/div/div/div/div/div/div[1]/a[10]"))).click();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"carousel-item-main\"]/a[10]"))).click();
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void loginStudent() {
        driver.findElement(By.xpath("/html/body/div[2]/nav/div/div[2]/div[5]/div/span/a")).click();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"username\"]"))).clear();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"username\"]"))).sendKeys("student");
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"password\"]"))).clear();
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
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("/html/body/div[3]/div[4]/div/div[2]/div/section/div[2]/div[2]/div[3]/div/table/tbody/tr/th/div/div[1]/a"))).click();
    }

    public void commentForum() {
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("/html/body/div[2]/div[4]/div/div[2]/div/section/div[2]/div/article/div[1]/div/div/div[2]/div[2]/div/a[2]"))).click();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("/html/body/div[2]/div[4]/div/div[2]/div/section/div[2]/div/article/div[1]/div/div[2]/div/form/div[1]/span/textarea"))).sendKeys("reply");
        driver.findElement(By.xpath("/html/body/div[2]/div[4]/div/div[2]/div/section/div[2]/div/article/div[1]/div/div[2]/div/form/div[2]/button[1]/span[1]")).click();
    }

    public void checkCommentExists() {
        boolean replyExists = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[contains(text(),'reply')]"))) != null;
        assertTrue(replyExists);
    }

    public void loginTeacher() {
        driver.findElement(By.xpath("/html/body/div[2]/nav/div/div[2]/div[5]/div/span/a")).click();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"username\"]"))).clear();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"username\"]"))).sendKeys("teacher");
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"password\"]"))).clear();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"password\"]"))).sendKeys("sandbox24");
        driver.findElement(By.xpath("//*[@id=\"loginbtn\"]")).click();
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void enrollTeacher() {
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("/html/body/div[2]/div[4]/div/div[2]/nav/ul/li[3]/a"))).click();
        driver.findElement(By.xpath("//input[@type='submit' and @class='btn btn-primary']")).click();
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//input[@role='combobox' and @data-fieldtype='autocomplete']"))).sendKeys("Terri Teacher");
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        driver.findElement(By.xpath("//input[@role='combobox' and @data-fieldtype='autocomplete']")).sendKeys(Keys.ENTER);
        new Select(driver.findElement(By.xpath("//*[@id=\"id_roletoassign\"]"))).selectByValue("3");
        driver.findElement(By.xpath("//button[@type='button' and @class='btn btn-primary' and @data-action='save']")).click();
        driver.findElement(By.xpath("//li[@data-key='coursehome']//a")).click();
    }

    public void hideForum(){
        driver.findElement(By.xpath("//li[@data-key='modedit']//a")).click();
        driver.findElement(By.xpath("//*[@id=\"collapseElement-8\"]")).click();
        driver.findElement(By.xpath("//*[@id=\"id_visible\"]")).click();
        WebElement roleDropdown = driver.findElement(By.id("id_visible"));
        Select selectRole = new Select(roleDropdown);
        selectRole.selectByVisibleText("Hide on course page");
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", driver.findElement(By.id("id_submitbutton")));
        driver.findElement(By.xpath("//*[@id=\"id_submitbutton\"]")).click();
    }

    public void checkForumHiding() {
        boolean hiding = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"section-0\"]"))) != null;
        assertTrue(hiding);
    }

}