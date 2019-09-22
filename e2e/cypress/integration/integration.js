let allCars;

// Verify if both SelectBox display the correct options comparing with cars payload
// Also verify every brand if it's displaying the correct models
// Check if cars endpoint is up/down before start the rest of the scenarios
describe('Validating both SelectBox options comparing with cars payload', function(){
  beforeEach(() => {
    cy.viewport(400, 300)
    cy.visit('/index.html')
    cy.request('/cars').then(cars => (allCars = cars.body))
  })
  

  it('Check if SelectBoxes are displaying correctly every brand and models', () => {
    allCars.map(item => {
      cy.get('#S1').contains(item.brand)
      cy.get('#S1').select(item.brand)
      item.models.map(model => cy.get('#S2').contains(model))
    })
  })

})