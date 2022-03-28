function maxSubArray(nums: number[]): number {
    let result = -10000
    let sum = 0
  
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i]
  
      if (sum > result) {
        result = sum;
      }
  
      if (sum < 0) {
        sum = 0
      }
    }
    return result;
}

