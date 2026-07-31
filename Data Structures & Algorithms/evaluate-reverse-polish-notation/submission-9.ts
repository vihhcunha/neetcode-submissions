class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stackCalc: number[] = [];
        let result = null;

        for (let i = 0; i <= tokens.length -1; i++){
            const token = tokens[i];
            if (!isNaN(Number(token))){
                stackCalc.push(Number(token));
                continue;
            }
            const b = stackCalc.pop();
            const a = stackCalc.pop();
            if (token === "+")
                result = a + b;
            else if (token === "-")
                result = a - b;
            else if (token === "*")
                result = a * b;
            else 
                result = Math.trunc(a / b);
            stackCalc.push(result);
        }
        return stackCalc.pop();
    }
}