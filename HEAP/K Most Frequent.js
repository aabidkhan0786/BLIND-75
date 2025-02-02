/*
347) K Most Frequent Elements:
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]
 

Constraints:
1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const n = nums.length;
    const freqMap = new Map();
    let freqArray = new Array(n);

    for (let i =0; i<n;i++){
        if(freqMap.has(nums[i])){
            freqMap.set(nums[i],freqMap.get(nums[i])+1);
        }else{
            freqMap.set(nums[i],1)
        }
    }

    freqArray =Array.from(freqMap.keys());
    freqArray =freqArray.sort((a,b)=> freqMap.get(b) - freqMap.get(a))
    console.log(freqArray)
    return freqArray.splice(0,k);
};