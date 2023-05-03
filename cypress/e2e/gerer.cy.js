describe('gerer page', () => {
    // it('passes', () => {
       //cy.visit('http://localhost:3000/login')
    // })
 
 
    it("add task", () => {
      cy.login();
      cy.visit("/teachers/tasks");
      cy.location("pathname").should("eq", "/teachers/tasks");
      cy.getByData("title").type("Test123654");
      cy.getByData("duration").type(123);
      cy.getByData("enrg").click();
      //cy.wait("@addTask").its("response.statusCode").should("eq", 200);
      cy.wrap(cy.getByData("task")).should("title", "Test123654");
    });
    
    })