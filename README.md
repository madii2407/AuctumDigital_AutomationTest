# AuctumDigital_AutomationTest

# I have used cucumber BDD for the approach so it will run the feature files be default. If you want to change, you can by oing in cypress.config.ts

To run the project. First do "npm i" in the folder to download all the dependencies, then do "npx cypress open" to follow the steps to run the files 

When running the "Create an Account" scenario for creating an account. Please use unique email address to make it work without any errors. Else, it will throw an error that email is already registered

if you are running the contact us form scenario without logging then user variable "orderReferenceInput_NotLoggedIn" and if logged in then use "orderReferenceInput_LoggedIn"

If you are running the contact us form scenario while being logged in then you have to comment out "emailInput" variable as it automatically gets the email from which you are logged in