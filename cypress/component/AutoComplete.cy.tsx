// import {Autocomplete} from '../../src/component/AutoComplete'
import Login from '../../src/component/Login'

describe('AutoComplete.cy.tsx', () => {
  beforeEach(() => {
    cy.mount(<Login />)
  })

  it('Verify user able to navigate to the Login Form', () => {        // Passed Test Case 
    cy.get('.login-form').should('be.visible');            // (.) eka dannne class walata 
    cy.get('input[id="username"]').should('exist');     // first check what have in the inspect name or id 
    cy.get('input[id="password"]').should('exist');
    cy.get('button[type="submit"]').should('exist');
  });

  it('Allows the user to type in the username and password fields', () => {   // Passed Test Case
    // Simulate typing in the username field and verify the value
    cy.get('input[id="username"]').type('XYZ').should('have.value', 'XYZ');
    // Simulate typing in the password field and verify the value
    cy.get('input[id="password"]').type('password123').should('have.value', 'password123');
  });

  it('Should display an error message when the form is submitted with empty fields', () => {        // Failed Test Case
    cy.get('button[type="submit"]').click();
    cy.get('.error-message').should('contain', 'Username and Password are required');
  });

  it('Verify the login with valid username and password', () => {     // Passed Test Case
    //  cy.xpath(//input[@id='username']").type('Admin');
    cy.get('input[id="username"]').type('Admin');        // in here username is id . check it using the inspect 
    //    cy.xpath("//input[@id='password']").type('admin123');
    cy.get('input[id="password"]').type('admin123');
    //   cy.xpath("//button[normalize-space()='Login']").click();
    cy.get('button[type="submit"]').click();  // in here check the login . hariytama log wenawada // click on the login button
  });

  it('Verify the login with invalid username and valid password', () => {   // Failed Test Case 
    //cy.xpath("//input[@id='username']").type('Kasun');
    cy.get('input[id="username"]').type('Kasun');
    cy.get('input[id="password"]').type('admin123');
    cy.get('button[type="submit"]').click();   // in here check the login . hariytama log wenawada    // click on the login button
    cy.get('.error-message').should('be.visible').and('contain.text', 'Invalid credentials');
    // .oxd-text.oxd-text--p.oxd-alert-content-text => for a class we used (.) cy.get('.class-name')  // Class selector
    // cy.get('#id-name')  // ID selector
  });

  it('Verify the login with invalid password and valid username', () => {      // Failed Test Case 
    //cy.xpath("//input[@id='username']").type('Admin');
    cy.get('input[id="username"]').type('Admin');
    cy.get('input[id="password"]').type('kasun123');
    cy.get('button[type="submit"]').click();    // in here check the login . hariytama log wenawada    // click on the login button
    cy.get('.error-message').should('be.visible').and('contain.text', 'Invalid credentials');
  });

  it('Verify the login with invalid username and password', () => {       // Failed Test Case 
    //cy.xpath("//input[@id='username']").type('Kasun');
    cy.get('input[id="username"]').type('Kasun');
    cy.get('input[id="password"]').type('kasun123');
    cy.get('button[type="submit"]').click();    // in here check the login . hariytama log wenawada    // click on the login button
    cy.get('.error-message').should('be.visible').and('contain.text', 'Invalid credentials');
  });

  it('Verify the login with empty username and valid password', () => {    // Failed Test Case 
    //cy.xpath("//input[@id='username']").type(' ');
    cy.get('input[id="password"]').type('admin123');
    cy.get('button[type="submit"]').click();  // in here check the login . hariytama log wenawada    // click on the login button
    //cy.get('.oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message').should('be.visible').and('contain.text', 'Required');
    //above cy.get command is an error -> cause in the class path there's no defined the dots (.) infront of the oxd  
    cy.get('.error-message').should('be.visible').and('contain.text', 'Required');
    //using dots (.) -> This selector targets elements that have all the specified classes. Each class name is a separate segment, 
    //joined by dots with no spaces. 
  });

  it('Verify the login with empty password and valid username', () => {      // Failed Test Case 
    //cy.xpath("//input[@id='username']").type('yourUsername');
    cy.get('input[id="username"]').type('Admin');
    cy.get('button[type="submit"]').click();  // in here check the login . hariytama log wenawada    // click on the login button
    cy.get('.error-message').should('be.visible').and('contain.text', 'Required');
  });

  it('Verify the login with empty username and valid password', () => {  // Failed Test Case
    //cy.xpath("//input[@id='username']").type('yourUsername');
    cy.get('button[type="submit"]').click();    // in here check the login . hariytama log wenawada    // click on the login button
    cy.get('.error-message').should('be.visible').and('contain.text', 'Required');
  });

  it('Verify the login with case sensitive with username and password', () => {    //Failed Test Case
    //cy.xpath("//input[@id='username']").type('yourUsername');   
    cy.get('input[name="username"]').type('KAsunN');
    cy.get('input[name="password"]').type('KaSuN123');
    cy.get('button[type="submit"]').click();    // in here check the login . hariytama log wenawada    // click on the login button
    cy.get('.error-message').should('be.visible').and('contain.text', 'Invalid credentials');
  });
});








