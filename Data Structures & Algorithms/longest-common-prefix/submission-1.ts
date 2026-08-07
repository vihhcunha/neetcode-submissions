class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        let result: string = "";
        let sortedStrs = strs.sort();
        let firstWord = sortedStrs[0];
        let lastWord = sortedStrs[strs.length - 1];
        let smallerLength = Math.min(firstWord.length, lastWord.length);

        for (let i = 0; i <= smallerLength - 1; i++) {
            if (firstWord[i] != lastWord[i]) {
                break;
            }
            result = result + firstWord[i];
        }
        return result;
    }
}
