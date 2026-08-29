class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    romanToInt(s: string): number {
        const romanMap: Map<string, number> = new Map([
            ["I", 1],
            ["V", 5],
            ["X", 10],
            ["L", 50],
            ["C", 100],
            ["D", 500],
            ["M", 1000]
        ]);
        const stack = [];

        for (let char of s) {
            stack.push(char);
        }

        let result = 0;
        let lastValue = 0;

        while (stack.length > 0) {
            let char = stack[stack.length - 1];
            let value = romanMap.get(char);

            if (value < lastValue){
                result = result - value;
            }
            else {
                result = result + value;
            }

            lastValue = value;
            stack.pop();
        }

        return result;
    }
}
