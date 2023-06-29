/// <reference types="cypress" />

import { addToCart,proceedToCheckout, visitPage } from "../page functions/greenKartTestPageFunctions";

describe("green cart page test suite",()=>{
    it("Should be able to add items to cart and proceed to checkout",()=>{

        //Visiting the page using visitPage function
        visitPage({
            link:"https://rahulshettyacademy.com/seleniumPractise/#/",
        });

        //Assertions
        cy.get('.brand.greenLogo').should('have.text',"GREENKART");

        //Add items to cart
        addToCart({
           vegetable1:"Brocolli - 1 Kg",
           vegetable2:"Cucumber - 1 Kg",
           vegetable3:"Beans - 1 Kg"
        });

        //Assertions
        cy.get('td strong').eq(0).should('have.text','3');
        cy.get('td strong').eq(1).should('have.text','250');

        //Proceed to checkout
        proceedToCheckout();
    });

});