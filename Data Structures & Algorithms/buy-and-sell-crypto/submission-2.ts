class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maxProfit = 0;
        let i = 0;

        while (i <= prices.length - 2){
            let j = i + 1;
            while (j <= prices.length - 1){
                if (prices[j] <= prices[i]){
                    j++;
                    continue;
                }
                
                let res = prices[j] - prices[i];
                if (res > maxProfit){
                    maxProfit = res;
                }
                j++;
            }
            i++;
        }
        return maxProfit;
    }
}
