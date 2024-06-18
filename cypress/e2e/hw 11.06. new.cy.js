const testCases = [
  {
    testData: {
      position: 'top-right',
      title: 'some test1',
      content: 'some content1',
      time: '7000',
      type: 'success'
    },
    expectedResult: {
      icon: 'email',
      title: 'some test1',
      content: 'some content1',
      color: 'rgb(96, 175, 32)',
      position: {
        justifyContent: "flex-end",
        alignItems: "flex-start"
      }
    }
  },
  {
    testData: {
      position: 'top-left',
      title: 'some test2',
      content: 'some content2',
      time: '2000',
      type: 'warning'
    },
    expectedResult: {
      icon: 'email',
      title: 'some test2',
      content: 'some content2',
      color: 'rgb(255, 190, 67)',
      position: {
        justifyContent: "flex-start",
        alignItems: "flex-start"
      }
    }
  },
  {
    testData: {
      position: 'bottom-right',
      title: 'some test3',
      content: 'some content3',
      time: '3000',
      type: 'info'
    },
    expectedResult: {
      icon: 'email',
      title: 'some test3',
      content: 'some content3',
      color: 'rgb(64, 187, 244)',
      position: {
        justifyContent: "flex-end",
        alignItems: "flex-end"
      }
    }
  },
  {
    testData: {
      position: 'bottom-left',
      title: 'some test4',
      content: 'some content4',
      time: '4000',
      type: 'danger'
    },
    expectedResult: {
      icon: 'email',
      title: 'some test4',
      content: 'some content4',
      color: 'rgb(207, 51, 65)',
      position: {
        justifyContent: "flex-start",
        alignItems: "flex-end"
      }
    }
  }
];


  beforeEach('Open page', () => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
    cy.get('[alt="Material Dark Theme"]', {timeout: 20000}).click();
    cy.get('[title="Modal & Overlays"]').click();
    cy.get('[title="Toastr"]').click();
  })




    testCases.forEach(({testData, expectedResult}) => {
    it(`Testing cases from 1 to 4`, () => {

      cy.log('Enter fields');

        cy.get('ngx-toastr', {timeout: 15000}).should('be.visible');

        cy.get('div.col-md-6.col-sm-12  button.select-button').eq(0).click();
        cy.get(`nb-option[ng-reflect-value="${testData.position}"]`).should("contain", testData.position);

        cy.get('input[name="title"]', {timeout: 2000}).clear({force: true}).type(testData.title, {force: true});
        cy.get('input[name="content"]', {timeout: 2000}).clear({force: true}).type(testData.content);
        cy.get('input[name="timeout"]', {timeout: 2000}).clear({force: true}).type(testData.time);

        cy.get(`div.col-md-6.col-sm-12  button.select-button`).eq(1).click();
        cy.get(`nb-option-list [ng-reflect-value="${testData.type}"]`).click();

        cy.get('button[class="mat-ripple appearance-filled size-medium shape-rectangle status-basic nb-transition"]').contains('Show toast').click();

        cy.log(`Should display a toast with correct content`);

        cy.get('nb-toast[ng-reflect-toast="[object Object]"]').should('be.visible');



      cy.get(`g[data-name="${expectedResult.icon}"]`).should('exist');
      cy.get('nb-toastr-container nb-toast div span').should('contain', expectedResult.title);
      cy.get('nb-toastr-container nb-toast div [class="message"]').should('contain', expectedResult.content);

      cy.get('nb-toast[ng-reflect-toast]').then(toast => {
        cy.wrap(toast).should('have.css', 'background-color').and('eq', expectedResult.color);

        cy.wrap(toast).parents('.toastr-overlay-container').should('have.css', 'justify-content').and('eq', expectedResult.position.justifyContent);
        cy.wrap(toast).parents('.toastr-overlay-container').should('have.css', 'align-items').and('eq', expectedResult.position.alignItems);
      });

      })

    })
