import {
  D,
  $,
  bms,
} from './globals';
import { recentsDummyData } from '../dummy-data';
import Bookmarks from './Bookmarks';

class RecentBookmarks extends Bookmarks {
  constructor() {
    super();

    this.defaultNoOfRecents = 9;

    this.container = $('#recents');
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
      items.push({ title: 'See All Bookmarks' }); 

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

    item.href = bookmark.url;
    item.appendChild(div);
    div.appendChild(text);

    this.container.appendChild(item);
  }
}

export default RecentBookmarks;
