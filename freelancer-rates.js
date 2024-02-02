/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  var rate = ratePerHour*8;
  return rate;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  var days = (budget / ratePerHour / 8)
  return Math.floor(days)
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const dayRate = ratePerHour * 8;
  const discountedMonthRate = dayRate * 22 - (discount * (dayRate * 22));
  const fullMonths = Math.floor(numDays / 22);
  const remainingDays = numDays % 22;

  var discountRate = (fullMonths * discountedMonthRate) + (remainingDays * dayRate);
  return Math.ceil(discountRate);
}
