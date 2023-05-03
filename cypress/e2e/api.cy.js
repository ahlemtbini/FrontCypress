describe("api", () => {
    //   it("get All tasks", () => {
    //     cy.request("GET", "http://localhost:5000/api/v1/tasks").then((resp) => {
    //       expect(resp.status).to.eq(200);
    //       expect(resp.body.model).to.have.lengthOf(0);
    //     });
    //   });
    let savedTask;
  
    it("should add a task", () => {
      const data = {
        title: "Ahlem's Task",
        duration: 60,
      };
      cy.request("POST", "http://localhost:5000/api/v1/tasks", data).then(
        (resp) => {
          expect(resp.status).to.eq(200);
          expect(resp.body.model.title).to.eq(data.title);
          expect(resp.body.model.duration).to.eq(data.duration);
          expect(resp.body.model._id).to.exist;
          savedTask = resp.body.model;
        }
      );
    });
    it("get a task", () => {
      const data = {
        title: "Ahlem's Task",
        duration: 60,
      };
      cy.request(
        "GET",
        "http://localhost:5000/api/v1/tasks/" + savedTask._id
      ).then((resp) => {
        expect(resp.status).to.eq(200);
        expect(resp.body.model.title).to.eq(savedTask.title);
        expect(resp.body.model.duration).to.eq(savedTask.duration);
        expect(resp.body.model._id).to.eq(savedTask._id);
      });
    });
    it("PUT a task", () => {
      const data = {
        title: "Ahlem's Task v2",
        duration: 50,
      };
      cy.request(
        "PUT",
        "http://localhost:5000/api/v1/tasks/" + savedTask._id,
        data
      ).then((resp) => {
        expect(resp.status).to.eq(200);
        expect(resp.body.model.title).to.eq(data.title);
        expect(resp.body.model.duration).to.eq(data.duration);
        expect(resp.body.model._id).to.eq(savedTask._id);
      });
    });
    it("Delete a task", () => {
      const data = {
        title: "Ahlem's Task v2",
        duration: 50,
      };
      cy.request(
        "DELETE",
        "http://localhost:5000/api/v1/tasks/" + savedTask._id,
        data
      ).then((resp) => {
        expect(resp.status).to.eq(200);
        cy.request({
          method: "GET",
          url: "http://localhost:5000/api/v1/tasks/" + savedTask._id,
          failOnStatusCode: false,
        }).then((res) => {
          expect(res.status).to.eq(404);
        });
      });
    });
  });