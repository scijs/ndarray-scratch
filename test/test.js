"use strict"

var pool = require("../scratch.js")

require("tape")("ndarray-scratch", function(t) {

  var x = pool.malloc([10,10])
  
  t.same(x.shape.slice(), [10,10])
  t.same(x.stride.slice(), [10,1])
  t.assert(x.data.length >= 10*10)
  
  var y = pool.clone(x)
  t.same(x.shape, y.shape)
  t.same(x.stride, y.stride)
  t.same(x.data.length, y.data.length)
  t.same(x.dtype, y.dtype)

  pool.free(x)
  pool.free(y)

  var zeros = pool.zeros([10,10])

  t.same(zeros.shape, x.shape)

  t.end()
})