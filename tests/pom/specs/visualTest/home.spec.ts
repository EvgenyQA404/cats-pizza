import { guestTest as test } from '../../../fixtures/app.fixture';

test('Home page with items has correct view', async ({ homePage }) => {
  await homePage.setupApi();
  await homePage.open();
  await homePage.assertCorrectPageWithItems();
});
