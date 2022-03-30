function climbStairs(n: number): number {
   const stairs = [] 
   stairs[0] = 1
   stairs[1] = 1
   for (let i = 2; i <= n; i++) {
        stairs[i] = stairs[i -2]  + stairs[i - 1]
   }
   return stairs[n]
}