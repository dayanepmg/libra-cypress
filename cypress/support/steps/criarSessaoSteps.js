/* global Given, Then, When, And */

import LoginPage from '../pageobjects/LoginPage'
import SessaoPage from '../pageobjects/SessaoPage'

const loginPage = new LoginPage
const sessaoPage = new SessaoPage

Given("acesse a página inicial do Libra", () => {
    loginPage.acessarSite();
    loginPage.fazerLogin();
})

And("acesso a página de controle de sessões", () => {
    sessaoPage.acessarPaginaControleSessoes();
    
})

And("verifico a Origem", () => {
    sessaoPage.verificarOrigem();
    
})

When("clico no botão NOVO", () => {
    sessaoPage.clicarBotao("novo");
    
})

And("checo o campo Sessão Virtual", () => {
    sessaoPage.checarCampoSessaoVirtual();
    
})

And("seleciono o Tipo {string}", (tipo) => {
    sessaoPage.selecionarTipo(tipo);
    
})

And("informo a data de início", () => {
    sessaoPage.informarDataInicio();    
})

And ("seleciono o Presidente {string}",(presidente) => {
    sessaoPage.selecionarPresidente(presidente);
})

And("checo o campo Liberar Voto Relator", () => {
    sessaoPage.checarCampoLiberarVotoRelator();
})

And("checo o campo Liberar Voto Vista", () => {
    sessaoPage.checarCampoLiberarVotoVista();
})

And("checo o campo Liberar Relatório", () => {
    sessaoPage.checarCampoLiberarRelatorio();
})

When("clico no botão SALVAR", () => {
    sessaoPage.clicarBotao("salvar");
    
})

Then("verifico que a sessão foi criada com sucesso", () => {
    sessaoPage.verificaSessaoSalva();
})

Given("acesse a página Central de Consultas", () => {
    sessaoPage.acessarPaginaConsultas();
})

And("informo o período", () => {
    sessaoPage.informarPeriodo();
})

When("clico no botão PESQUISAR", () => {
    sessaoPage.clicarBotao("pesquisar");
    
})

And("seleciono os seguintes campos:", (dataTable) => {
    const table = dataTable.hashes()  
    sessaoPage.selecionarCamposConsulta(table[0]['Situação'],table[0]['Vara/Câmara'])    
})

Then("gravo em um arquivo o número dos processos pesquisados", () =>{
    sessaoPage.gravarNumerosProcessos()
}) 