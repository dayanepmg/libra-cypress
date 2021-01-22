class SessaoElements {
    //telas
    telaControleSessoes = '//ul[@class="itens2Grau"]//li//a[contains(text(),"Controle de Sessões")]' 
    telaCentralConsultas='//a[contains(text(),"Central de Consultas")]'


    //inputs
    //tela Central de Consultas
    inputPeriodoInicio='//*[@id="dtInicio"]'


    //Abas
    //tela Central de Consultas
    abaPorPeriodo='#pesquisaPorPeriodo > a'

    //Combos
    //tela Central de Consultas
    comboSituacao='//select[@id="cdSituacao"]'
    comboVara='//select[@id="idVara"]'
    
}

export default SessaoElements;