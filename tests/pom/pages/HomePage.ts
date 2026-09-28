import { expect, type Page } from '@playwright/test';
import { CartApi } from '../api/mockApi/cartApi';
import { CatsApi } from '../api/mockApi/catsApi';

export class HomePage {
  constructor(private page: Page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('/');
  }
  async setupApi() {
    const catsApi = new CatsApi(this.page);
    const cartApi = new CartApi(this.page);
    await cartApi.setCartWithOneItem();
    await catsApi.setCatsItems();
  }
  async addFirstCatToCart() {
    await this.page.getByTestId('catCard_0').getByTestId('addToCartButton').click();
    await this.page.getByTestId('catModalAddToCartButton').click();
  }
  async openCart() {
    await this.page.getByTestId('openCartButton').click();
  }
  async goToCartPage() {
    await this.page.getByTestId('goToCartPageButton').click();
  }
  async goToCheckoutFromCart() {
    await this.openCart();
    await this.goToCartPage();
    await this.page.getByTestId('makeOrderButton').click();
  }

  async assertLoaded() {
    await expect(this.page).toHaveURL('/');
    await expect(this.page.getByTestId('homePageHeader')).toBeVisible();
  }
  async assertCardsVisible() {
    const cards = this.page.getByTestId(/catCard_/);
    await expect(cards.first()).toBeVisible();
    await expect(cards).toHaveCount(9);
  }
  async assertCartBadgeCount(count: number) {
    await expect(this.page.getByTestId('openCartButton')).toContainText(`(${count})`);
  }
  async assertCartPageOpened() {
    await expect(this.page).toHaveURL(/\/cart$/);
    await expect(this.page.getByRole('heading', { name: 'Корзина' })).toBeVisible();
  }
  async assertCorrectPageWithItems() {
    await expect(this.page).toHaveScreenshot('homePageWithItems.png');
  }
}
