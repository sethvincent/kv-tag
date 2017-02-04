module.exports = function kvTag () {
  var strings = arguments[0]
  var values = Array.prototype.slice.call(arguments, 1)
  var obj = {}
  var i = 0
  var l = strings.length

  for (i; i < l; i++) {
    var string = strings[i]

    if (values[i]) {
      string = string + values[i]
    }

    var lines = string.split('\n')
    var j = 0
    var k = lines.length

    for (j; j < k; j++) {
      var line = lines[j]

      if (line.length) {
        var kv = line.trim().split(':')

        if (kv.length === 2) {
          var key = kv[0].trim()
          var value = kv[1].trim()
          var num = parseFloat(value)
          obj[key] = num ? num : value
        }
      }
    }
  }

  return obj
}
