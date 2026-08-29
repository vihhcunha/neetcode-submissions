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

        let result = 0;
        let lastValue = 0;

        for (let i = s.length - 1; i >= 0; i--) {
            let char = s[i];
            let value = romanMap.get(char);

            if (value < lastValue){
                result = result - value;
            }
            else {
                result = result + value;
            }

            lastValue = value;
        }

        return result;
    }
}
