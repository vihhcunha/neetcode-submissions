class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maxProfit = 0;
        let i = 0;
        let j = i + 1;

        while (i <= prices.length - 2 && j <= prices.length - 1){
            if (i == j){
                j++;
                continue;
            }
            if (prices[i] > prices[j]){
                i++;
                continue;
            }
            let res = prices[j] - prices[i];
            if (res > maxProfit)
                maxProfit = res;
            
            if (prices[i] > prices[i+1])
                i++;
            else
                j++;
            
        }
        return maxProfit;
    }
}
