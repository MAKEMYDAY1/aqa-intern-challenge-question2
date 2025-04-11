import { test, expect } from '@playwright/test';
import {WidgetPage} from "./widget.page";

test.describe('Uchi.ru widget ', () => {
  test.beforeEach(async ({page}) => {
    // open uchi.ru main page
    await page.goto('/');

    // close cookies popup
    await page.click('._UCHI_COOKIE__button');
  });

  test('opens', async ({page}) => {
    const widgetPage = new WidgetPage(page);
    await widgetPage.openWidget();

    await expect(widgetPage.getWidgetBody()).toBeVisible()
  });

  test('has correct title', async ({ page }) => {
    const widgetPage = new WidgetPage(page);
    await widgetPage.openWidget();

    const articlesList = widgetPage.getPopularArticles();

    await articlesList.nth(0).click();
    await widgetPage.clickWriteToUs();

    await expect(widgetPage.getTitle()).resolves.toBe('Связь с поддержкой');
  });
});
