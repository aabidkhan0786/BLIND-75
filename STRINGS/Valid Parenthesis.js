// 20) Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Example 4:
// Input: s = "([])"
// Output: true

// Constraints:
// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const parenthesisStack = new Array();
  for (let char of s) {
    if (char == "(") {
      parenthesisStack.push(")");
    } else if (char == "{") {
      parenthesisStack.push("}");
    } else if (char == "[") {
      parenthesisStack.push("]");
    } else if (parenthesisStack.pop() != char) return false;
  }
  return parenthesisStack.length <= 0;
};
