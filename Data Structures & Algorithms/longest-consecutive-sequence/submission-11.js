class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let newArray = [];
        let counter = 0;
        let compare = 1;
        let right = 0;
        let newArr = new Set(nums);

        for (const value of newArr) {
            if (newArr.has(value - 1)) {
                continue; // skip — this isn't a start, something smaller exists
            }
            // value IS a start — now count upward
            let length = 1;
            let current = value;

            while (newArr.has(current + 1)) {
                current += 1;
                length += 1;
            }
            counter = Math.max(length, counter);
            // compare length to your overall max
        }

        return counter;
    }
}
