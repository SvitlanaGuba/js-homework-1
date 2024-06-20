
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
                 time: '1000',
                 type: 'success'
             },
             expectedResult: {
                 icon: 'email1',
                 title: 'some test1',
                 content: 'some content1',
                 color: 'rgb(40,167,69)',
                 position: 'static'
             }
         }
             ]


     // const testData1 = [
     //     {
     //         position: 'top-right',
     //         title: 'some test1',
     //         content: 'some content1',
     //         time: '1000',
     //         type: 'success'
     //     }
     // ];
     //
     // const expectedResults1 = [
     //     {
     //         icon: 'email1',
     //         title: 'some test1',
     //         content: 'some content1',
     //         color: 'rgb(40,167,69)',
     //         position: 'static'
     //     }
     // ];
     //
     // const testData2 = [
     //     {
     //         position: 'top-left',
     //         title: 'some test2',
     //         content: 'some content2',
     //         time: '2000',
     //         type: 'warning'
     //     }
     // ];
     //
     // const expectedResults2 = [
     //     {
     //         icon: 'email2',
     //         title: 'some test2',
     //         content: 'some content2',
     //         color: 'rgb(255,193,7)',
     //         position: 'static'
     //     }
     // ];
     //
     // const testData3 = [
     //     {
     //         position: 'bottom-right',
     //         title: 'some test3',
     //         content: 'some content3',
     //         time: '3000',
     //         type: 'info'
     //     }
     // ];
     //
     // const expectedResults3 = [
     //     {
     //         icon: 'email3',
     //         title: 'some test3',
     //         content: 'some content3',
     //         color: 'rgb(23,162,184)',
     //         position: 'static'
     //     }
     // ];
     //
     // const testData4 = [
     //     {
     //         position: 'bottom-left',
     //         title: 'some test4',
     //         content: 'some content4',
     //         time: '4000',
     //         type: 'danger'
     //     }
     // ];
     //
     // const expectedResults4 = [
     //     {
     //         icon: 'email4',
     //         title: 'some test4',
     //         content: 'some content4',
     //         color: 'rgb(220,53,69)',
     //         position: 'static'
     //     }
     // ];

     // const testCases = [
     //     {testData: testData1, expectedResults: expectedResults1},
     //     {testData: testData2, expectedResults: expectedResults2},
     //     {testData: testData3, expectedResults: expectedResults3},
     //     {testData: testData4, expectedResults: expectedResults4}
     // ];

     testCases.forEach(({testData, expectedResults}, index) => {
         it(`Verify testData${index + 1}`, () => {

             // const positionSelector = `[ng-reflect-selected="${testData[0].position}"]`;
             // const typeSelector = `[ng-reflect-selected="${testData[0].type}"]`;

             //cy.get(positionSelector, {timeout: 10000}).should('have.attr', 'ng-reflect-selected', testData[0].position);
             // cy.get(positionSelector).click({force: true})
             //cy.get('div.col-md-6.col-sm-12 button.select-button').eq(0).click();
             //cy.get(`nb-option[ng-reflect-value="${testData[0].position}"]`).click(); ??

             cy.get('[class="mat-ripple position-select appearance-outline size-medium status-basic shape-rectangle nb-transition"]').click();
             cy.get('[ng-reflect-selected="top-right"]').click();
             cy.get(`nb-option[ng-reflect-value="${testData.position}"]`).should("contain", testData.position);

             cy.get('input[name="title"]', {timeout: 2000}).clear({force: true}).type(testData.title, {force: true});
             cy.get('input[name="content"]', {timeout: 2000}).clear({force: true}).type(testData.content);
             cy.get('input[name="timeout"]', {timeout: 2000}).clear({force: true}).type(testData.time);


             cy.get(typeSelector, {timeout: 10000}).should('have.attr', 'ng-reflect-selected', testData[0].type);
             cy.get(typeSelector).click({force: true});
             //cy.get('div.col-md-6.col-sm-12 button.select-button').eq(0).click();

             cy.get('button[class="mat-ripple appearance-filled size-medium shape-rectangle status-basic nb-transition"]').contains('Show toast').click();

             cy.log(`Should display a toast with correct content`);

             cy.get('nb-toast[ng-reflect-toast="[object Object]"]').should('be.visible');
             cy.get('nb-toast[ng-reflect-toast="[object Object]"]').should('have.css', 'background-color', expectedResults[0].color);
             cy.get('nb-toast[ng-reflect-toast="[object Object]"]').should('have.css', 'position', expectedResults[0].position);
             cy.get('[class="title subtitle"]').should('contain.value', expectedResult[0].title);
             cy.get('[class="message"]').should('contain.value', expectedResult[0].content);


         })
     })
 })
 //Питання, не спрацьовує для testData.position та testDat.type, можливо треба розписувати для кожного варіанту у випадаючому списку, як прописано нижче? Чи помилка пов'язана з використанням змінних?
         //             cy.get('[ng-reflect-selected="top-right"]').click();
         //             cy.get('[ng-reflect-selected="top-right"]').should("contain", testData1[0].position);
         //             cy.get('[ng-reflect-selected="top-left"]').should("contain",testData2[0].position);
         //             cy.get('[ng-reflect-selected="bottom-right"]').should("contain",testData3[0].position);
         //             cy.get('[ng-reflect-selected="bottom-left"]').should("contain", testData4[0].position);

         //
         //             //cy.get('[ng-reflect-selected="success"]').click({ force: true });
         //             //cy.get('[ng-reflect-selected="success"]').should("contain", testData1[0].type);
         //             //cy.get('[ng-reflect-selected="warning"]', {timeout: 20000}).select(testData2.type);
         //             //cy.get('[ng-reflect-selected="info"]', {timeout: 20000}).select(testData3.type);
         //             //cy.get('[ng-reflect-selected="danger"]', {timeout: 20000}).select(testData4.type);
         //
         //
         //             Не спрацьовує для цього коду, хоча повинно працювати
         //            cy.get('nb-toast[ng-reflect-toast="[object Object]"]').should('have.css', 'background', expectedResults[0].color);
         //            cy.get('class="title subtitle"]"]').should('contain.value', expectedResult4.title);
         //            cy.get('[class="message"]"]').should('contain.value', expectedResult4.content);


