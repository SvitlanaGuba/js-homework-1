describe('testing "Toastr" submenu', () => {
  beforeEach(() => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
    cy.get('[alt="Material Dark Theme"]', {timeout: 20000}).click();
    cy.get('[title="Modal & Overlays"]').click();
    cy.get('[title="Toastr"]').click();
  });

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
        position: 'static'
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
        position: 'static'
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
        position: 'static'
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
        position: 'static'
      }
    }
  ];


    testCases.forEach(({testData, expectedResultpassword}) => {
    it(`Testing cases from 1 to 4`, () => {

      cy.log('Enter fields');

        cy.get('[class="mat-ripple position-select appearance-outline size-medium status-basic shape-rectangle nb-transition"]').click();
        cy.get(`nb-option[ng-reflect-value="${testData.position}"]`).should("contain", testData.position);

        cy.get('input[name="title"]', {timeout: 2000}).clear({force: true}).type(testData.title, {force: true});
        cy.get('input[name="content"]', {timeout: 2000}).clear({force: true}).type(testData.content);
        cy.get('input[name="timeout"]', {timeout: 2000}).clear({force: true}).type(testData.time);

        cy.get('[class="mat-ripple appearance-outline size-medium status-basic shape-rectangle nb-transition"]').click();
        cy.get(`nb-option-list [ng-reflect-value="${testData.type}"]`).click();

        cy.get('button[class="mat-ripple appearance-filled size-medium shape-rectangle status-basic nb-transition"]').contains('Show toast').click();

        cy.log(`Should display a toast with correct content`);

        cy.get('nb-toast[ng-reflect-toast="[object Object]"]').should('be.visible');

        cy.get('nb-toastr-container nb-toast').then(element =>{
          expect(element).to.have.css('background-color', 'rgb(96, 175, 32)');
        });

      cy.get('nb-toastr-container nb-toast').should('have.css', 'background-color', expectedResult.color);
      cy.get('nb-toastr-container nb-toast div span').should('have.text', expectedResult.title);
      cy.get('nb-toastr-container nb-toast div [class="message"]').should('have.text', expectedResult.content);
      cy.get('nb-toast [ng-reflect-config="[object Object]"]').children().should('have.class','data-name')//icon
      cy.get('nb-toast[ng-reflect-toast="[object Object]"]').should('have.css', 'position', expectedResult.position);
      })

    })
})