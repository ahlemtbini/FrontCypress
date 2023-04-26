describe('login page', () => {
   // it('passes', () => {
      //cy.visit('http://localhost:3000/login')
   // })


    it("sigin in successfully as admin",()=>{
        window.localStorage.removeItem("token")

        cy.visit("/")
        cy.location("pathname").should("eq","/login")
        cy.getByData("email").type("yosrisamm1@gmail.com")
        cy.getByData("password").type("123456")
        cy.getByData("connect").click()
        cy.location("pathname").should("eq","/teachers/tasks")
        cy.visit("/hello")
        cy.get(".app").should("be.empty")

    })
    
    it("sigin in successfully as user",()=>{
        window.localStorage.removeItem("token")
        cy.visit("/")
        cy.location("pathname").should("eq","/login")
        cy.getByData("email").type("user@gmail.com")
        cy.getByData("password").type("123456")
        cy.getByData("connect").click()
        cy.location("pathname").should("eq","/hello")
        cy.visit("/teachers/tasks")
        cy.get(".app").should("be.empty")


    })
  })
  it("sigin in with token",()=>{
    cy.login()
    cy.visit("/")
    cy.location("pathname").should("eq","/teachers/tasks")



  })