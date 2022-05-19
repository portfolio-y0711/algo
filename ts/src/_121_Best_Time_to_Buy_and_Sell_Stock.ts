function maxProfit(prices: number[]): number {
  const [,maxProfit] = prices.reduce((minmax, currPrice) => {
    let [min, max] = minmax
    if (currPrice < min) {
      min = currPrice
    } else if (currPrice - min > max)
      max = currPrice - min 
    return [min, max]
  }, [Infinity, 0])
  return maxProfit
}
