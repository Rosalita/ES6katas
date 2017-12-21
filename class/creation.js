// 22: class - creation
// To do: make all tests pass, leave the assert lines unchanged!

describe('class creation', () => {

  it('is as simple as `class XXX {}`', function() {
    class TestClass{};

    const instance = new TestClass();
    assert.equal(typeof instance, 'object');
  });

  // JavaScript comes with function level scope for variables and Functions
  // Function level scope leads to a situation called hoisting for example
  // function f() { doSomething(); var a = 1;}
  // what is really happening is something like...
  // function f() { var a; doSomething(); a = 1;}

  // With EC6 block scope has been added
  // the word let allows you to declare variables that are limited in scope to the block
  // (or statement or expression) where they are used.
  // Let is unlike var, which defines a variable globally, or locally to an entire function regardless of scope

  it('class is block scoped', () => {
    {class Inside {}}
    assert.equal(typeof Inside, 'undefined');
  });

  it('special method is `constructor`', function() {
    class User {
      constructor(id){
        this.id = id
      }

      // There can be only one special method with the name 'constructor' in a class.
      // more than one will generate a syntax error
      // The constructor method is a special method for creating and initialising an object created within a class
    }

  // when a function is created a keyword called 'this' is also created
  // this keyword links to the object in which the function operates.
  // it is available to the scope of the function
  // yet is a reference to the object of which that function is a property / method
  // the keyword 'this' looks and acts like any other variable except it can't be modified
  // the value of this is passed to all functions based on the context in which the function is called at runtime

    const user = new User(42);
    assert.equal(user.id, 42);

  });

  it('defining a method is simple', function() {

  // a method is a function which is a property of an object.
  // There are two kinds of methods:
  // instance methods which are built in tasks performed by an object instance
  // static methods which ware tasks that can be performed without the need of an object instance.

    class User {
      writesTests(){
        return false;
      }
    }

    const notATester = new User();
    assert.equal(notATester.writesTests(), false);
  });

  it('multiple methods need no commas (opposed to object notation)', function() {
    class User {
      wroteATest() { this.everWroteATest = true; }
      isLazy() {  }
    }

    const tester = new User();
    assert.equal(tester.isLazy(), true);
    tester.wroteATest();
    assert.equal(tester.isLazy(), false);
  });

  it('anonymous class', () => {
    const classType = typeof {};
    assert.equal(classType, 'function');
  });

});
