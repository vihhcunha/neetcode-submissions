class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const result: number[] = Array(temperatures.length).fill(0); 
        const monotonicStack: number[] = [];

        for (let i = 0; i <= temperatures.length - 1; i++) {
            while (monotonicStack.length > 0 && temperatures[i] > temperatures[monotonicStack[monotonicStack.length - 1]]) {
                result[monotonicStack[monotonicStack.length - 1]] = i - monotonicStack[monotonicStack.length - 1];
                monotonicStack.pop();
            }
            monotonicStack.push(i);
        }

        return result;
    }
}
