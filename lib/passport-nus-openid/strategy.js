/**
 * Module dependencies.
 */
var util = require('util')
  , openid = require('passport-openid'),
  openid = require('@passport-next/passport-openid')
  , OpenIDStrategy = require('@passport-next/passport-openid').Strategy;


/**
 * `Strategy` constructor.
 *
 * The NUS authentication strategy authenticates requests by delegating to
 * NUS using the OpenID 2.0 protocol.
 *
 * Applications must supply a `verify` callback which accepts an `identifier`,
 * and optionally a service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occurred, `err` should be set.
 *
 * Options:
 *   - `returnURL`  URL to which NUS will redirect the user after authentication
 *   - `realm`      the part of URL-space for which an OpenID authentication request is valid
 *   - `profile`    enable profile exchange, defaults to _true_
 *
 * Examples:
 *
 *     passport.use(new NusStrategy({
 *         returnURL: 'http://localhost:3000/auth/nus/return',
 *         realm: 'http://localhost:3000/'
 *       },
 *       function(identifier, profile, done) {
 *         User.findByOpenID(identifier, function (err, user) {
 *           done(err, user);
 *         });
 *       }
 *     ));
 *
 * @param {Object} options
 * @param {Function} verify
 * @api public
 */
function Strategy(options, validate) {
  options = options || {};
  options.providerURL = options.providerURL || 'https://openid.nus.edu.sg/';
  options.profile =  (options.profile === undefined) ? true : options.profile;

  OpenIDStrategy.call(this, options, validate);
  this.name = 'nus-openid';
}

/**
 * Inherit from `OpenIDStrategy`.
 */
util.inherits(Strategy, OpenIDStrategy);

/**
 * Expose `Strategy`.
 */ 
module.exports = Strategy;
