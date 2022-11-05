export class AutomationTask {
  websiteUrl = "http://automationpractice.com/index.php";

  // conversion of sign in button locator into variables

  signInButton = ".login";

  // conversion of creation of account locators into variables

  emailAdressInPut = "#email_create";
  clickCreateAccountButton = "#SubmitCreate > span";

  clickTitle = "#id_gender1";
  customerFirstNameInput = "#customer_firstname";
  customerLastNameInput = "#customer_lastname";
  passwordInput = "#passwd";
  dateInput = "#days";
  monthInput = "#months";
  yearInput = "#years";
  firstNameInput = "#firstname";
  lastNameInput = "#lastname";
  addressInput = "#address1";
  cityInput = "#city";
  stateInput = "#id_state";
  postCodeInput = "#postcode";
  phoneInput = "#phone_mobile";
  registerButton = "#submitAccount > span";

  // conversion of contact us button locator into variables

  contactUsButton = "#contact-link > a";

  // conversion of details locators into variables

  headingInput = "#id_contact";
  emailInput = "#email";
//   orderReferenceInput_notLoggedIn = "#id_order";
  orderReferenceInput_LoggedIn = ":nth-child(6) > .selector > .form-control"
  messageInput = "#message";
  sendButton = "#submitMessage > span";
  validateMessageSent = "p";
  validateMessageSent_contains =
    "Your message has been successfully sent to our team.";
  validateMessageSent_should = "be.visible";

  // conversion of search field locator into variables

  searchField = "#search_query_top";

  // conversion of Add to Cart and checkout locator into variables

  addToCart = ".ajax_add_to_cart_button > span"
  checkout = ".button-container > .button-medium > span"
}
