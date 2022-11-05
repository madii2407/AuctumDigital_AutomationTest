import { automationTask } from "./pages/AuctumDigital";
import {
  When,
  Then,
  Given,
  And,
} from "@badeball/cypress-cucumber-preprocessor";
const aAndT = new automationTask();

Given("I navigate to the website", () => {
  aAndT.givenINavidateToTheWebsite();
});

When("I click the sign in' button", () => {
  aAndT.whenIClickTheSignInButton();
});

Then("I can 'Create an Account' by providing email address", () => {
  aAndT.thenICanCreateAnAccountByProvidingEmailAddress(
    "test4940@gmail.com",
    "test",
    "automation",
    "test@123456",
    "1",
    "January",
    "2000",
    "test",
    "automation",
    "01 test street",
    "Atlanta",
    "Georgia",
    "12312",
    "123456789"
  );
});

And("I click on 'Contact Us' button", () => {
  aAndT.andIClickOnContactUsButton();
});

And("I give details for my issue", () => {
  aAndT.andIGiveDetailsForMyIssue(
    "Customer service",
    "test756@gmail.com",
    "123456",
    "this is the test message sent by a tester"
  );
});

And("I 'search' for a shirt", () => {
  aAndT.andISearchForAShirt('shirt')
})

Then("I can add it to the 'cart' and checkout", () => {
  aAndT.thenIAddItToTheCartAndCheckout()
})
