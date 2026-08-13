class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        let map = new Map<string, { sCount: number, tCount: number }>();
        if (s.length != t.length) 
            return false;

        for (let i = 0; i <= s.length - 1; i++) {
            let countS = map.get(s[i]) ?? { sCount: 0, tCount: 0 };
            countS.sCount = countS.sCount + 1;
            map.set(s[i], countS);

            let countT = map.get(t[i]) ?? { sCount: 0, tCount: 0 };
            countT.tCount = countT.tCount + 1;
            map.set(t[i], countT);
        }

        for (let [char, count] of map.entries()) {
            if (count.sCount != count.tCount){
                return false;
            }
        }
        return true;
    }
}
