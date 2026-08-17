class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let max = 0;
        let width = 0;
        let height = 0;
        while (left <= right) {
            width = right - left;
            height = Math.min(heights[right], heights[left]);
            max = Math.max(width * height, max);

            if (heights[left] <= heights[right]){
                left++;
            }else{
                right--;
            }
        }
        return max;
    }
}
