let allCars;
describe('Form Interactions', () => {
  beforeEach(() => {
    cy.viewport(400, 300)
    cy.request('/cars').its('status').should('be', 200)
    cy.visit('/index.html')
  })
  
  it('Check if brand list its enabled by default', () => {
    cy.get('#S1').should('be.enabled')
  })

  it('Check if model list its disabled by default', () => {
    cy.get('#S2').should('be.disabled')
  })

  it('Check if search button its disabled by default', () => {
    cy.get('#B').should('be.disabled')
  })

  it('Check if Keyword InputBox its enabled by default', () => {
    cy.get('#T').should('be.enabled')
  })

})