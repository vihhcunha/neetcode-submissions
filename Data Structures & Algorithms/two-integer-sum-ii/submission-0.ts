class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let i = 0;
        let j = numbers.length - 1;

        while (i < j){
            let result = numbers[i] + numbers[j];
            if (result == target)
                return [i + 1, j + 1];
            
            if (result > target)
                j--;
            else
                i++;
        }
    }
}
