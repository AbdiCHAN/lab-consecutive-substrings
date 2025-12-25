/**
 * Generates all consecutive substrings of a given string.
 * 
 * Example:
 * 'abc' -> ['a', 'ab', 'abc', 'b', 'bc', 'c']
 *
 * Time Complexity: O(n^2) because we iterate over all starting indices 
 * and for each start, iterate over all possible end indices.
 *
 * @param {string} str - The input string.
 * @returns {string[]} - Array of consecutive substrings.
 */
function consecutiveSubstrings(str) {
  const result = [];

  for (let start = 0; start < str.length; start++) {
    let substring = '';
    for (let end = start; end < str.length; end++) {
      substring += str[end];
      result.push(substring);
    }
  }

  return result;
}

// Testing when running directly
if (require.main === module) {
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;