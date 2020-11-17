/// <reference types="cypress" />

describe('Rota Clima Tempo', () => {
    
    // Esse cenário tem como pesquisar clima tempo por id da cidade
    it('Pesquisar clima por id da Cidade', () => {
        cy.get_clima_tempo("id", "524901")
    })

    // Esse cenário tem como pesquisar clima tempo por CEP
    it('Pesquisar clima por CEP da Cidade', () => {
       cy.get_clima_tempo("zip","94040")
    })

    // Esse cenário tem como pesquisar clima tempo por nome da Cidade
    it('Pesquisar clima por nome da Cidade', () => {
        cy.get_clima_tempo("q","London,uk")
     })


})