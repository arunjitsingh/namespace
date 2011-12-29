/**
 * @fileoverview Creating namespaces.
 * @author Arunjit Singh <arunjit@me.com>
 * @license MIT license. This notice must be included in all distributions.
 *     @see //LICENSE for details.
 *     @see http://www.opensource.org/licenses/mit-license.php for details.
 */
/**
 * Namespace to avoid global collisions.
 * @this {(Window|Object)} The global object (window or module.exports).
 */
(function (ns) {
  if (ns['namespace']) {
    ns['old_namespace'] = ns['namespace'];
  }
  /**
   * Creates a namespace from a '.'-separated string and an optional parent
   * object.
   * @param {string} ns The namespace to create.
   * @param {Object=} parent The parent object. Defaults to {this}, whatever it
   *     may be.
   * @this {Object} Whatever the global/scoped object is. If running within a
   *     closure, you must provide a {parent} object.
   */
  ns['namespace'] = function namespace(ns, parent) {
    parent = parent || this;
    var parts = ns.split('.'),
      ref = parent;

    parts.forEach(function(part) {
      ref[part] = ref[part] || {};
      ref = ref[part];
    });
  };
})(this);
