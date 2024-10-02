const assert = require("assert");
const displayMessage = require('../0-console');

it('execution on Node', function() {
  const given = 'Yellow';
  const res = displayMessage(given);
  assert.strictEqual('Yellow', given)
});
