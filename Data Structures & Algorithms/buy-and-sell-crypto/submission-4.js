class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let biggesDriffence = 0;
        let driffence = 0;
        for (let buy = 0; buy < prices.length; buy++) {
            for (let sell = buy + 1; sell < prices.length; sell++) {
                driffence = prices[sell] - prices[buy];
                biggesDriffence = Math.max(driffence, biggesDriffence);
            }
        }
        if (0 > biggesDriffence){
            return 0;
        }
        return biggesDriffence;
    }
}
