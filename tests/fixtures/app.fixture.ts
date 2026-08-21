import { test as base } from '@playwright/test';
import { HomePage } from '../pom/pages/HomePage';
import { AuthModal } from '../pom/pages/AuthModal';
import { CheckoutPage } from '../pom/pages/CheckoutPage';
import { OrdersPage } from '../pom/pages/OrdersPage';

// Declare the types of your fixtures.
type MyFixtures = {
  homePage: HomePage;
  authPage: AuthModal;
  checkoutPage: CheckoutPage;
  ordersPage: OrdersPage;
};

// Extend base test by providing "todoPage" and "settingsPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, fixtureUse) => {
    const homePage = new HomePage(page);
    await fixtureUse(homePage);
  },
  authPage: async ({ page }, fixtureUse) => {
    const authmodal = new AuthModal(page);
    await fixtureUse(authmodal);
  },
  checkoutPage: async ({ page }, fixtureUse) => {
    const checkoutPage = new CheckoutPage(page);
    await fixtureUse(checkoutPage);
  },
  ordersPage: async ({ page }, fixtureUse) => {
    const ordersPage = new OrdersPage(page);
    await fixtureUse(ordersPage);
  },
});
export { expect } from '@playwright/test';
