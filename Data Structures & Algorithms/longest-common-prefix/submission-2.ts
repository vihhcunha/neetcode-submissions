class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        if (strs.length == 1){
            return strs[0];
        }
        let result = "";

        strs.sort();
        let firstWord = strs[0];
        let lastWord = strs[strs.length - 1];
        let smaller = Math.min(firstWord.length, lastWord.length);

        for (let i = 0; i <= smaller - 1; i++) {
            if (firstWord[i] != lastWord[i]) {
                break;
            }
            result += firstWord[i];
        }
        return result;
    }
}
