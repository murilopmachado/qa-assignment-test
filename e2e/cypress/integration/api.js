const Ajv = require('ajv');
const ajv = new Ajv({ logger: console });
const carSchema = require('../schemas/carSchema')


// Verify if both SelectBox display the correct options comparing with cars payload
// Also verify every brand if it's displaying the correct models
// Check if cars endpoint is up/down before start the rest of the scenarios
describe('Car Api Validations', () => {
  it('Car schema validations', () => {
    cy.request('/cars').as('cars')

// Verify car response with schema
    cy.get('@cars').should(response => {
      const test = ajv.compile(carSchema);
      const isValid = test(response.body);
      if (!isValid)
          throw Error(JSON.stringify(test.errors))
    })
  })

// Check the status code from cars endpoint
  it('Should return a success code', () => {
    cy.request('/cars').as('cars')
    cy.get('@cars').should(response => expect(response.status).to.eq(200))
  })

// Verify if every brand contains atleast 1 model
  it('All models and brands should not be empty', () => {
    cy.request('/cars').as('cars')

    cy.get('@cars').should(response => {
      expect(response.status).to.eq(200)
      response.body.map(item => {
        expect(item.models.length).to.be.above(0)
        expect(item.brand.length).to.be.above(0)
      })
    })
  })

// Check if every brand has his respectives models
  it('Cars models should be exclusive from each brand', () => {
    cy.request('/cars').as('cars')

    cy.get('@cars').should(response => {
      response.body.map(cars => {
        let filteredList = response.body.filter(item => item.brand != cars.brand)
        filteredList.map(chosenCar => expect(cars.models.sort()).not.to.be.eql(chosenCar.models.sort()))
      });
    })
  })
})
