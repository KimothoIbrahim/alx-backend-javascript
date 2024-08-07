function handleResponseFromAPI (promise) {
  promise.then((response) => {
    console.log('Got a response from the API');
    return { status: 200, body: 'success' };
  },
  (error) => { return Error(); });
}

module.exports = handleResponseFromAPI;
