
// Unique

// Array.prototype.uniq = function(){
//
// }
var uniq = function(array){
  var uniqArr = [];
  for (var i = 0; i < array.length; i++) {
    if (uniqArr.indexOf(array[i]) === -1) {
      uniqArr.push(array[i]);
    }
  }
return uniqArr;
};

var twoSum = function(array) {
  var result = [];

  for (var i = 0; i < array.length; i++) {
    for (var j = i+1; j < array.length; j++){
      if (array[i] + array[j] === 0) {
        result.push([i,j]);
      }
    }
  }
  return result;
};

var transpose = function(array) {
  var result = [];
  for (var j = 0; j < array.length; j++) {
    var subArr = [];
    for (var i = 0; i < array.length; i++) {
      subArr.push(array[i][j]);
    }
    result.push(subArr);
  }
  return result;
};

Array.prototype.myEach = function (callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
  // return this;
};

Array.prototype.myMap = function (callback) {
  var result = [];
  // var func2 = function (el) {
  //   result.push(callback(el));
  // };

  this.myEach( function (el) {
    result.push(callback(el));
  });

  // this.myEach(func2);
  return result;
};

Array.prototype.myInject = function (callback) {
var accum = this[0];
var arr = this.slice(1);

arr.myEach(function (el) {
  accum = callback(el, accum);
});

return accum;
// for each value call func(el) and add to accum
};


Array.prototype.bubbleSort = function () {

  var sorted = false;
  var temp = 0;

  while (sorted === false) {
    sorted = true;

    for (var i = 0; i < (this.length - 1); i++) {
      var j = i + 1;

      if (this[j] < this[i]){
        sorted = false;
        temp = this[i];
        this[i] = this[j];
        this[j] = temp;
      }
    }
  }
  return this;
};

Array.prototype.substrings = function () {
  var subs = []
  for (var i = 0; i < (this.length - 1); i++) {
    for ( var j = i + 1; j < this.length; j++) {
      substring = this[i..j]
    }
  }
}

function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element);
}

function logArrayElements2(element) {
  console.log(element);
}


var total = [0, 1, 2, 3].reduce(function(a, b) {
  return a + b;
});

var total2 = [0, 1, 2, 3].myInject(function(a, b) {
  return a + b;
});

// var numbers = [1, 4, 9];
// var roots = numbers.map(Math.sqrt);
// var roots2 = numbers.myMap(Math.sqrt);

[2, 5, 9].forEach(logArrayElements);
// [2, 5, 9].myEach(logArrayElements);
// [2, 5, 9].forEach(logArrayElements2);
// [2, 5, 9].myEach(logArrayElements2);
