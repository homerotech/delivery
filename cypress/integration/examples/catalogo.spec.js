<reference types="cypress"/>

describe('The Home Page', () => {
    it('successfully loads', () => {
      cy.visit('http://localhost:3000/t/querodelicias') // change URL to match your dev URL
    })
  })