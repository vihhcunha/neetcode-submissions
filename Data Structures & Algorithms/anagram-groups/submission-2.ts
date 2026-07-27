class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const mapA = new Map<string, string[]>();
        for (let i = 0; i <= strs.length - 1; i++){
            const alphabeticalVector = Array(26).fill(0);
            for (let j = 0; j <= strs[i].length - 1; j++){
                const index = strs[i][j].charCodeAt(0) - "a".charCodeAt(0);
                alphabeticalVector[index] += 1;
            }
            var key = alphabeticalVector.join("#");
            var wordList = mapA.get(key) ?? [];
            wordList.push(strs[i]);
            mapA.set(key, wordList);
        }
        return [...mapA.values()];
    }
}
