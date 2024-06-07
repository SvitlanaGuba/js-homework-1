describe('Form filling', () => {

  const testCases = [
    {email: 'sd25@gmail.com', password: 'DHJkjj678&$#@!'},
    {email: 'sd25@gmail.com', password: '12345678vklk;lk+/*45$3!'},
    {email: 'sd25@gmail.com', password: '1321231(0%4343/*'},
    {email: 'sd25@gmail.com', password: 'j&*&*&($^'},
    {email: 'sd25@gmail.com', password: '12*(&^*&$%#$#$&^*&(*)(*_)(_)*)(&(*&*^'}
  ];

  testCases.forEach(({email, password}) => {
    it(`Enter email ${email} in the field and expect "${password}"`, () => {

      cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
      cy.get('[alt="Material Dark Theme"]').click();
      cy.get('[title="Forms"]').click();
      cy.get('[class="menu-title ng-tns-c141-11"]').click();


      cy.get('#inputEmail1', {timeout: 10000}).type(email);
      cy.get('#inputEmail1').should('have.value', email);

      cy.get('#inputPassword2', {timeout: 10000}).type(password);
      cy.get('#inputPassword2').should('have.value', password);

      cy.log('Verify placeholder');
      cy.get('#inputEmail1').type(email);
      cy.get('#inputEmail1').should('have.attr', 'placeholder', 'Email');

      cy.get('#inputPassword2').type(password);
      cy.get('#inputPassword2').should('have.attr', 'placeholder', 'Password');


    })

  })
})

describe('Check radio button', () => {
  it('Radio buttons', () => {

    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
    cy.get('[alt="Material Dark Theme"]').click();
    cy.get('[title="Forms"]').click();
    cy.get('[class="menu-title ng-tns-c141-11"]').click();

    cy.log('Verify radio buttons');
    cy.get('div').contains('span.text', 'Option 1');
    cy.get('div').contains('span.text', 'Option 2');
    cy.get('div').contains('span.text', 'Disabled Option');



    cy.get('nb-radio').eq(1).find('input[type="radio"]').check({ force: true });

    cy.get('nb-radio').eq(2).find('input[type="radio"]').should('be.disabled');

  })
})


