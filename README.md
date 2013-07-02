ndarray-scratch
===============
A simple wrapper for typedarray-pool.  I got tired of manually constructing ndarrays from typedarrays, and so this module saves some keystrokes/sanity.

## Example

```javascript
var pool = require("ndarray-scratch")


//Create a temporary typed array
var x = pool.malloc([100,100])

//Do stuff with x

//Release x
pool.free(x)
```

## Install

    npm install ndarray-scratch
    

## API

```javascript
var pool = require("ndarray-pool")
```

### `pool.malloc(shape[, dtype])`
Allocates a temporary ndarray

* `shape` is the shape of the array to allocate
* `dtype` is the dtype of the array to allocate (default `double`)

**Returns** a temporary ndarray

### `pool.free(array)`
Releases a temporary ndarray

* `array` is the ndarray to release.

## Credits
(c) 2013 Mikola Lysenko. MIT License