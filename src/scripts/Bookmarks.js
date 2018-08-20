class Bookmarks {
  constructor() {
    this.currentItems = [];
    this.bookmarksGetter = null;
  }

  getBookmarks() {
    this.bookmarksGetter
      .then((bookmarks) => {
        this.currentItems = bookmarks;

        this.render();
      })
      .then(() => this.attachEventListeners())
      .catch((err) => {
        console.error('Oops.. Something went wrong :(');
        console.error(err);
      });
  }

  render() {
    this.currentItems.forEach((bookmark) => {
      this.renderer(bookmark);
    });
  }
}

export default Bookmarks;
