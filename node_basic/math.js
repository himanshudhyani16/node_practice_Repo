function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}

// for single
// module.exports = add;

// for multiple export
// module.exports = { addFun: add, subFun: sub };
module.exports = { add, sub }; // best practice




// ----------- anonymous function -----------------------//
// exports.add1 = (a, b) => a + b;
// exports.sub1 = (a, b) => a - b;
