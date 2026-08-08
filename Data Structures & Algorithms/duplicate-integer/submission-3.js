class Solution {
    hasDuplicate(nums) {


    let mp = new Map();
    for (let i = 0; i < nums.length; i++) {
        let key = nums[i];
        mp.set(key, (mp.get(key) || 0) + 1);
       
    }

    for (let [keys, val] of mp) {
        if (val > 1) {
            return true;
         
        }
      
    }
   return false;
    }
}
