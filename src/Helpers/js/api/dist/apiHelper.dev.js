"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appApi = appApi;

/**
 * 
 * @param {String} method - possible methods: GET, POST
 * @param {String} route - the API endpoint
 * @param {Object} params - key,val-object { foo: 'bar', bar: 'foo' }, can be a nested object
 * @param {JSON} redirectOnSuccess - accepts JSON type with keys 'redirect'-Boolean and 'redirectRoute'-String 
 * @param {Boolean} isForm - OPTIONAL: flag to send form data instead of POST request
 * 
 * #### Helps to fetch or send data within this application via API or form.
 *
 * Possible usage:
 * 
 * const requestBody = {
 *     email: this.input.email,
 *       password: this.input.password
 *     }
 *     appApi('POST', '/login', requestBody)
 */

/* eslint-disable object-curly-newline */
function appApi(method, route, params) {
  var redirectOnSuccess = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
    redirect: false,
    redirectRoute: ''
  };
  var isForm = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  /* eslint-enable object-curly-newline */
  console.log('appApi started');

  if (method && route) {
    fetch(route, {
      method: method,
      headers: {
        'Accept': isForm ? 'application/x-www-form-urlencoded' : 'application/json;charset=UTF-8',
        'Content-Type': isForm ? 'application/x-www-form-urlencoded' : 'application/json;charset=UTF-8'
      },
      body: JSON.stringify(params)
    }).then(function (response) {
      if (redirectOnSuccess.redirect && response.ok) {
        window.location.replace(redirectOnSuccess.redirectRoute);
      }
    })["catch"](function (e) {
      console.log(e);
    })["finally"](function () {
      console.log('finally appApiEnded');
    });
  }
}
/* eslint-disable object-curly-newline */