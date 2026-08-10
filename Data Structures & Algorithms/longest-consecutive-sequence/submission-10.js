class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let newArray = [];
        let counter = 0;
        let compare = 1;
        let right = 0 ;
        let newArr = new Set();
        //[2,20,4,10,3,4,5]   2 , 3 ,4 , 4 , 5, 10, 20
        for (let i = 0; i < nums.length; i++) {
            newArr.add(nums[i]); // push the array in a hasSet
        }
        
        for (const value of newArr) {
    if (newArr.has(value - 1)) {
    continue; // skip — this isn't a start, something smaller exists
}
    // value IS a start — now count upward
    let length = 1;
    let current = value;
    
    while (newArr.has(current +1)) {
      current += 1;
      length += 1;
    }
 counter =  Math.max(length,counter);
    // compare length to your overall max
}

   
       return counter ;
    }
}
