describe('MVP', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/pizza')
  })

  const specialInput = () => cy.get('.special-instructions > input')
  const newCustomer = () => cy.get('input[name=customer]')
  const submitButton = () => cy.get('.submit')

  it('can type in special instructions', () => {
    specialInput()
      .should('have.value',"")
      .type("Garlic Dipping Sauce on the side!")
      .should('have.value',"Garlic Dipping Sauce on the side!")
  })

  it('can add multiple toppings', () => {
    cy.get('input[type="checkbox"]')
      .check()
      .should('be.checked')
  })

  it('select size', () => {
    cy.get('select')
      .select('Large')
      .should('have.value',"large")
  })

  it('can submit an order', () => {
    newCustomer()
      .type("Max"),
    cy.get('select')
      .select('Large')
      .should('have.value',"large")
    cy.get('[type="radio"],[value="radio1"]')
      .first()
      .check()
      .should('have.value','Original Marinara')
    cy.get('input[type="checkbox"]')
      .check()
      .should('be.checked')
    submitButton()
      .click()
    cy.url()
      .should('eq','http://localhost:3000/confirm')
    
  })

})