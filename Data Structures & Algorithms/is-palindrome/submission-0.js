class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        let toal = s.split("");
        let compare = toal.length - 1;

        for (let i = 0; i < toal.length / 2; i++) {
            if (toal[i] !== toal[compare]) {
                return false;
            }

            compare--;
        }

        return true;
    }
}