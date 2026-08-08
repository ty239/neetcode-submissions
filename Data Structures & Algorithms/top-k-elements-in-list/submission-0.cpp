class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        vector<int>result; //
         unordered_map<int , int>mp;                  // create a map
            for (int i : nums){ // store the key 
                           // set the value
             mp[i]++; 
        }                        // loop throught array 
    vector<vector<int>> vec;               
    for (auto& i : mp){
   vec.push_back({i.first,i.second});
    
 }

    sort(vec.begin(),vec.end(),[](const vector<int>& a, const vector<int>& b)
    {
    return a[1] > b[1];
    });                       //  store the value,key 2d array
     for (int i = 0; i < k; i++){
       result.push_back(vec[i][0]); 
     }                      

return result;

    }

};
