// 15. 3 Sums 
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// Example 2:
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.
 

// Constraints:
// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const ans = new Set();
    nums.sort((a,b)=> a-b);
    let n = nums.length
    for (let i =0; i<n;i++){
        let left = i+1;
        let right = n-1;
        let current = nums[i];
        while(left < right){
            let sum = current+ nums[left]+nums[right];
            if (sum == 0){
                 ans.add([current, nums[left],nums[right]].join(",") ) //[1,0,-1]
                 left ++;
                 right --;
            }else if (sum < 0) left ++;
            else right--;
        }
    }
    return Array.from(ans).map(item => item.split(",").map(item => +item))
};