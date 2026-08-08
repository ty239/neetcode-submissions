class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
       let currentProfit;
        let max = 0;
        // let arr = [];
    for (let buy = 0; buy < prices.length;buy++){ //loop through prices i = buy
   for (let sell = buy + 1; sell < prices.length;sell++ ){
     currentProfit = prices[sell] - prices[buy];
     max = Math.max(currentProfit, max);
   
    
   }                                                
  
    }
    return max;
    }
}
