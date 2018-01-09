// 44: Map - basics
// To do: make all tests pass, leave the assert lines unchanged!

// a map object holds key-value pairs. 
// Any value (both objects and primitive values) may be used as either a key or a value

// to declare a new map
// new Map([iterable]) where iterable is an array or another iterable object whose elements
// are key value pairs, e.g. arrays with two elements like [[1, 'one'],[2, 'two']]
// map objects iterate through elements in insertin order
// a for loop returns an array of [key, value for each iteration]

describe('`Map` is a key/value map', function(){

  it('`Map` is a new global constructor function', function() {
    assert.equal(typeof Map, 'function');
  });
  
  it('provides `new Map().set()` to add key+value pair, `get()` to read it by key', function() {
    let map = new Map();
    map.set('key', 'value'); // use set to set values in a map
    const value = map.get('key'); // use get to get values out of a map
    
    assert.equal(value, 'value');
  });
  
  it('`has()` tells if map has the given key', function() {
    let map = new Map();
    map.set('key', 'value');
    const hasIt = map.has('key'); // use has to check if something is in a map
    
    assert.equal(hasIt, true);
  });

  it('a map is iterable', function() {
    let map = new Map();
    map.set('1', 'one');
    map.set('2', 'two');
    const mapAsArray = Array.from(map); // hint: kata #29 http://tddbin.com/#?kata=es6/language/array-api/from
    
    assert.deepEqual(mapAsArray, [['1', 'one'], ['2', 'two']]);
  });
  

  it('complex types can be keys', function() {
    const obj = {x: 1};
    const otherObj = {x: 1};
    let map = new Map();
    map.set(obj, '');
    
    assert.equal(map.has(otherObj), false);
  });
  
});
