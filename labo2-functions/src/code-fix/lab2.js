// TODO: Fix the errors in the functions below!

const functions = {
  // This function takes an array of numbers and returns a new array with each number squared.
  squareNumbers(numbers) {
    // square numbers;
    const squared = numbers.map((n) => n * n);
    // il vaut mieux externaliser ses fonctions
    return squared;
  },

  // This function takes an array of strings and returns a new array with only the strings that contain the letter 'a'.
  filterStrings(strings) {
    // filter
    const filteredStrings = strings.filter((word) => word.includes('a'));
    return filteredStrings;
  },

  // This function takes an array of numbers and returns the sum of all the numbers in the array.
  sumReduceNumbers(numbers) {
    const sum = 0;
    const sumWithReduce = numbers.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      sum,
    );
    return sumWithReduce;

    /* 

    let somme = 0;
    function add(num) {
      somme += num;
    }
    numbers.forEach(add);
    return somme;
    
    */
  },

  // removes last element of an array and returns it
  helper1(array) {
    return array.pop();
  },

  // add one element to an array
  helper2(arr, newOne) {
    arr.push(newOne);
    //  arr.splice(arr.length, 0, newOne);
    return arr;
    // return [...arr, newOne];
    // return newOne;
  },

  // removes first element from an array and returns a new array
  helper3(arr) {
    const firstElement = arr.shift();
    return firstElement;
  },

  // add elements to the top of an array
  helper4(arr, ...elements) {
    arr.unshift(...elements);
    return arr;
    // return [];
  },

  // takes an array, a starting index, the number of elements to remove, and any number of additional items to insert into the array at the specified starting index
  helper5(arr, start, deleteCount, ...items) {
    return arr.splice(start, deleteCount, ...items);
  },

  // takes an array and two indices (start and end) as parameters, and returns a new array containing the elements from the original array between the start and end indices (excluding the element at the end index)
  helper6(array, start, end) {
    return array.slice(start, end);
  },

  // concat two arrays
  helper7(arr1, arr2) {
    return arr1.concat(arr2);
  },

  // see unit tests for helper8 function
  helper8(arr, element) {
    const searchItem = arr.find((el) => el === element);
    const index = arr.indexOf(searchItem);
    return index;
  },

  // see unit tests for helper9 function
  helper9(array, value) {
    const valueFound = array.includes(value);
    return valueFound;
  },

  // see unit tests for helper10 function
  helper10(array, callback) {
    Array.prototype.findFirst = function (callback) {
      if (typeof callback !== 'function') {
        throw new TypeError('Callback must be a function');
      }
      for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
          return this[i];
        }
      }
      return undefined;
    };
    return array.findFirst(callback);
  },

  // see unit tests for helper11 function
  helper11(arr, predicate) {
    return arr.findIndex(predicate);
  },

  // takes an array arr and a callback function, and returns a boolean value indicating whether every element in the array satisfies the condition specified by the callback function
  helper12(arr, callback) {
    return arr.every(callback);
  },

  // takes an array arr and a callback function, returns true if at least one element in the array satisfies the condition specified in the callback function
  helper13(arr, funcCallback) {
    return arr.some(funcCallback);
  },

  // see unit tests for helper14 function
  helper14(arr, separator) {
    return arr.join(separator);
    // return [arr, separator];
  },

  // takes an array of numbers and returns the sum of all the numbers in the array using forEach.
  sumEachNumbers(numbers) {
    let somme = 0;
    function add(num) {
      somme += num;
    }
    numbers.forEach(add);
    return somme;
    // return 0;
  },

  // takes an array of numbers, multiplies each number by 2, and returns the sum of even numbers.
  sumDoubledEvenNumbers(numbers) {
    // filter even number... num % 2 === 0
    numbers = numbers.filter((num) => num % 2 === 0);
    // double numbers
    numbers = numbers.map((num) => num * 2);
    // sum
    let somme = 0;
    function add(numbers) {
      somme += numbers;
    }
    numbers.forEach(add);
    return somme;
  },
};

module.exports = functions;
