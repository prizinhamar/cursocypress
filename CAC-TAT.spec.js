/// <reference types="Cypress" />

const { should } = require("chai");

describe('Central de Atendimento ao Cliente TAT', function() {
    it('verifica o título da aplicação', function() {
        cy.visit(' ./src/index.html')
        cy.title.should('be.Equal', 'Central de Atendimento ao Cliente TAT')
  
    })
  })
  