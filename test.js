const test = require('tape');
const parse = require('./index');

test('parser test', function (t) {
  t.plan(1);
  const result = parse("hey AND howdy IN foo AND bar IN header");
  t.deepEqual(result, ['hey','howdy','foo','bar','header','IN','AND','IN','AND']);
});
