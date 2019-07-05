import { getGreeting } from '../support/app.po';

describe('e-appointment', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to e-appointment!');
  });
});
