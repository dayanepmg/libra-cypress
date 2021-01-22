/// <reference types="Cypress" />

import "../commands"
import LoginElements from "../elements/LoginElements"

const url = Cypress.config("baseUrl")
const usuario = Cypress.config("usuario")
const senha = Cypress.config("senha")
const loginElements= new LoginElements

class LoginPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url,{ timeout: 70000 })
    }

    // login do site
    fazerLogin() {
        cy.login(usuario,senha)  
        cy.wait(10000)
    }
     
}

export default LoginPage;