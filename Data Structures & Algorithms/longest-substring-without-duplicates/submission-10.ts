class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        if (s == "") {
            return 0;
        }
        let set = new Set<string>();
        let i = 0;
        let j = 1;
        set.add(s[i]);
        let max = 1;

        while (j < s.length) {
            if (set.has(s[j]) == false) {
                set.add(s[j]);
                j++;
                max = Math.max(max, j - i);
                continue;
            }

            set.delete(s[i]);
            i++;
        }
        return max;
    }
}
