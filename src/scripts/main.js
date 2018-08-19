import RecentBookmarks from './RecentBookmarks';

export default () => {
  const recents = new RecentBookmarks();

  recents.getBookmarks();
};
