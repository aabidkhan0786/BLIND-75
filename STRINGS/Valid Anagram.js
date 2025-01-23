// 242. Valid Anagram (Anagram means the word is same but the order of characters is different)
// Given two strings s and t, return true if t is an 
// anagram
//  of s, and false otherwise.


// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false


// Constraints:
// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
 
// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const charMap = new Map();

    for(let char of s){
        if (charMap.has(char)){
            charMap.set(char,charMap.get(char)+1)
        }else{
            charMap.set(char,1)
        }
    }

    for(let char of t){
        if(charMap.has(char)){
            charMap.set(char,charMap.get(char)-1)
            if (charMap.get(char) === 0) charMap.delete(char);
        }else{
            return false;
        }
    }

    if(charMap.size >0) return false;
    return true;
};