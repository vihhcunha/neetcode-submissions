class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const result: number[] = Array(temperatures.length).fill(0);

        if (temperatures.length == 1)
            return [0];

        let i = temperatures.length - 2;
        let j = 1;
        while (i >= 0){
            if (j >= temperatures.length - 1){
                j = 1;
                i--; 
                continue;
            }

            if (temperatures[i + j] > temperatures[i]){
                result[i] = j;
                i--;
                j = 1;
                continue;
            }
            j++;     
        }
        return result;
    }
}
