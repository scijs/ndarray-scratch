"use strict"

var pool = require("../scratch.js")

require("tape")("ndarray-scratch", function(t) {

  var x = pool.malloc([10,10])
  
  t.same(x.shape, [10,10])
  t.same(x.stride, [10,1])
  t.assert(x.data.length >= 10*10)
  
  pool.free(x)

  t.end()
})