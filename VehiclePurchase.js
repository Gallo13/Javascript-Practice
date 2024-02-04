 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
  if (option1 < option2)
  {
    return option1 + ' is clearly the better choice.';
  }
  else
  {
    return option2 + ' is clearly the better choice.';
  }
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns {number} expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
  if (age < 3)
  {
    var price = originalPrice * .8;
    return price;
  }
  else if (age > 10)
  {
    var price = originalPrice * .5;
    return price;
  }
  else
  {
    var price = originalPrice * .7;
    return price;
  }
}
