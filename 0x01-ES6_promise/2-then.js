function handleResponseFromAPI (promise) {
  promise.then((response) => {
    console.log('Got a response from the API');
    return { status: 200, body: response };
  },
  (error) => { return Error(); });
}

module.exports = handleResponseFromAPI;
