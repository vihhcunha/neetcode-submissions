class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        let map = new Map<string, number>();
        if (s.length != t.length) 
            return false;

        for (let i = 0; i <= s.length - 1; i++) {
            let count = map.get(s[i]) ?? 0;
            count++;
            map.set(s[i], count);

            count = map.get(t[i]) ?? 0;
            count--;
            map.set(t[i], count);
        }

        for (let [char, count] of map.entries()) {
            if (count != 0){
                return false;
            }
        }
        return true;
    }
}
