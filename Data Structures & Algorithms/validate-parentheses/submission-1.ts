class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack: string[] = [];
        const bracketsMap = new Map<string, string>([
            [ "(", ")" ],
            [ "{", "}" ],
            [ "[", "]" ]
        ]);

        for (let value of s) {
            if (bracketsMap.has(value)){
                stack.push(value);
                continue;
            }
            let correspondingBracket = [...bracketsMap].find(([key, val]) => val == value);
            if (correspondingBracket[0] == stack[stack.length - 1]){
                stack.pop();
                continue;
            }
            return false;
        }
        return stack.length == 0;
    }
}




