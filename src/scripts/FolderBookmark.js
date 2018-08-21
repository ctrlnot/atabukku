import {
  D,
  $$,
  bookmarksContainer,
} from './utils/globals';
import Bookmark from './Bookmark';

class FolderBookmark extends Bookmark {
  constructor(bookmark) {
    super(bookmark);

    this.class = 'see-all';
    this.children = bookmark.children;
    this.dateGroupModified = bookmark.dateGroupModified;
  }

  /**
   *  TEMPORARY ONLY...
   *
   *  * Expected element of each item:
   *    <a href="bookmark link here">
   *      <div> Bookmark Title </div>
   *    </a>
   */
  renderer() {
    const item = D.createElement('a');
    const div = D.createElement('div');
    const text = D.createTextNode(this.title);

    item.classList.add(this.class);
    // item.href = this.url;

    item.appendChild(div);
    div.appendChild(text);

    bookmarksContainer.appendChild(item);
  }

  attachEventListener(bookmarksPage) {
    const parent = bookmarksPage;

    $$(`.${this.class}`).on('click', (e) => {
      e.preventDefault();

      // console.log(parent, this.children);
      parent.currentItems = this.children;
      parent.render();
    });
  }
}

export default FolderBookmark;
