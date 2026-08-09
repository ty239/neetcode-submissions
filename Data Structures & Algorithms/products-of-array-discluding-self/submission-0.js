class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length;
        let left = [];
        left[0] = 1;
        let right = [];
        right[n - 1] = 1;
     //   let prodcut;
        let result = [];

        for (let i = 1; i < nums.length; i++) {
            left[i] = left[i - 1] * nums[i - 1];
        }
        for (let i = n - 2; i >= 0; i--) {
            right[i] = right[i + 1] * nums[i + 1];
        }
        for (let i = 0; i < nums.length; i++) {
            result.push(left[i] * right[i]);
        }
        return result;
    }
}
