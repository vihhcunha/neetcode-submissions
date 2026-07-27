class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const result: string[][] = [];

        const mapA = new Map<string, string[]>();
        for (let i = 0; i <= strs.length - 1; i++){
            var orderedWord = strs[i].split('').sort().toString();
            var wordList = mapA.get(orderedWord) ?? [];
            wordList.push(strs[i]);
            mapA.set(orderedWord, wordList);
        }
        return [...mapA.values()];
    }
}
