const { Builde, Builder, By, Key, until } = require("selenium-webdriver");

async function loginTest() {
  //launch the browser
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    // Navigate to the website
    await driver.get("https://practice.expandtesting.com/login");

    // Select input elements and fill them out
    await driver.findElement(By.id("username")).sendKeys("practice");
    await driver
      .findElement(By.id("password"))
      .sendKeys("SuperSecretPassword!");

    // Select login button and click action
    await driver.findElement(By.css("button[type='submit']")).click();

    await driver.wait(until.elementLocated(By.css(".alert-success")), 10000);
    
    // make it delay for 5 seconds
    await driver.sleep(5000);
  
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    // Close the browser
    await driver.quit();
  }
}

loginTest();
