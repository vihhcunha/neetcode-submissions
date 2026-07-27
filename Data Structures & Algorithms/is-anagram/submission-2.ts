class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const map = new Map<string, number>();

        if (s.length != t.length)
            return false;

        var i = 0;
        while (i <= s.length - 1){
            map.set(s[i], (map.get(s[i]) ?? 0) + 1);
            map.set(t[i], (map.get(t[i]) ?? 0) - 1);

            i++;
        }

        for (const [key, value] of map) {
            if (value != 0)
                return false;
        }
        return true;
    }
}
