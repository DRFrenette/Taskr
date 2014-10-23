var list = [1, 2, 3, 4]

var greaterThanTwo = function(element) {
  return element > 2;
}

var divisibleByThree = function(element){
  return element % 3 === 0;
}

var select = function(array, selectFunction) {
  var result = [];
  for (var i = 0; i < list.length; i++) {
    var currentResult = selectFunction(list[i]);
    if (currentResult){
      result.push(list[i]);
    };
  }
  return result;
};
