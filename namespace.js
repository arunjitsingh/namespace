/**
 * @fileoverview Creating namespaces.
 * @author Arunjit Singh <arunjit@me.com>
 * @copyright Copyright 2011 Arunjit Singh. All Rights Reserved.
 * @license MIT license. This notice must be included in all distributions.
 *     @see //LICENSE for details.
 *     @see http://www.opensource.org/licenses/mit-license.php for details.
 */

/**
 * Creates a namespace from a '.'-separated string and an optional parent
 * object.
 * @param {String} ns The namespace to create.
 * @param {Object=} parent The parent object. Defaults to {this}, whatever it
 *     may be.
 * @this {Object} Whatever the global/scoped object is. If running within a
 *     closure, you must provide a {parent} object.
 */
function namespace(ns, parent) {
  parent = parent || this;
  var parts = ns.split('.'),
    ref = parent;

  parts.forEach(function(part) {
    ref[part] = ref[part] || {};
    ref = ref[part];
  });
}

/**
 * @this {window|module.exports}
 * @suppress {globalThis}
 */
this['namespace'] = namespace;
