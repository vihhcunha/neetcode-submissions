class Solution {
    /**
     * @param {number} x
     * @return {boolean}
     */
    isPalindrome(x: number): boolean {
        let text = x.toString();
        let backward = "";
        for (let i = text.length - 1; i >= 0; i--){
            backward = backward + text[i];
        }
        return text == backward;
    }
}
