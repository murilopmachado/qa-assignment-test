# QWIC QA-Assignment Test

Bellow some automations using Cypress focusing into more coverage with less scenarios for qwicengineering/qa-assignment.

###### Requirements:

 - NodeJS
   - https://nodejs.org/en/download/
 - NPM - Above 5.2.0
   - https://www.npmjs.com/get-npm
 - Cypress
   - https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements

##### Preparing and running QA-Assignment Application

Download the project:
```
git clone https://github.com/murilopmachado/qa-assignment-test
```
Install Dependencies:
```
npm install
```
Run application:
```
npm start
```

##### Preparing and running QA-Assginment E2E Tests

Install Dependencies for tests

Enter in e2e folder and run:
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
##### The report will be stored in mochawesome-report folder.
![Screenshot](https://github.com/murilopmachado/qa-assignment-test/blob/master/e2e/images/report.PNG)
##### It's possible to watch the videos from test runs inside cypress/videos folder aswell.
![Screenshot](https://github.com/murilopmachado/qa-assignment-test/blob/master/e2e/images/video_record.PNG)

