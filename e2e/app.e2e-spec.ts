import { PelisappPage } from './app.po';

describe('pelisapp App', () => {
  let page: PelisappPage;

  beforeEach(() => {
    page = new PelisappPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
