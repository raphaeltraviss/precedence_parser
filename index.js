module.exports = function(input) {
  function ShuntStack() {
    this.ops = [];
    this.top = 0;
    this.length = this.top;
    this.push = function(el) { this.ops[this.top++] = el };
    this.pop = function() { this.ops[--this.top] };
    this.peek = function() { this.ops[this.top - 1] };
  }

  var s = new ShuntStack();
  var known_ops = ["AND","IN"];
  var precedence = { "AND":2, "IN":1 };
  var token;
  var o1, o2;
  var output = [];

  var tokens = input.split(" ");
  for (var i = 0; i < tokens.length; i++) {
    token = tokens[i];
    if (!known_ops.includes(token)) {
      output.push(token);
      continue;
    }
    o1 = token;
    o2 = s.peek();
    while (known_ops.includes(o2) && precedence[o1] <= precedence[o2]) {
      output.push(o2);
      s.pop();
      o2 = s.peek();
    }
    s.push(o1);
  }
  return output.concat(s.ops.reverse());
}
