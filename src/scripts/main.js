import overrideNodelist from './nodelist-override';
import RecentBookmarks from './RecentBookmarks';

// Sorry idk what to name it :(
overrideNodelist();

export default () => {
  const recents = new RecentBookmarks();

  recents.getBookmarks();
};
