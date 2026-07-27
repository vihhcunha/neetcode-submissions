class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const mapS = new Map<string, number>();
        const mapT = new Map<string, number>();

        if (s.length != t.length)
            return false;

        var i = 0;
        while (i <= s.length - 1){
            var countS = mapS.has(s[i]) ? mapS.get(s[i]) + 1 : 1;
            mapS.set(s[i], countS);

            var countT = mapT.has(t[i]) ? mapT.get(t[i]) + 1 : 1;
            mapT.set(t[i], countT);

            i++;
        }

        for (const [key, value] of mapS) {
            if (!mapT.has(key) || mapT.get(key) != value)
                return false;
        }
        return true;
    }
}
