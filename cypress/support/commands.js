/// <reference types="cypress" />

Cypress.Commands.add('acesso_blog_petz', () => {
    cy.visit("/")
})

Cypress.Commands.add('acessando_tela_adocao', () => {
    cy.get('#menu-item-2390754 > :nth-child(1)').click()
    cy.get('.box-header > .title').should('contain', 'Adoção')
})

Cypress.Commands.add('acessando_nossas_lojas', (cep, loja) => {
    cy.get('#menu-item-2436712 > a')
        .should('have.attr', 'href')
        .then((href) => {
            cy.visit(href)
        })
    cy.get('#filterType').select('cep')
    cy.wait(2000)
    cy.get('#cep').then($el => {
        $el.val(cep)
    })
    cy.get('#bntSearch').click({force: true})
    cy.get(':nth-child(1) > .store-content > a > .title').should('contain', loja)
})

Cypress.Commands.add('acessando_pagina_atendimento', () => {
    cy.get('#menu-item-2436713 > a')
        .should('have.attr', 'href')
        .then((href) => {
            cy.visit(href)
        })
    cy.get('.title').should('contain', 'Cadastre-se para receber nossas novidades e ofertas por e-mail')
})
