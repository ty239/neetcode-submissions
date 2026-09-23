class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";

        for (const str of strs) {
            res += str.length + "#" + str;
        }

        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        let i = 0;

        while (i < str.length) {
            let j = i;

            // Find the separator after the length.
            while (str[j] !== "#") {
                j++;
            }

            const length = Number(str.slice(i, j));
            j++; // Skip '#'

            res.push(str.slice(j, j + length));

            i = j + length;
        }

        return res;
    }
}
