import {Page} from "@playwright/test";

const WidgetPageSelectors = {
    WRAPPER: '.sc-dino-typography-h > [class^=widget__]',
    WIDGET_BODY: '[class^=widgetWrapper] > [class^=widget__]',
    HEADER_TEXT: 'header h5',
    BUTTON_OPEN: '[data-test=openWidget]',
    BUTTON_WRITE_TO_US: '.btn__tjGhV:has-text("Написать нам")',
    ARTICLE_POPULAR_TITLE: '[class^=popularTitle__]',
    ARTICLE_POPULAR_LIST: '[class^=popularTitle__] + ul[class^=articles__]',
    ARTICLE_POPULAR_LIST_ITEM: '[class^=popularTitle__] + ul[class^=articles__] > li',
};

export class WidgetPage {
    private selectors = WidgetPageSelectors;

    constructor(protected page: Page) {}

    wrapper() {
        return this.page.locator(this.selectors.WRAPPER)
    }

    async openWidget() {
        await this.wrapper().locator(this.selectors.BUTTON_OPEN).click();
    }

    getPopularArticles() {
        return this.wrapper().locator(this.selectors.ARTICLE_POPULAR_LIST_ITEM);
    }

    async clickWriteToUs() {
        await this.wrapper().locator(this.selectors.BUTTON_WRITE_TO_US).click();
    }

    async getTitle() {
        return this.wrapper().locator(this.selectors.HEADER_TEXT).textContent();
    }

    getWidgetBody() {
        return this.page.locator(this.selectors.WIDGET_BODY);
    }
}

