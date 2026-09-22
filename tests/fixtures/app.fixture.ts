import { test as base } from '@playwright/test';
import { HomePage } from '../pom/pages/HomePage';
import { AuthModal } from '../pom/pages/AuthModal';
import { CheckoutPage } from '../pom/pages/CheckoutPage';
import { OrdersPage } from '../pom/pages/OrdersPage';
import { CartPage } from '../pom/pages/CartPage';
import path from 'node:path';
import process from 'node:process';

export const authFile = path.join(process.cwd(), 'playwright/.auth/existing-user.json');

// Declare the types of your fixtures.
type MyFixtures = {
  homePage: HomePage;
  authPage: AuthModal;
  checkoutPage: CheckoutPage;
  ordersPage: OrdersPage;
  cartPage: CartPage;
};

type AppOptions = {
  storageState: string | undefined;
};

// Extend base test by providing "todoPage" and "settingsPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
const appTest = base.extend<MyFixtures>({
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
  cartPage: async ({ page }, fixtureUse) => {
    const cartPage = new CartPage(page);
    await fixtureUse(cartPage);
  },
});

export const guestTest = appTest;
export const autorizedTest = appTest.extend<AppOptions>({
  storageState: authFile,
});
export { expect } from '@playwright/test';
