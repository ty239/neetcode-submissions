class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
maxProfit(prices) {
let answer = 0 ;
let maxWin = 0 ;
let currentMax = 0 ;

for ( let buy = 0 ; buy < prices.length ; buy++){
for (let sell = buy + 1 ; sell < prices.length ; sell++){

let answer = prices[sell] - prices[buy] ; 
console.log(currentMax) ;
maxWin = Math.max(answer, maxWin) ;

}
}
return maxWin ;
}

        
    }

