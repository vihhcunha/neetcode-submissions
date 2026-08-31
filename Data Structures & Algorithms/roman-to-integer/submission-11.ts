class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    romanToInt(s: string): number {
        const map = new Map<string, number>([
            [ "I", 1 ],
            [ "V", 5 ],
            [ "X", 10 ],
            [ "L", 50 ],
            [ "C", 100 ],
            [ "D", 500 ],
            [ "M", 1000 ]
        ]);

        let lastValue = 0;
        let result = 0;

        for (let i = s.length - 1; i >= 0; i--) {
            let value = map.get(s[i]);

            if (value < lastValue) {
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
