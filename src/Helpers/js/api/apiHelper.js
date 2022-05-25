/**
 * 
 * @param {String} method - possible methods: GET, POST
 * @param {String} route - the API endpoint
 * @param {Object} params - key,val-object { foo: 'bar', bar: 'foo' }, can be a nested object
 * @param {Boolean} isForm - flag to send form data instead of POST request
 * 
 * #### Helps to fetch or send data within this application via API or form
 * Possible usage:
 * 
 * const requestBody = {
 *     email: this.input.email,
 *       password: this.input.password
 *     }
 *     appApi('POST', '/login', requestBody)
 */
function appApi(method, route, params, isForm = false) {
  if (method && route) {
    fetch(route, {
      method: method,
      headers: {
        'Accept': isForm ? 'application/x-www-form-urlencoded' : 'application/json;charset=UTF-8',
        'Content-Type': isForm ? 'application/x-www-form-urlencoded' : 'application/json;charset=UTF-8'
      },

      body: JSON.stringify(params)
    })
      /* eslint-disable no-console */
      .catch((e) => {
        console.log(e)
      })
      .finally(() => console.log('success'))
      /* eslint-enable no-console */
  }
}

/* eslint-disable object-curly-newline */
export { appApi }