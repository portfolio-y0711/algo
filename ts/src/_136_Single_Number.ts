function singleNumber(nums: number[]): number | undefined {
    const numCountMap: Record<number, number> = {}
    for(let i = 0; i < nums.length; i++) {
        const count = numCountMap[nums[i]] ? numCountMap[nums[i]] : 0
        numCountMap[nums[i]] = count + 1
    }
    return Object.entries(numCountMap).reduce((prev, [key, val]) => (val === 1) ?  parseInt(key): prev, -1)
}

console.log(singleNumber([4,1,2,1,2]))
