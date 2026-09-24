class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
    let charactersToReplace;
    let maxVal = 0;
    let left = 0;
    let longest = 0;
    let mp = new Map();

    for (let right = 0; right < s.length; right++) {

        let key = s[right];

        // Add character to Map
        mp.set(key, (mp.get(key) || 0) + 1);

        // Highest frequency
        maxVal = Math.max(maxVal, mp.get(key));

        // How many replacements do we need?
        charactersToReplace = (right - left + 1) - maxVal;

        // Window is invalid
        while (charactersToReplace > k) {
            mp.set(s[left], mp.get(s[left]) - 1);
            left++;

            charactersToReplace = (right - left + 1) - maxVal;
        }

        // Window is valid
        longest = Math.max(longest, right - left + 1);
    }

    return longest;
}
}
