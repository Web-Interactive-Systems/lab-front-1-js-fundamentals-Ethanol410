// TODO: Fix the errors in the functions below!

const functions = {
  // Computes the total order of a command
  // Rule: if total order is > 1000 the shipping is free
  orderTotal(order) {
    // const totalNormalItems = order.items...;
    // const shippingItem = order.items...;
    // const shipping = ...;
    if (!order || !order.items || order.items.length === 0) {
      return 0;
    }
    // initialise le total et le shipping
    let total = 0;
    let shipping = 0;

    // parcourt les items de la commande

    order.items.forEach((item) => {
      if (item.shipping) {
        shipping = shipping + item.price;
      } else {
        total = total + item.price * item.quantity;
      }
    });
    // si le total est supérieur à 1000, le shipping est gratuit
    if (total > 1000) {
      shipping = 0;
    }
    return total + shipping;
  },

  // merci camille pour la suggestion de l'exo
  addPositive(array) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
    // const sum = 0;
    const positiveNumbers = array.filter((posNumber) => posNumber >= 0);
    const positiveSum = positiveNumbers.reduce(
      (acc, curr) => acc + Number(curr),
      0,
    );
    return positiveSum;

    // return sum;
  },

  // Takes a string, find the first consecutively repeating character in it and return the last index of the repeated character. If there are no repeating characters, return -1. This function should ignore any spaces and should be case insensitive - treat 'a' as eqivalent to 'A'
  repeatingCharacter(string) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
    // for (let i = 0; i < string.length - 1; i++)
    str = string.toUpperCase();
    let index = -1;
    for (let i = 0; i < str.length - 1; i++) {
      if (str[i] === str[i + 1] && str[i] !== ' ') {
        index = i + 1;
        break;
      }
    }
    return index;
  },

  // Takes an array of 1's and 0's, find the maximum number of consecutive 1's
  // in this array. If there is any value other than 1 or 0 in the array,
  // this is an error, return -1. The 1's and 0's may be either string or
  // integer values, both are acceptable and should be considered equivalent
  maxOneNumber(array) {
    let maxCount = -1;
    let currentCount = -1;
    //
    // Todo: your code here
    for (let i = 0; i < array.length; i++) {
      if (
        array[i] !== 0 &&
        array[i] !== 1 &&
        array[i] !== '0' &&
        array[i] !== '1'
      ) {
        return -1;
      }
      if (array[i] === 1 || array[i] === '1') {
        currentCount++;
      } else {
        maxCount = Math.max(currentCount, maxCount);
        currentCount = 0;
      }
    }
    return Math.max(currentCount, maxCount);
  },
};

module.exports = functions;
