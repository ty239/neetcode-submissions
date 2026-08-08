class Solution {
    hasDuplicate(nums) {
        let mp2 = new Map();

        for (let num of nums) {
            // 1. Safely increment the count for this number
            mp2.set(num, (mp2.get(num) || 0) + 1);

            // 2. Check if the tally has reached 2 (meaning it's a duplicate)
            if (mp2.get(num) > 1) {
                return true;
            }
        }

        return false;
    }
}