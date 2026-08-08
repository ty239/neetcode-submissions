class Solution {
    hasDuplicate(nums) {
        let mp2 = new Map();

        for (let num of nums) {
         
            mp2.set(num, (mp2.get(num) || 0) + 1);

           
            if (mp2.get(num) > 1) {
                return true;
            }
        }

        return false;
    }
}