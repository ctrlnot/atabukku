import {
  D,
  bookmarksContainer,
} from './utils/globals';

class Bookmark {
  constructor(bookmark) {
    this.dateAdded = bookmark.dateAdded;
    this.id = bookmark.id;
    this.index = bookmark.index;
    this.parentId = bookmark.parentId;
    this.title = bookmark.title;
    this.url = bookmark.url;
  }

  /**
   *  * Expected element of each item:
   *    <a href="bookmark link here">
   *      <div> Bookmark Title </div>
   *    </a>
   */
  renderer() {
    const item = D.createElement('a');
    const div = D.createElement('div');
    const text = D.createTextNode(this.title);

    item.href = this.url;

    item.appendChild(div);
    div.appendChild(text);

    bookmarksContainer.appendChild(item);
  }
}

export default Bookmark;
