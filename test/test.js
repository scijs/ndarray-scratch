"use strict"

var pool = require("../scratch.js")
var tape = require('tape')

var dtypes = ['double', 'array', 'float']

tape("ndarray-scratch", function(t) {
  dtypes.forEach(function(dtype) {

    var i,j,k

    var x = pool.malloc([10,10], dtype)

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

    for(i=0; i<10; i++) {
      for(j=0; j<10; j++) {
        t.equal(zeros.get(i,j), 0)
      }
    }

    var ones = pool.ones([10,10])
    t.same(ones.shape, x.shape)
    for(i=0; i<10; i++) {
      for(j=0; j<10; j++) {
        t.equal(ones.get(i,j), 1)
      }
    }

    var eye = pool.eye([10,10])
    t.same(eye.shape, x.shape)
    for(i=0; i<10; i++) {
      for(j=0; j<10; j++) {
        t.equal(eye.get(i,j), i===j ? 1 : 0)
      }
    }

    var eye3 = pool.eye([3,4,5])
    t.same(eye3.shape, [3,4,5])
    for(i=0; i<3; i++) {
      for(j=0; j<4; j++) {
        for(k=0; k<5; k++) {
          t.equal(eye3.get(i,j,k), (i===j && j===k) ? 1 : 0)
        }
      }
    }

  })
  t.end()
})
