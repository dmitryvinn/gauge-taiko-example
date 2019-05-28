const { openBrowser,write, closeBrowser, goto, press, text} = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';
const BASE_URL = "http://todomvc.com/examples/vanillajs/";

beforeSuite(async () => {
    await openBrowser({ headless: headless });
    await goto(BASE_URL);
});

afterSuite(async () => {
    await closeBrowser();
});

step("Name new todo item <string>", async (todoName) => {
    await write(todoName);
});

step("Press <keys>", async (operation) => {
    await press(operation);
});

step("New todo item is created with the name <string>", async (expectedTodoName) => {
    assert.ok(await text(expectedTodoName).exists());
});
