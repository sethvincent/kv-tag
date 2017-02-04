var test = require('tape')

var kv = require('../index')

test('convert string to object with number values', function (t) {
  var obj = kv`
    a: 1
    b: 2
    c: 3
  `

  t.equal(obj.a, 1)
  t.equal(obj.b, 2)
  t.equal(obj.c, 3)
  t.end()
})

test('convert string to object with string and number values', function (t) {
  var obj = kv`
    a: 1
    b: hello
    c: 3
  `

  t.equal(obj.a, 1)
  t.equal(obj.b, 'hello')
  t.equal(obj.c, 3)
  t.end()
})

test('interpolation', function (t) {
  var a = 1
  var b = 'hello hi hey'
  var c = 3

  var obj = kv`
    a: ${a}
    b: ${b}
    c: ${c}
  `

  t.equal(obj.a, 1)
  t.equal(obj.b, 'hello hi hey')
  t.equal(obj.c, 3)
  t.end()
})
