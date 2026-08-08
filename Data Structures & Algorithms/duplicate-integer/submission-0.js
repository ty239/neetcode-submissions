class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let st= new Set;
       for ( let i =0; i < nums.length; i++){
     let key = nums[i];

     if (st.has(key)){
             return true;
}else{
      st.add(key)
}

}
   return false;
  }
}
