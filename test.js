const test = require('tape');
const parse = require('./index');

test('parser test', function (t) {
  t.plan(1);
  const result = parse("hey AND howdy IN foo AND bar IN header");
  console.log("Parse output is...", result);
  t.assert(true);
});
