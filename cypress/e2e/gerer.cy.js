describe('gerer page', () => {
    // it('passes', () => {
       //cy.visit('http://localhost:3000/login')
    // })
 
 
     it("add task",()=>{
        cy.login()
         cy.visit("/tasks")
         cy.location("pathname").should("eq","/tasks")
         cy.getByData("title").type("ghgh")
         cy.getByData("duration").type(123)
         cy.getByData("enrg").click()
 
     })
    })