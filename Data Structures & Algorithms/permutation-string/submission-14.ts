class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        const charMap = new Map<string, number>();
        const windowCharMap = new Map<string, number>();
        const windowSize = s1.length;
        let matches = 0;

        for (let char of s1) {
            charMap.set(char, (charMap.get(char) ?? 0) + 1);
        }
        let i = 0;
        let j = 0;
        while (j <= s2.length - 1) {
            let charCount = charMap.get(s2[j]);
            if (charCount != null)
            {
                let windowCharCount = windowCharMap.get(s2[j]) ?? 0;
                if (windowCharCount == charCount){
                    matches--;
                }
                windowCharCount++;
                if (windowCharCount == charCount){
                    matches++;
                }
                windowCharMap.set(s2[j], windowCharCount);
            }

            if (matches == charMap.size && j - i == windowSize - 1)
                return true;
            
            if (j - i >= windowSize - 1) {
                let windowCharCount = windowCharMap.get(s2[i]);
                if (windowCharCount != null){
                    if (charMap.get(s2[i]) == windowCharCount) {
                        matches--;
                    }
                    windowCharCount--;
                    if (charMap.get(s2[i]) == windowCharCount) {
                        matches++;
                    }   

                    if (windowCharCount == 0)
                        windowCharMap.delete(s2[i]);
                    else
                        windowCharMap.set(s2[i], windowCharCount);

                }
                i++;
            }
            j++;
        }

        return false;
    }
}
