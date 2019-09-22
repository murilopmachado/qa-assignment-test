let brand = 'Audi';
let model = '100';
let keyword = 'Test';

// Verify if it's possible to submit the form with only the keyword
// Check if cars endpoint is up/down before start the rest of the scenarios
describe('Submit the form only inputing a keyword', () => {
  beforeEach(() => {
    cy.viewport(400, 300)
    cy.request('/cars').its('status').should('be', 200)
  })
  
// Visit index page
  it('Given Im at index page', () => {
    cy.visit('/index.html')
  })

// Input the text "Test" previously stated and assert if the component it's with the same text 
  it('And I input a random word ', () => {
    cy.get('#T').type(keyword)
    cy.get('#T').invoke('val').should('eq', keyword)
  })

// Click in Search button
  it('When I click in Search button', () => {
    cy.get('#B').click()
  })

// Assert if the browser alert contains the values previously inputed in form 
  it('Then an alert with previously brand model and keywork should be displayed', () => {
    let alerted = false;
    cy.on('window:alert', msg => alerted = msg);
    cy.get('#B').click().then( () => expect(alerted).to.contains(keyword))
  })

})

// Verify if it's possible to submit the form selecting brand and model
// Check if cars endpoint is up/down before start the rest of the scenarios
describe('Submit the form selecting only Brand and Model', () => {
  beforeEach(() => {
    cy.viewport(400, 300)
    cy.request('/cars').its('status').should('be', 200)
  })
  
  it('Given Im at index page', () => {
    cy.visit('/index.html')
  })

  // Select a valid brand previously stated and assert if the component it's with the correct option 
  it('And I select a valid brand', () => {
    cy.get('#S1').select(brand)
    cy.get('#S1').invoke('val').should('eq', brand)
  })

  // Select a valid model previously stated and assert if the component it's with the correct option 
  it('And I select a valid model', () => {
    cy.get('#S2').select(model)
    cy.get('#S2').invoke('val').should('eq', model)
  })

  it('When I click in Search button', () => {
    cy.get('#B').click()
  })

  it('Then an alert with previously brand model and keywork should be displayed', () => {
    let alerted = false;
    cy.on('window:alert', msg => alerted = msg);
    cy.get('#B').click().then( () => expect(alerted).to.contains(brand, model, keyword))
  })

})

// Verify if it's possible to submit the form with Brand and the keyword
// Check if cars endpoint is up/down before start the rest of the scenarios
describe('Submit the form selecting Brand and inputing some keyword', () => {
  beforeEach(() => {
    cy.viewport(400, 300)
    cy.request('/cars').its('status').should('be', 200)
  })

  it('Given Im at index page', () => {
    cy.visit('/index.html')
  })

  it('And I select a valid brand', () => {
    cy.get('#S1').select(brand)
    cy.get('#S1').invoke('val').should('eq', brand)
  })

  it('And I input a random word ', () => {
    cy.get('#T').type(keyword)
    cy.get('#T').invoke('val').should('eq', keyword)
  })

  it('When I click in Search button', () => {
    cy.get('#B').click()
  })

  it('Then an alert with previously brand model and keywork should be displayed', () => {
    var alerted = false;
    cy.on('window:alert', msg => alerted = msg);
    cy.get('#B').click().then( () => expect(alerted).to.contains(brand, model, keyword))
  })

})

// Verify if it's possible to submit the form with Brand Model and the keyword
// Check if cars endpoint is up/down before start the rest of the scenarios
describe('Submit the form selecting Brand Model and inputing some keyword', () => {
  beforeEach(() => {
    cy.viewport(400, 300)
    cy.request('/cars').its('status').should('be', 200)
  })

  it('Given Im at index page', () => {
    cy.visit('/index.html')
  })

  it('And I select a valid brand', () => {
    cy.get('#S1').select(brand)
    cy.get('#S1').invoke('val').should('eq', brand)
  })

  it('And I select a valid model', () => {
    cy.get('#S2').select(model)
    cy.get('#S2').invoke('val').should('eq', model)
  })

  it('And I input a random word ', () => {
    cy.get('#T').type(keyword)
    cy.get('#T').invoke('val').should('eq', keyword)
  })

  it('When I click in Search button', () => {
    cy.get('#B').click()
  })

  it('Then an alert with previously brand model and keywork should be displayed', () => {
    let alerted = false;
    cy.on('window:alert', msg => alerted = msg);
    cy.get('#B').click().then( () => expect(alerted).to.contains(brand, model, keyword))
  })
})