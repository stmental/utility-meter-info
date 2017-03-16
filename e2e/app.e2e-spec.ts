import { UmiPage } from './app.po';

describe('umi App', () => {
  let page: UmiPage;

  beforeEach(() => {
    page = new UmiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
