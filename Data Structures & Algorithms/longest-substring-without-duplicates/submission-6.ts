class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        if (s == "") 
            return 0;

        let maxCount = 1;
        let charSet = new Set<string>();

        let i = 0;
        let j = 1;
        charSet.add(s[0]);

        while (j <= s.length - 1){
            while (charSet.has(s[j])){
                charSet.delete(s[i]);
                i++;
            }
            charSet.add(s[j]);
            if ((j - i) + 1 > maxCount)
                maxCount = j - i + 1;
            j++;
        }
        return maxCount;
    }
}
