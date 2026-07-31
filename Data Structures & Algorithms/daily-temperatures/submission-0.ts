class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const result: number[] = [];

        for (let i = 0; i <= temperatures.length - 1; i++){
            let nDays = 0; 
            for (let j = i + 1; j <= temperatures.length - 1; j++){
                if (temperatures[i] < temperatures[j]){
                    nDays = j - i;
                    break;
                }
            } 
            result.push(nDays);
        }
        return result;
    }
}
