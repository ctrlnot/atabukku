import RecentBookmark from '../RecentBookmark';
import FolderBookmark from '../FolderBookmark';

const evaluateBookmarkType = (item) => {
  return item.children
    ? new FolderBookmark(item)
    : new RecentBookmark(item);
};

export default evaluateBookmarkType;
