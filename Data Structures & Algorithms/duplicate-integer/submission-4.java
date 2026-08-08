
class Solution {

    public boolean hasDuplicate(int[] nums) {

        HashMap<Integer, Integer> mp = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {

            int key = nums[i];

            mp.put(key, mp.getOrDefault(key, 0) + 1);
        }

        for (Integer key : mp.keySet()) {

            if (mp.get(key) > 1) {
                return true;
            }
        }

        return false;
    }
}