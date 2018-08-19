class Bookmarks {
  constructor() {
    this.currentItems = [];

    this.container = null;
    this.bookmarksGetter = null;
  }

  getBookmarks() {
    this.bookmarksGetter
      .then((bookmarks) => {
        this.currentItems = bookmarks;

        this.render();
      })
      .catch(() => {
        console.error('Oops.. Something went wrong :(');
      });
  }

  render() {
    this.currentItems.forEach((bookmark) => {
      this.renderer(bookmark);
    });
  }
}

export default Bookmarks;
