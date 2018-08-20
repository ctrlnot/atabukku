import {
  D,
  $$,
  bms,
  bookmarksContainer,
} from './globals';
import { recentsDummyData } from '../dummy-data';
import Bookmarks from './Bookmarks';

class RecentBookmarks extends Bookmarks {
  constructor() {
    super();

    this.seeAll = {
      title: 'See All Bookmarks',
      parentId: '0',
      class: 'see-all',
    };
    this.defaultNoOfRecents = 9;
    this.bookmarksGetter = this.getter();
  }

  getter() {
    return new Promise((resolve, reject) => {
      let items = recentsDummyData;

      if (bms) {
        bms.getRecent(
          this.defaultNoOfRecents,
          (bookmarks) => {
            items = bookmarks;
          },
        );
      }

      // For see all bookmarks
      items.push(this.seeAll);

      return (items.length > 1)
        ? resolve(items)
        : reject();
    });
  }

  /**
   *  * Expected element of each item:
   *    <a href="bookmark link here">
   *      <div> Bookmark Title </div>
   *    </a>
   */
  renderer(bookmark) {
    const item = D.createElement('a');
    const div = D.createElement('div');
    const text = D.createTextNode(bookmark.title);

    item.classList.toggle(bookmark.class, bookmark.class);

    item.href = bookmark.url || '';

    item.appendChild(div);
    div.appendChild(text);

    bookmarksContainer.appendChild(item);
  }

  attachEventListeners() {
    $$(`.${this.seeAll.class}`).on('click', (e) => {
      e.preventDefault();

      console.log(e);
    });
  }
}

export default RecentBookmarks;
