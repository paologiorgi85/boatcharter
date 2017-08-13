import { BoatcharterPage } from './app.po';

describe('boatcharter App', () => {
  let page: BoatcharterPage;

  beforeEach(() => {
    page = new BoatcharterPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
