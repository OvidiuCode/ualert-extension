/**
 * Define Selector functions.
 *
 * @type Function
 */
var Selector = {

  /**
   * Get current provided selector.
   *
   * @param {string} selector
   * @param {string} type [null|querySelector|querySelectorAll]
   * @returns {NodeList|Element}
   */
  element: function (selector, type) {
    // Define default type as 'querySelector.
    var selectorType = type || 'querySelector';

    // Check if is an ID.
    if (selector.indexOf('#') === 0) {
      selectorType = 'getElementById';
      selector = selector.substr(1, selector.length);
    }
    return document[selectorType](selector);
  },

  /**
   * Get an element click.
   *
   * @param {string} selector
   * @param {Boolean} prevent
   * @param {Function} callback
   * @returns {callback}
   */
  click: function (selector, prevent, callback) {
    // Capture click action.
    this.element(selector).addEventListener('click', function (event) {
      // Check if prevent click is enabled.
      if (prevent || null) {
        event.preventDefault();
      }
      // Callback response.
      callback(event);
    });
  },

  /**
   * Add new class element to a selector.
   *
   * @param {Object} selector
   * @param {string} element
   */
  find: function (selector, element) {
    this.element(selector).classList.add(element);
  },

  /**
   * Remove class element from a selector.
   *
   * @param {string} selector
   * @param {string} element
   */
  remove: function (selector, element) {
    this.element(selector).classList.remove(element);
  },

  /**
   * Toggle action under a selector.
   *
   * @param {string} selector
   * @param {string} style
   */
  toggle: function (selector, style) {
    this.element(selector).classList.toggle(style);
  }
};