import { AutomationTask } from "../AutomationTask_Locators";

const aAndT = new AutomationTask();
export class automationTask {
  givenINavidateToTheWebsite() {
    cy.visit(aAndT.websiteUrl);
  }

  whenIClickTheSignInButton() {
    cy.get(aAndT.signInButton).click();
  }

  thenICanCreateAnAccountByProvidingEmailAddress(
    email: string,
    customerFirstName: string,
    customerLastName: string,
    password: string,
    date: string,
    month: string,
    year: string,
    firstName: string,
    lastName: string,
    address: string,
    city: string,
    state: string,
    postCode: string,
    phone: string
  ) {
    cy.get(aAndT.emailAdressInPut).type(email);
    cy.get(aAndT.clickCreateAccountButton).click();

    cy.get(aAndT.clickTitle).click();
    cy.get(aAndT.customerFirstNameInput).type(customerFirstName);
    cy.get(aAndT.customerLastNameInput).type(customerLastName);
    cy.get(aAndT.passwordInput).type(password);
    cy.get(aAndT.dateInput).select(date);
    cy.get(aAndT.monthInput).select(month);
    cy.get(aAndT.yearInput).select(year);
    cy.get(aAndT.firstNameInput).type(firstName);
    cy.get(aAndT.lastNameInput).type(lastName);
    cy.get(aAndT.addressInput).type(address);
    cy.get(aAndT.cityInput).type(city);
    cy.get(aAndT.stateInput).select(state);
    cy.get(aAndT.postCodeInput).type(postCode);
    cy.get(aAndT.phoneInput).type(phone);
    cy.get(aAndT.registerButton).click();
  }

  andIClickOnContactUsButton() {
    cy.get(aAndT.contactUsButton).click();
  }

  andIGiveDetailsForMyIssue(
    heading: string,
    email: string,
    Reference: string,
    message: string
  ) {
    cy.get(aAndT.headingInput).select(heading);
    // cy.get(aAndT.emailInput).type(email);
    cy.get(aAndT.orderReferenceInput_LoggedIn).type(Reference);
    cy.get(aAndT.messageInput).type(message);
    cy.get(aAndT.sendButton).click();
    cy.get(aAndT.validateMessageSent)
      .contains(aAndT.validateMessageSent_contains)
      .should(aAndT.validateMessageSent_should);
  }

  andISearchForAShirt(shirt: string) {
    cy.get(aAndT.searchField).type(shirt).type("{enter}");
  }

  thenIAddItToTheCartAndCheckout() {
    cy.get(aAndT.addToCart).click()
    cy.get(aAndT.checkout).click()
  }
}
