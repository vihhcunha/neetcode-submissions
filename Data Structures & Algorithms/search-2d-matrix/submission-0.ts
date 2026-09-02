class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let left = 0;
        let right = matrix.length - 1;

        while (left <= right) {
            let middle = Math.floor((left + right) / 2);

            if (matrix[middle][0] > target){
                right = middle - 1;
            }
            else if (matrix[middle][matrix[middle].length - 1] < target){
                left = middle + 1;
            }
            else {
                return this.binarySearch(matrix[middle], target);
            }
        }
        return false;
    }

    binarySearch(array: number[], target: number): boolean {
        let left = 0;
        let right = array.length - 1;

        while (left <= right) {
            let middle = Math.floor((left + right) / 2);
            if (array[middle] > target) {
                right = middle - 1;
            }
            else if (array[middle] < target) {
                left = middle + 1;
            }
            else {
                return true;
            }
        }
        return false;
    }
}
