import { guestTest as test } from '../../fixtures/app.fixture';

test('Shows empty card state', async ({ cartPage }) => {
  await cartPage.open();
  await cartPage.assertEmpty();
});
test('Removing last item makes card empty', async ({ cartPage, homePage }) => {
  await homePage.open();
  await homePage.addFirstCatToCart();
  await cartPage.open();
  await cartPage.removeFirstItem();
  await cartPage.assertEmpty();
});
test('Clear cart removes all items', async ({ cartPage, homePage }) => {
  await homePage.open();
  await homePage.addFirstCatToCart();
  await cartPage.open();
  await cartPage.clear();
  await cartPage.assertEmpty();
});
test('Changing quantity updates cart badge and input value', async ({ cartPage, homePage }) => {
  await homePage.open();
  await homePage.addFirstCatToCart();
  await cartPage.open();
  await cartPage.addOneMoreSameCat();
  await cartPage.assertCatCounter('2');
  await homePage.assertCartBadgeCount(2);
});
