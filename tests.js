// I did not add any DOM tests, only functional 

// test instructions
QUnit.test( "add", function() {
  equal( add(2,6), 8, "2 + 6 = 8" );
});
QUnit.test( "multiply", function() {
  equal( multiply(2,6), 12, "2 * 6 = 12" );
});
QUnit.test( "divide", function() {
  equal( divide(12,6), 2, "12 / 6 = 2" );
});
QUnit.test( "substract", function() {
  equal( substract(33,11), 22, "33 - 22 = 11" );
});

QUnit.test( "calculate result", function() {
    // for now this test works only if all available instruction files are required
    // need to be refactored to be flexible
  var instructionsArray = [
      {"operator" : "apply", "number" : 3},
      {"operator" : "multiply", "number" : 8},
      {"operator" : "apply", "number" : 9},
      {"operator" : "apply", "number" : 5},
      {"operator" : "divide", "number" : 4},
      {"operator" : "substract", "number" : 4}
      // here we have 5 * 8 / 4 - 4 = 6
  ]
  equal(calculateResult(instructionsArray), 6, "The result is calculated: 5 * 8 / 4 - 4 = 6" );
  //the next line removes the side effect of the test (the result is printed to the page)
  document.getElementById("result").innerHTML = "N/A";
});

QUnit.test( "calculate without the Apply instruction", function() {
  var instructionsArray = [
      {"operator" : "multiply", "number" : 8},
      {"operator" : "divide", "number" : 4},
      {"operator" : "substract", "number" : 4}
  ]
  equal(calculateResult(instructionsArray), undefined, "Apply operator was not added, calculation was terminated" );
  //the next line removes the side effect of the test (warning appends to the form)
  removeWarning();
});

QUnit.test( "new instruction added to an array", function() {
  addInstruction("apply", "Apply", 9);
  console.log(instrArray[0]);
  deepEqual(instrArray[0], { number : 9,operator : "apply"}, "Apply 9 is successfully added to instrArray" );
  resetCalc(); //remove side effects;
});


