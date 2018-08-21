import { bms } from './globals';
import Bookmark from '../Bookmark';
import RecentBookmark from '../RecentBookmark';
import FolderBookmark from '../FolderBookmark';

import { recentsDummyData, wholeBookmarksDummyData } from './dummy-data';

const getAllBookmarks = new Promise((resolve, reject) => {
  let rawItems = wholeBookmarksDummyData;

  if (bms) {
    bms.getTree((bookmarks) => {
      rawItems = bookmarks;
    });
  }

  const bookmarks = {};
  // Bookmark Bar
  bookmarks.children = rawItems[0].children[0].children
    .map((rawItem) => {
      return rawItem.children
        ? new FolderBookmark(rawItem)
        : new Bookmark(rawItem);
    });
  bookmarks.children.push(rawItems[0].children[1]); // Pushed Other bookmarks folder
  bookmarks.dateAdded = rawItems[0].dateAdded;
  bookmarks.id = rawItems[0].id;
  bookmarks.title = 'All Bookmarks';

  resolve(bookmarks);
});

const recentBookmarks = new Promise((resolve, reject) => {
  let items = recentsDummyData;

  if (bms) {
    bms.getRecent(
      this.defaultNoOfRecents,
      (bookmarks) => {
        items = bookmarks;
      },
    );
  }

  items = items.map(item => new RecentBookmark(item));
  getAllBookmarks
    .then(bookmark => items.push(new FolderBookmark(bookmark)))
    .catch(err => console.error(err));

  return (items.length > 1)
    ? resolve(items)
    : reject();
});

export { recentBookmarks, getAllBookmarks };
