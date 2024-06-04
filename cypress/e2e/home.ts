/// <reference path="../support/index.d.ts" />

describe('Home Page', () => {
    it('should render home sections', () => {
      cy.visit('/')
      cy.shouldRenderBanner()
      cy.shouldRenderShowcase({ name: 'New games', highlight: false })
      cy.shouldRenderShowcase({ name: 'Popular now', highlight: true })
      cy.shouldRenderShowcase({ name: 'Upcoming', highlight: true, games: false })
      cy.shouldRenderShowcase({ name: 'Free!', highlight: true, games: false })
    });
  });
