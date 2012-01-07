/**
 * @fileoverview Creating namespaces.
 * @author Arunjit Singh <arunjit@me.com>
 * @license MIT license. This notice must be included in all distributions.
 *     @see //LICENSE for details.
 *     @see http://www.opensource.org/licenses/mit-license.php for details.
 */
/**
 * Namespace to avoid global collisions.
 * @this The global object (window or module.exports).
 */
(function (global) {
  if (global['namespace']) {
    global['old_namespace'] = global['namespace'];
  }
  /**
   * Creates a namespace from a '.'-separated string and an optional parent
   * object.
   * @param {String} ns The namespace to create.
   * @param {Object=} opt_parent The parent object. Defaults to the
   *     {@code global} object.
   */
  global['namespace'] = function namespace(ns, opt_parent) {
    var ref = opt_parent || global;
    var parts = ns.split('.');

    parts.forEach(function(part) {
      ref[part] = ref[part] || {};
      ref = ref[part];
    });
  };
})(this);
