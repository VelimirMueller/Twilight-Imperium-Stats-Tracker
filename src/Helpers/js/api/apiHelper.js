/**
 * 
 * @param {String} method - possible methods: GET, POST
 * @param {String} route - the API endpoint
 * @param {Object} JsonBody - e.g. { email: this.input.email, password: this.input.password }
 * 
 * #### Helps to fetch or send data within this application
 */
function appApi(method, route, JsonBody) {
  if (method && route) {
    fetch(route, {
      method: method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(JsonBody)
    })
  }
}

/* eslint-disable object-curly-newline */
export { appApi }