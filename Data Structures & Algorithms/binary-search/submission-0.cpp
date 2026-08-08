class Solution {
   public:
    int search(vector<int>& nums, int target) {
        // loop through the array
        // if the num[i] == target
        // return i
        // else -1
        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] == target) {
                return i;
            }
        }
        return -1;
    }
};
