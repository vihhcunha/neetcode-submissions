class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let maxSubstring = 0;
        const charMap = new Map<string, number>();

        let i = 0;
        let j = 0;
        charMap.set(s[j], 1);

        while (j <= s.length - 1) {
            let maxCharCount = this.getMostFrequentCharCount(charMap);
            let windowSize = (j - i) + 1;
            let neededReplacementes = windowSize - maxCharCount;

            if (neededReplacementes <= k) {
                j++;
                let count = charMap.get(s[j]) ?? 0;
                count++;
                charMap.set(s[j], count);
                maxSubstring = Math.max(maxSubstring, windowSize);
            }
            else {
                let count = charMap.get(s[i]);
                count--;
                charMap.set(s[i], count);
                i++;
            }
        }
        return maxSubstring;
    }

    getMostFrequentCharCount(map: Map<string, number>): number {
        let maxCount = 0;
        for (let [char, count] of map.entries()) {
            maxCount = Math.max(count, maxCount);
        }
        return maxCount;
    }
}
