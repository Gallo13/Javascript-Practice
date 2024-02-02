/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the front door.
 *
 * @param {string} line
 * @returns {string}
 */
export function frontDoorResponse(line) {
  var firstLetter = line[0];
  return firstLetter;
}

/**
 * Format the password for the front-door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the front door password
 */
export function frontDoorPassword(word) {
  var sentenceCase = word[0].toUpperCase() + word.slice(1, 20).toLowerCase();
  return sentenceCase;
}

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the back door.
 *
 * @param {string} line
 * @returns {string}
 */
export function backDoorResponse(line) {
  // removes blank spaces at front and back of string
  var line = line.trim()
  // use .slice(-1) instead of line[-1] to get last letter
  var lastLetter = line.slice(-1)
  return lastLetter;
}

/**
 * Format the password for the back door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the back door password
 */
export function backDoorPassword(word) {
  var polite = frontDoorPassword(word) + (', please');
  return polite;
}
