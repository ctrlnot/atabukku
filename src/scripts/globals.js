const D = document;
const $ = D.querySelector.bind(D);
const $$ = (selector, startNode = D) => startNode.querySelectorAll(selector);

const bms = chrome.bookmarks;
const bookmarksContainer = $('#bookmarks');

export {
  D,
  $,
  $$,
  bms,
  bookmarksContainer,
};
