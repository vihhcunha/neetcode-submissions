class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maxProfit = 0;
        let i = 0;
        let j = i + 1;
        let minPrice = { val: prices[i], index: 0 };

        while (i <= prices.length - 2 && j <= prices.length - 1){
            if (prices[i] < prices[j]) {
                let res = prices[j] - prices[i];
                if (res > maxProfit)
                    maxProfit = res;
            }
            if (minPrice.val > prices[j]) {
                minPrice.val = prices[j];
                minPrice.index = j;
                i = minPrice.index;
            }
            
            j++;           
        }
        return maxProfit;
    }
}
