function maxProfit(prices: number[]): number {
  let minSoFar = Number.MAX_SAFE_INTEGER;
  let maxProfit = 0;
  prices.forEach((p) => {
    if (p < minSoFar) {
      minSoFar = p;
    }
    const todayProfit = p - minSoFar;
    if (todayProfit > maxProfit) {
      maxProfit = todayProfit;
    }
  });

  return maxProfit;
}
