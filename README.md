# QWIC QA-Assignment Test

Bellow some automations using Cypress focusing into more coverage with less scenarios for qwicengineering/qa-assignment.

## Requirements:

 - NodeJS
   - https://nodejs.org/en/download/
 - NPM - Above 5.2.0
   - https://www.npmjs.com/get-npm
 - Cypress
   - https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements

## Preparing and running QA-Assignment Application

#### Download the project:

In order to run the application we'll need to clone the repository and install dependencies:

```
git clone https://github.com/murilopmachado/qa-assignment-test
```

Install dependencies:

```
npm install
```

Run application:

```
npm start
```

## Preparing and running QA-Assginment E2E Tests

With the application running we'll have to download the dependencies for tests, run and generate the report into HTML for further use. 

To start navigate to qa-assignment-test/e2e and install dependencies:

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


The report will be stored in mochawesome-report folder.
![Screenshot](https://github.com/murilopmachado/qa-assignment-test/blob/master/e2e/images/report.PNG)

It's possible to watch the videos from test runs inside cypress/videos folder aswell.
![Screenshot](https://github.com/murilopmachado/qa-assignment-test/blob/master/e2e/images/video_record.PNG)

