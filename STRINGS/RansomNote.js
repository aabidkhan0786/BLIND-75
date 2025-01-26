// 383. Ransom Note (Easy)
// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.

// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false

// Example 2:
// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Example 3:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// Constraints:
// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let ransomHash = new Map();

  for (let char of magazine) {
    if (ransomHash.has(char)) {
      ransomHash.set(char, ransomHash.get(char) + 1);
    } else {
      ransomHash.set(char, 1);
    }
  }
  for (let char of ransomNote) {
    if (!ransomHash.has(char) || ransomHash.get(char) == 0) {
      return false;
    } else {
      ransomHash.set(char, ransomHash.get(char) - 1);
    }
  }
  return true;
};
