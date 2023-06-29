

export function visitPage(visitDetails){
    cy.visit(visitDetails.link);
    cy.wait(2000);
}


export function addToCart(Details){
    cy.get('h4').each(($el,index,$list)=>{
        const vegeName = $el.text();
        if(vegeName=== (Details.vegetable1)||vegeName=== (Details.vegetable2)||vegeName=== (Details.vegetable3)){
            cy.get('.product-action button').eq(index).click();
        }
    });       
}

export function proceedToCheckout(){
    cy.get('.cart-icon').click();
    cy.contains('PROCEED TO CHECKOUT').click();
}