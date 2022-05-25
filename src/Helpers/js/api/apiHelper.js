/**
 * 
 * @param {String} method - possible methods: GET, POST
 * @param {String} route - the API endpoint
 * @param {Object} params - key,val-object { foo: 'bar', bar: 'foo' }, can be a nested object
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
function appApi(method, route, params, isForm = false) {
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
        console.log(response)
      })

      .catch((e) => {
        if (e.response) {
          console.warn(e.response)
        } else {
          console.warn('Unknown error')
        }
      })

      .finally(() => {
        console.log('finally appApiEnded')
      })
  }
}

/* eslint-disable object-curly-newline */
export { appApi }