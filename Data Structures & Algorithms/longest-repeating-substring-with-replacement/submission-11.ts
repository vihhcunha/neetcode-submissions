class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let maxSubstring = 0;
        let maxFrequency = 1;
        const charMap = new Map<string, number>();

        let i = 0;
        let j = 0;

        while (j <= s.length - 1) {
            let count = charMap.get(s[j]) ?? 0;
            count++;
            charMap.set(s[j], count);
            let windowSize = (j - i) + 1;
            maxFrequency = Math.max(maxFrequency, count);
            let neededReplacementes = windowSize - maxFrequency;

            while (neededReplacementes > k) {
                let count = charMap.get(s[i]);
                count--;
                charMap.set(s[i], count);
                i++;
                windowSize = (j - i) + 1;
                neededReplacementes = windowSize - maxFrequency;
            }
            maxSubstring = Math.max(maxSubstring, windowSize);
            j++;
            
        }
        return maxSubstring;
    }
}
