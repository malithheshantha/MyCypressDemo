/// <reference types="cypress" />

describe("login using API",()=>{
    it("should be able to login",()=>{
        cy.logInUsingAPI().then(function(){
            cy.visit("https://www.rahulshettyacademy.com/client",{
                onBeforeLoad: function(window){
                    window.localStorage.setItem('token',Cypress.env('token'));
                }
            });
        });

    });
});
