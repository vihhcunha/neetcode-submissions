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

            if (this.canEatBelowH(piles, middle, h) == true) {
                right = middle - 1;
                smaller = middle < smaller ? middle : smaller;
            }
            else {
                left = middle + 1;
            }
        }
        return smaller;
    }

    canEatBelowH(piles: number[], k: number, h: number): boolean {
        let hours = 0;
        for (let pile of piles) {
            hours = hours + Math.ceil(pile / k);
        }
        return hours <= h;
    }
}
