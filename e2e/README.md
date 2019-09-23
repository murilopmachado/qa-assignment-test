# QWIC QA-Assignment Test

Bellow some automations using Cypress focusing into more coverage with less scenarios for qwicengineering/qa-assignment.

 The tests are distributed into:

| Name        | Details      | Example |
| ------|-----|-----|
| UI  	| Tests to verify if the components are correctly rendered and with the correct properties.	| Verify if "Search Button" it rendered and enabled from default |
| Integration  	| Tests to verify the integration from Back to Front in the case. Could be used to verify integration between different suppliers and Thirdpart softwares.	| Verify if "Brand Select" brings the options usgin the response from /cars endpoint. |
| Functional	| Tests into a more human way. Using Gherkin in steps and applying BDD.	| Verify if it's possible to fill the form with valid data, click in Search and validate the alert. |
| API	| Tests to check the API. Validate the response schema asserting the property of every key:value. And a few others verifications.	| Verify if Audi brands brings only Audi models and if it's repeats in another brand. |

Every step it's commented becoming easy for someone understand the code.

## Requirements:

 - NodeJS
   - https://nodejs.org/en/download/
 - NPM - Above 5.2.0
   - https://www.npmjs.com/get-npm
 - Cypress
   - https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements

## Preparing and running QA-Assginment E2E Tests

With the application running we'll have to download the dependencies for tests, run and generate the report into HTML for further use. 

Navigate to qa-assignment-test/e2e and install dependencies:

```
npm install
```
Run tests:

```
npx cypress run
```

Generate reports:

```
npm run generate_reports
```
![Screenshot](https://github.com/murilopmachado/qa-assignment-test/blob/master/e2e/images/generate_report.PNG)


### The report will be stored in mochawesome-report folder.

![Screenshot](https://github.com/murilopmachado/qa-assignment-test/blob/master/e2e/images/report.PNG)


### It's possible to watch the videos from test runs inside cypress/videos folder aswell.

![Screenshot](https://github.com/murilopmachado/qa-assignment-test/blob/master/e2e/images/video_record.PNG)

