/// <reference types="cypress" />

Cypress.Commands.add('acesso_blog_petz', () => {
    cy.visit(Cypress.env('baseUrl'));
})

Cypress.Commands.add('acessando_tela_adocao', () => {
    cy.get('#menu-item-2390754 > :nth-child(1)').click()
    cy.get('.box-header > .title').should('contain', 'Adoção')
})

Cypress.Commands.add('acessando_tela_eventos', () => {
    cy.get('#menu-item-2436807 > a').click()
    cy.get(':nth-child(2) > [itemprop="item"] > span').should('contain', 'Eventos - Calendário de eventos pet')
})

Cypress.Commands.add('acessando_nossas_lojas', (cep, loja) => {
    cy.get('#menu-item-2436712 > a')
        .should('have.attr', 'href')
        .then((href) => {
            cy.visit(href)
        })
    cy.server({         
        whiteList: () => false, 
    });      
    cy.route('POST', '**/v1/**').then((xhr) => 
    {expect(xhr.status).be.eq(200)})     
    cy.server({enable:false});
    cy.get('#filterType').select('cep', {force: true})
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

Cypress.Commands.add('get_clima_tempo', (valo1, valor2) => {
    cy.request({
        method: 'GET',
        url: `${Cypress.env('baseUrlAPI')}${valo1}=${valor2}&appid=b6907d289e10d714a6e88b30761fae22`
    }).then(response => {
        expect(response.body.cod).to.eq('200')
    })
    
})

