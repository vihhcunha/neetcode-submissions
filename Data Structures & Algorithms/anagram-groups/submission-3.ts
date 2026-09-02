class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, string[]>();
        for (let word of strs) {
            const array = Array(26).fill(0);
            for (let char of word) {
                array[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            let key = array.join(',');
            let existing = map.get(key) ?? [];
            existing.push(word);
            map.set(key, existing);
        }
        return Array.from(map.values());
    }
}
