class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        let prefix = strs[0];
        for (let i = 1; i <= strs.length - 1; i++) {
            let j = 0;
            while (j < Math.min(prefix.length, strs[i].length)) {
                if (prefix[j] != strs[i][j]) {
                    break;
                }
                j++;
            }
            prefix = prefix.slice(0, j);
        }
        return prefix;
    }
}
