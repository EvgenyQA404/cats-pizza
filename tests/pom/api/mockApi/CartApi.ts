import type { Page } from '@playwright/test';
import { cartWithOneItem, emptyCart } from '../../mockData/cart';

export class CartApi {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async setCartWithOneItem() {
    await this.page.route('*/**/api/cart', async (route) => {
      await route.fulfill({
        status: 200,
        body: JSON.stringify(cartWithOneItem),
      });
    });
  }
  async setEmptyCart() {
    await this.page.route('*/**/api/cart', async (route) => {
      await route.fulfill({
        status: 200,
        body: JSON.stringify(emptyCart),
      });
    });
  }
}
