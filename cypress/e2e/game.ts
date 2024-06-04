/// <reference path="../support/index.d.ts" />

describe('Game Page', () => {
  before(() => {
    cy.visit('/game/baldurs-gate-iii')
  })
    it('should render game page sections', () => {
        cy.getByDataCy('game-info').within(() => {
          cy.findByRole('heading', { name: /baldur's gate 3/i }).should('exist')
          cy.findByText(/This game is currently in development/i).should('exist')
          cy.findByText('$199.99').should('exist')
          cy.findByRole('button', { name: /add to cart/i }).should('exist')
        });

        cy.findAllByRole('button', { name: /thumb \-/i }).should('have.length.gt', 1)

        cy.getByDataCy('content').within(() => {
          cy.findByRole('heading', { name: /description/i }).should('exist')
        });

        cy.getByDataCy('content').children().should('have.length.at.least', 2)

        cy.getByDataCy('game-details').within(() => {
          cy.findByRole('heading', { name: /game details/i }).should('exist')
          cy.findByRole('heading', { name: /developer/i }).should('exist')
          cy.findByRole('heading', { name: /release date/i }).should('exist')
          cy.findByRole('heading', { name: /platforms/i }).should('exist')
          cy.findByRole('heading', { name: /publisher/i }).should('exist')
          cy.findByRole('heading', { name: /rating/i }).should('exist')
          cy.findByRole('heading', { name: /genres/i }).should('exist')

          cy.findAllByText(/larian studios/i).should('exist')
          cy.findByText(/oct 4, 2020/i).should('exist')
          cy.findByRole('img', { name: /windows/i }).should('exist')
          cy.findByRole('img', { name: /mac/i }).should('exist')
          cy.findByText(/free/i).should('exist')
          cy.findByText('Fantasy / Turn-based / Role-playing').should('exist')
        });

        cy.shouldRenderShowcase({ name: 'Upcoming', highlight: true, games: false })
        cy.shouldRenderShowcase({ name: 'GOTY', highlight: false })
    });

    it('should add/remove game to cart', () => {
      cy.getByDataCy('game-info').within(() => {
        cy.findByRole('button', { name: /add to cart/i }).click()
        cy.findByRole('button', { name: /remove from cart/i }).should('exist')
      });

      cy.findAllByLabelText(/cart items/i).first().should('have.text', 1)

      cy.getByDataCy('cart-list').within(() => {
        cy.findByText(/baldur's gate 3/i).should('exist')
      });

      cy.getByDataCy('game-info').within(() => {
        cy.findByRole('button', { name: /remove from cart/i }).click()
        cy.findByRole('button', { name: /add to cart/i }).should('exist')
      });

      cy.findAllByLabelText(/cart items/i).should('not.exist')
    });
});
