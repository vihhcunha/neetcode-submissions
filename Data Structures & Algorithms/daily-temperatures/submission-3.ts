class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const result: number[] = Array(temperatures.length).fill(0);
        const pendingStack: number[] = [];

        if (temperatures.length == 1)
            return [0];

        for (var i = 0; i <= temperatures.length - 1; i++){
            while (pendingStack.length > 0 && temperatures[i] > temperatures[pendingStack[pendingStack.length - 1]]){
                let index = pendingStack.pop();
                result[index] = i - index;
            }

            pendingStack.push(i);
        }
        return result;
    }
}
