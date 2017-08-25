'use strict';

console.log('test');

const a = {
  b: 1
};
const c = [1, 2, 3, 4];

console.log(...c);

const { b } = a;

console.log(b);

function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

const add1 = x => {
  var a, b;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        a = resolveAfter2Seconds(20);
        b = resolveAfter2Seconds(30);
        _context.t0 = x;
        _context.next = 5;
        return regeneratorRuntime.awrap(a);

      case 5:
        _context.t1 = _context.sent;
        _context.t2 = _context.t0 + _context.t1;
        _context.next = 9;
        return regeneratorRuntime.awrap(b);

      case 9:
        _context.t3 = _context.sent;
        return _context.abrupt('return', _context.t2 + _context.t3);

      case 11:
      case 'end':
        return _context.stop();
    }
  }, null, undefined);
};

add1(10).then(v => {
  console.log(v); // prints 60 after 2 seconds.
});

const add2 = x => {
  var a, b;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        _context2.next = 2;
        return regeneratorRuntime.awrap(resolveAfter2Seconds(20));

      case 2:
        a = _context2.sent;
        _context2.next = 5;
        return regeneratorRuntime.awrap(resolveAfter2Seconds(30));

      case 5:
        b = _context2.sent;
        return _context2.abrupt('return', x + a + b);

      case 7:
      case 'end':
        return _context2.stop();
    }
  }, null, undefined);
};

add2(120).then(v => {
  console.log(v); // prints 60 after 4 seconds.
});