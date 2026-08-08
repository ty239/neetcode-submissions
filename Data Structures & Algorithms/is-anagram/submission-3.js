class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
isAnagram(s, t) {
   if (s.length !== t.length)return false;        //check the length
              
    let mp = new Map();
    let sMp = new Map();

for(let i =0; i < s.length;i++){
let key = s[i]
mp.set( key  ,  (mp.get(key) || 0) + 1 );

}
  for(let i =0; i <t.length;i++){
     let secondKey= t[i];
     sMp.set(secondKey ,  (sMp.get(secondKey) || 0) +1)
}
for (let [keys,val]of mp){
    if (sMp.get(keys) !== val){
        return false
    }
}
return true;
    }
    
}