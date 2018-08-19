const D = document;
const $ = D.querySelector.bind(D);
const $$ = (selector, startNode = D) => startNode.querySelectorAll(selector);

const bms = chrome.bookmarks;
const env = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';

export {
  D,
  $,
  $$,
  bms,
  env,
};
