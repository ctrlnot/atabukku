import { recentBookmarks } from './utils/getters';

class Atabukku {
  constructor() {
    this.currentItems = [];
    this.breadCrumbs = ''; // later

    this.getBookmarks(recentBookmarks);
  }

  getBookmarks(bookmarks) {
    bookmarks
      .then((items) => {
        this.currentItems = items;

        this.render();
      })
      .then(() => {
        this.currentItems.forEach((item) => {
          if (item.children) {
            item.attachEventListener(this);
          }
        });
      })
      .catch((err) => {
        console.error('Oops.. Something went wrong :(');
        console.error(err);
      });
  }

  render() {
    this.currentItems.forEach((bookmark) => {
      bookmark.renderer();
    });
  }
}

export default Atabukku;
