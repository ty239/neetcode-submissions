class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let mp = new Map();

        for (let i = 0; i < strs.length; i++) {
            let word = strs[i];
            let key = word.split("").sort().join("");

            if (!mp.has(key)) {
                // if the map does not have that key
                mp.set(key, []); // key:val   act:[] key is == 
            }
    
            mp.get(key).push(word);// // and push all the words like act opst 
    }                                 
            return Array.from(mp.values()); // gets all the values of map 
        
    }
}
