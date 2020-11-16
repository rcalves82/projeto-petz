/// <reference types="cypress" />

describe('Acesso Blog Petz', () => {
    beforeEach(() => {
        cy.acesso_blog_petz()
    })
    
    // Esse cenário tem como objetvo acessar a tela Adoção
    it('Acessando a tela Adoção', () => {
        cy.acessando_tela_adocao()
    })

    // Esse cenário tem como objetvo através do blog acessar a pagina Nossas Lojas
    it('Acessando a pagina Nossas Lojas', () => {
        cy.acessando_nossas_lojas('04515000', 'Petz Itaim')
    })

    // Esse cenário tem como objetvo através do blog acessar a pagina Atendimento
    it.only('Acessando a pagina de Atendimento', () => {
        cy.acessando_pagina_atendimento()
    })


})