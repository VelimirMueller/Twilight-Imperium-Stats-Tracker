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
function appApi(method, route, params, redirectOnSuccess = { redirect: false, redirectRoute: '' }, isForm = false) {
/* eslint-enable object-curly-newline */
  console.log('appApi started')
  if (method && route) {
    fetch(route, {
      method: method,
      headers: {
        'Accept': isForm ? 'application/x-www-form-urlencoded' : 'application/json;charset=UTF-8',
        'Content-Type': isForm ? 'application/x-www-form-urlencoded' : 'application/json;charset=UTF-8'
      },
      body: JSON.stringify(params)
    })
      .then(response => {
        if (redirectOnSuccess.redirect && response.ok) {
          window.location.replace(redirectOnSuccess.redirectRoute)
        }
      })

      .catch((e) => {
        console.log(e)
      })

      .finally(() => {
        console.log('finally appApiEnded')
      })
  }
}

/* eslint-disable object-curly-newline */
export { appApi }