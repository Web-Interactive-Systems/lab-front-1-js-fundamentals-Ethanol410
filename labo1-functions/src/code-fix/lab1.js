// TODO: Fix the errors in the functions below!

const functions = {
  sum(a, b) {
    // Todo use typeof and throw
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
    // console.log(typeof a);
    // console.log(typeof b);
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Invalid arguments');
    }
    return a + b;
  },

  doubleNumbersInArray: function doubleNumbersInArray(array) {
    // Todo: use Array/map
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    const double = (x) => {
      if (typeof x !== 'number') {
        throw new Error('Invalid argument');
      }
      // array.map((value) => value * 2);
      return x * 2;
    };
    // return array.map(double);

    array.forEach((e, index) => {
      array[index] = double(e);
    });

    return array;

    /* 

    
    */
    // il n'y a que map qui transforme les elements du tableau
    // forEach ne transforme pas le tableau, il parcourt juste sans rien retourner 🥸
    // console.log(array);
  },

  checkForBadWords(input) {
    // Todo: use Array/forEach and throw
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    let grosMot = ['merde'];
    grosMot.forEach((mot) => {
      if (input.includes(mot)) {
        throw new Error('Contenu inapproprié');
      }
    });
  },

  nameOfWeekDay(index) {
    const jours = [
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
      'sunday',
    ];
    return jours[index].toUpperCase().charAt(0) + jours[index].slice(1);
  },

  sortNumbers(array) {
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    array.sort((a, b) => a - b);

    return array;
  },

  createCounterFunction(input) {
    let nbr = input;
    function counter() {
      // input += 1;
      nbr += 1;
      // return input;
      return nbr;
    }
    return counter;
  },

  createHelloMessage(name) {
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    name = `Hello ${name}.`;
    name += ' Are you well?';
    return name;
  },

  callTheCallback(callback) {
    // Docs: https://developer.mozilla.org/en-US/docs/Glossary/Callback_function pas ;cc ENZO <3

    callback(1, 2);
    return null;
  },

  combineArrays(array1, array2) {
    return array1.concat(array2);
  },

  promiseMeMoney() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('send message');
      }, 100);
    });
  },
};

module.exports = functions;
