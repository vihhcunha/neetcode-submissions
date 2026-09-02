class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const map = new Map<string, string>([
            [")","("],
            ["}","{"],
            ["]","["]
        ]);
        const stack = [];

        for (let i = 0; i <= s.length - 1; i++) {
            let opening = map.get(s[i]);
            if (opening != null) {
                let lastParenthes = stack.pop();
                if (lastParenthes != opening){
                    return false;
                }
                continue;
            }
            stack.push(s[i]);
        }
        return stack.length == 0;
    }
}




