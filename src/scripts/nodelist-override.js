/**
 *  Added `on` prototype to attach events on DOM
 *
 *  Ex:
 *    $$('.button').on('click', function (e) {})
 */
export default function override() {
  NodeList.prototype.map = Array.prototype.map;
  NodeList.prototype.on = function on(type, listener, opts) {
    let options = opts;
    if (options === null) options = { passive: true };

    this.map((el) => {
      if (el instanceof Element) {
        el.addEventListener(type, listener, options);
      }

      return el;
    });

    return this;
  };
}
