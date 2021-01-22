/// <reference types="Cypress" />

import "../commands"
import SessaoElements from "../elements/SessaoElements"

const sessaoElements = new SessaoElements

class SessaoPage {
    // Acessa o site que será testado

    verificarOrigem() {

        cy.xpath("//*[@id='ui-dialog-title-resultadoVerificacaoDoc']",{timeout:40000})
            .invoke('text')
            .then(
                text => {
                    if(text=='Atenção'){
                        cy.get('#btnVerificarDocLidos', { timeout: 40000 }).click()
                    }

                }
            )
        
         
        cy.xpath("//select[@id='idorigem']//option[@selected='selected']",{timeout:40000})
            .invoke('val')
            .then(
                val => {
                    const valorOrigem = '162514' //SECRETARIA ÚNICA DE DIREITO PÚBLICO E PRIVADO

                    if (val != valorOrigem) {//se a origem atual for diferente faz a troca
                        //console.log('VAL: ', val) 
                        //troca de origem
                        cy.xpath("//select[@id='idorigem']",{timeout:40000}).select(valorOrigem)
                        cy.xpath('//a[contains(text(),"Trocar")]').click({ force: true })
                        cy.wait(20000)
                        
                    }
                }
            )
    }

    //Acessa a pagina de controle de sessões
    acessarPaginaControleSessoes() {      
       // cy.xpath(sessaoElements.telaControleSessoes).click({ force: true })
       cy.contains('Controle de Sessões').click({ force: true })
         

    }

    clicarBotao(botao) {
        if(botao=="novo"){
            cy.get('#btnNovoSessao', { timeout: 40000 }).click()    
        }else if(botao=="salvar"){
            cy.xpath('//div[@class="botoes"]//input[@value="Salvar"]').click()
        }else if(botao=="pesquisar"){
            cy.get('#botaoPesquisaPorPeriodo').click()
       }
    }

    checarCampoSessaoVirtual() {
        cy.xpath('//input[@id="idsessaoVirtual"]',{timeout:40000}).check()
    }

    selecionarTipo(tipo) {
        cy.xpath('//select[@id="idSelectSituacaoNovo"]').select(tipo)
    }

    informarDataInicio(){
        const date = Cypress.moment().add(2,'days').format('DD/MM/YYYY')
        cy.get('#horaInicio').type(date)
        Cypress.env("periodoFinal",date)
    }

    selecionarPresidente(presidente){
        cy.xpath('//*[@id="comboPresidente"]').select(presidente)
    }

    checarCampoLiberarVotoRelator() {
        cy.xpath('//*[@id="idliberavoto"]').check()
    }

    checarCampoLiberarVotoVista() {
        cy.xpath('//*[@id="idliberavotovista"]').check()
    }

    checarCampoLiberarRelatorio() {
        cy.xpath('//*[@id="idliberarelatorio"]').check()
    }

    verificaSessaoSalva(){
        cy.get('.textoMsg > span').should("contain.text","Sessão Salva com Sucesso")
    }

    gravarNumerosProcessos(){
        const date = Cypress.moment().format('YYYYMMDD')
        let arquivo = 'processos_'+ date +'.txt'
        //cy.writeFile('cypress/fixtures/processos_'+ date +'.txt','teste')
        cy.writeFile('cypress/fixtures/test1.txt', 'Testersdock.com') 
        //cy.writeFile('cypress/fixtures/'+ arquivo,'{"teste":"teste"}')
       // cy.writeFile('fixtures/test1.txt', 'Testersdock.com\ntrstr')
       //cy.writeFile('cypress/fixtures/numeros-processos.json','teste')
        // cy.xpath('//*[@id="list2"]//tbody//tr').each(() => {
        //      cy.writeFile('cypress/fixtures/numeros-processos.json',cy.get('td').eq(3))
        //  })
        //cy.writeFile('C:/Users/Win7/Desktop/numeros-processos.txt',cy.xpath('//*[@id="list2"]//tbody//tr').eq(3))
         //cy.xpath('//table[@id="list2"]').parent('tr').within(() => {
        //     // all searches are automatically rooted to the found tr element
        //cy.writeFile('C:/Users/Win7/Desktop/numeros-processos.json',cy.get('td').eq(3))
        //     cy.get('td').eq(3).should('contain','Ativo')
        //     cy.get('td').eq(4).should('contain','Não')
      // })
    }

    acessarPaginaConsultas(){
        cy.contains('Central de Consultas').click({ force: true })         
    }

    informarPeriodo(){
        cy.get(sessaoElements.abaPorPeriodo).click()
        cy.xpath(sessaoElements.inputPeriodoInicio).type(Cypress.env("periodoInicial")).tab().type(Cypress.env("periodoFinal"))      
    }

    selecionarCamposConsulta(situacao,vara){
        cy.xpath(sessaoElements.comboSituacao).select(situacao)
        cy.xpath(sessaoElements.comboVara).select(vara)
    }
}

export default SessaoPage;