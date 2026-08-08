class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
  let map1 = new Map();
  let map2 = new Map();
if (s.length !== t.length) return false;
for (let i = 0 ; i < s.length; i++){
let key = s[i];

map1.set(key, (map1.get(key) || 0 ) + 1); // its either we add 0 or we add deping on how man

}
for (let j = 0 ;  j < t.length; j++){
let key2 = t[j];

map2.set(key2,(map2.get(key2) || 0 ) + 1);

}

for (const [keys,val] of map2){
    if (!map1.has(keys) || map1.get(keys) !== val){
        return false;
    }
}
     return true; 
}

}
  
    