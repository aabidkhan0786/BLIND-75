// 49) Group Anagram [Medium]
// Given an array of strings strs, group the 
// anagrams
//  together. You can return the answer in any order.

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:
// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:
// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let stringMap = new Map();
    for (let string of strs){
        let sortedString = string.split('').sort().join('');
        if (stringMap.has(sortedString)){
            stringMap.get(sortedString).push(string)
        }else{
            stringMap.set(sortedString, [string])
        }
    }
    return Array.from(stringMap.values());
};

// Time Complexity: O(NKlogK) where N is the length of strs, and K is the maximum length of a string in strs. The outer loop has complexity O(N) as we iterate through each string. Then, we sort each string in O(KlogK) time.