class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let final = []; // 
        let keyVal = []; // create ab 
        let mp = new Map();
        for (let i = 0; i < nums.length; i++) {
            let key = nums[i];
            mp.set(key, (mp.get(key) || 0) + 1);
        }
        for (const [key, val] of mp) {
            keyVal.push([key, val]);
        }
        keyVal.sort((a, b) => b[1] - a[1]);
           for (let i = 0; i < k ; i++){
            final.push(keyVal[i][0]);
           }
   return final;
    }
}
