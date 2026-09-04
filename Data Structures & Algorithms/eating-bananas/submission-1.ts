class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let right = Math.max(...piles);
        let left = 1;
        let smaller = right;
        while (left <= right) {
            let middle = Math.floor((left + right) / 2);
            let hours = 0;
            for (let pile of piles) {
                hours = hours + Math.ceil(pile / middle);
            }
            if (hours <= h) {
                right = middle - 1;
                smaller = middle < smaller ? middle : smaller;
            }
            else {
                left = middle + 1;
            }
        }
        return smaller;
    }
}
