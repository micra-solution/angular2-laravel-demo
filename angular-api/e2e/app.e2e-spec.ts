import { AngularApiPage } from './app.po';

describe('angular-api App', () => {
  let page: AngularApiPage;

  beforeEach(() => {
    page = new AngularApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
