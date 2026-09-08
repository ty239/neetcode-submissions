class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        //  nums.sort((a, b) => a - b);
        let left = 0;
        let right = nums.length - 1;
        let mid;

        while (left <= right) {
            mid = Math.floor((left + right) / 2);
            console.log(mid);
            if (nums[mid] === target) return mid;
            if (target === nums[right] ) return right;
            if (target === nums[left] ) return left;
            if (target > nums[mid]) {
                right--;
                mid = target + 1 ;
            } else {
                mid = target - 1 ;
                left++;
            }
        }
        return -1 ;
    }
}
