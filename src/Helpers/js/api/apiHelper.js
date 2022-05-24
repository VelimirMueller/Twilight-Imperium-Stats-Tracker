/**
 * 
 * @param {String} method - possible methods: GET, POST
 * @param {String} route - the API endpoint
 * @param {Object} params - key,val-object { foo: 'bar', bar: 'foo' }, can be a nested object
 * 
 * #### Helps to fetch or send data within this application via API
 * @TODO: implement more cool features here
 */
function appApi(method, route, params) {
  if (method && route) {
    fetch(route, {
      method: method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(params)
    })
      /* eslint-disable no-console */
      .catch((e) => {
        console.log(e)
      })
      /* eslint-enable no-console */
  }
}

/* eslint-disable object-curly-newline */
export { appApi }