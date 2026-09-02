class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const charMapS = new Map<string, number>();
        const charMapT = new Map<string, number>();

        if (s.length != t.length) {
            return false;
        }

        for (let i = 0; i <= s.length - 1; i++) {
            let charCountS = (charMapS.get(s[i]) ?? 0) + 1;
            charMapS.set(s[i], charCountS);

            let charCountT = (charMapT.get(t[i]) ?? 0) + 1;
            charMapT.set(t[i], charCountT);
        }

        for (let [key, countS] of charMapS.entries()) {
            let countT = charMapT.get(key) ?? 0;
            if (countT == 0 || countT != countS){
                return false;
            }
        }
        return true;
    }
}
