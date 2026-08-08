
class Solution {
    public boolean hasDuplicate(int[] nums) {
        int key = 0;
        HashMap<Integer, Integer> mp = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            key = nums[i];
            if(mp.containsKey(key)){
                return true;
            }
            mp.put(key,1) ;
        }
        return false;
    }
}