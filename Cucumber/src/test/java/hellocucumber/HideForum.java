//package hellocucumber;
//
//import org.openqa.selenium.By;
//import org.openqa.selenium.Point;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.support.ui.ExpectedConditions;
//import org.openqa.selenium.support.ui.Select;
//import org.openqa.selenium.support.ui.WebDriverWait;
//
//import java.time.Duration;
//
//public class HideForum {
//    private static WebDriver driver;
//    private static WebDriverWait wait;
//
//    public void initSessionAsUser(String webDriver, String path) {
//        System.setProperty(webDriver, path);
//        this.driver = new ChromeDriver();
//        this.wait = new WebDriverWait(driver, Duration.ofSeconds(10));
//        driver.get("https://sandbox.moodledemo.net/");
//        driver.manage().window().setPosition(new Point(700, 5));
//        System.out.println("Driver setup finished for - " + driver.getTitle());
//    }
//
//    public void loginAdmin() {
//        driver.findElement(By.xpath("/html/body/div[2]/nav/div/div[2]/div[5]/div/span/a")).click();
//        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"username\"]"))).sendKeys("admin");
//        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"password\"]"))).sendKeys("sandbox24");
//        driver.findElement(By.xpath("//*[@id=\"loginbtn\"]")).click();
//        try {
//            Thread.sleep(500);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
//    }
//
//    public void createCourse() {
//        driver.findElement(By.xpath("/html/body/div[2]/nav/div/div[1]/nav/ul/li[3]/a")).click();
//        driver.findElement(By.xpath("//*[@id=\"single_button678019218d9592\"]")).click();
//        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"id_fullname\"]"))).sendKeys("test_course");
//        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"id_shortname\"]"))).sendKeys("test");
//        driver.findElement(By.xpath("//*[@id=\"id_saveanddisplay\"]")).click();
//        try {
//            Thread.sleep(500);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
//    }
//
//    public void goToCourse() {
//        driver.findElement(By.xpath("/html/body/div[2]/div[3]/div/div[2]/div/section/div/div[2]/div/div[2]/div[1]/h3/a")).click();
//    }
//
//    public void enrollUser() {
//        driver.findElement(By.xpath("/html/body/div[2]/div[4]/div/div[2]/nav/ul/li[3]/a")).click();
//        driver.findElement(By.xpath("//*[@id=\"yui_3_18_1_1_1736448939619_31\"]")).click();
//        driver.findElement(By.xpath("//*[@id=\"form_autocomplete_input-1736448939818\"]")).click();
//        driver.findElement(By.xpath("/html/body/div[6]/div[2]/div/div/div[2]/form/fieldset/div[2]/div[1]/div[2]/ul/li[3]/span")).click();
//        driver.findElement(By.xpath("//*[@id=\"yui_3_18_1_1_1736448939619_665\"]")).click();
//        driver.findElement(By.xpath("//*[@id=\"id_startdate\"]")).click();
//        driver.findElement(By.xpath("//*[@id=\"yui_3_18_1_1_1736448939619_691\"]")).click();
//        driver.findElement(By.xpath("//*[@id=\"yui_3_18_1_1_1736448939619_877\"]")).click();
//        driver.findElement(By.xpath("//*[@id=\"yui_3_18_1_1_1736449386912_402\"]")).click();
//    }
//
//    public void enrollTeacher() {
//        driver.findElement(By.xpath("/html/body/div[2]/div[4]/div/div[2]/nav/ul/li[3]/a")).click();
//        driver.findElement(By.xpath("//*[@id=\"yui_3_18_1_1_1736448939619_31\"]")).click();
//        driver.findElement(By.xpath("//*[@id=\"form_autocomplete_input-1736448939818\"]")).click();
//        driver.findElement(By.xpath("/html/body/div[5]/div[2]/div/div/div[2]/form/fieldset/div[2]/div[1]/div[2]/ul/li[4]")).click();
//        WebElement roleDropdown = driver.findElement(By.id("id_roletoassign"));
//        Select selectRole = new Select(roleDropdown);
//        selectRole.selectByVisibleText("Teacher");
//        driver.findElement(By.xpath("//*[@id=\"yui_3_18_1_1_1736448939619_665\"]")).click();
//        driver.findElement(By.xpath("//*[@id=\"id_startdate\"]")).click();
//        driver.findElement(By.xpath("//*[@id=\"yui_3_18_1_1_1736448939619_691\"]")).click();
//        driver.findElement(By.xpath("//*[@id=\"yui_3_18_1_1_1736448939619_877\"]")).click();
//        driver.findElement(By.xpath("//*[@id=\"yui_3_18_1_1_1736449386912_402\"]")).click();
//    }
//
//    public void createForum() {
//        driver.findElement(By.xpath("//*[@id=\"67801dacecf3967801dacea8f76-editingswitch\"]")).click();
//        driver.findElement(By.xpath("/html/body/div[4]/div[5]/div/div[3]/div/section/div/div/div/ul/li[1]/div[1]/div[2]/div[2]/div/button/div/span")).click();
//        driver.findElement(By.xpath("/html/body/div[7]/div[2]/div/div/div[2]/div/div/div[1]/div/div[2]/div[2]/div[2]/div/div[8]/div/a")).click();
//        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"id_name\"]"))).sendKeys("test");
//        driver.findElement(By.xpath("//*[@id=\"id_submitbutton\"]")).click();
//    }
//
//    public void logout() {
//        driver.findElement(By.xpath("//*[@id=\"user-menu-toggle\"]")).click();
//        driver.findElement(By.xpath("/html/body/div[4]/nav/div/div[2]/div[5]/div/div/div/div/div/div[1]/a[10]")).click();
//        try {
//            Thread.sleep(500);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
//    }
//
//    public void loginTeacher() {
//        driver.findElement(By.xpath("/html/body/div[2]/nav/div/div[2]/div[5]/div/span/a")).click();
//        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"username\"]"))).sendKeys("teacher");
//        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"password\"]"))).sendKeys("sandbox24");
//        driver.findElement(By.xpath("//*[@id=\"loginbtn\"]")).click();
//        try {
//            Thread.sleep(500);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
//    }
//
//    public void hideForum(){
//        driver.findElement(By.xpath("/html/body/div[2]/div[4]/div/div[3]/div/section/div/div/div/ul/li[1]/div/div[2]/ul/li[2]/div/div[2]/div[2]/div/div/a\n" +
//                "                /html/body/div[3]/div[4]/div/div[2]/nav/ul/li[2]/a")).click();
//        driver.findElement(By.xpath("//*[@id=\"collapseElement-8\"]")).click();
//        driver.findElement(By.xpath("//*[@id=\"id_visible\"]")).click();
//        WebElement roleDropdown = driver.findElement(By.id("id_visible"));
//        Select selectRole = new Select(roleDropdown);
//        selectRole.selectByVisibleText("Hide on course page");
//        driver.findElement(By.xpath("//*[@id=\"id_submitbutton\"]")).click();
//    }
//
//    public void loginStudent() {
//        driver.findElement(By.xpath("/html/body/div[2]/nav/div/div[2]/div[5]/div/span/a")).click();
//        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"username\"]"))).sendKeys("student");
//        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"password\"]"))).sendKeys("sandbox24");
//        driver.findElement(By.xpath("//*[@id=\"loginbtn\"]")).click();
//        try {
//            Thread.sleep(500);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
//    }
//
//    //TODO implement the function
//    public void checkForumHiding() {
//        return;
//    }
//
//
//
//
//}
