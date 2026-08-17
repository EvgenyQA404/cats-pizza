import { test as base } from '@playwright/test';
import { HomePage } from '../pom/pages/HomePage';
import { AuthModal } from '../pom/pages/AuthModal';
import { CheckoutPage } from '../pom/pages/CheckOutPage';
import { OrdersPage } from '../pom/pages/OrdersPage';

// Declare the types of your fixtures.
type MyFixtures = {
  homePage: HomePage;
  authPage: AuthModal;
  checkoutPage: CheckoutPage;
  orderPage: OrdersPage;
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
  orderPage: async ({ page }, fixtureUse) => {
    const orderPage = new OrdersPage(page);
    await fixtureUse(orderPage);
  },
});
export { expect } from '@playwright/test';
