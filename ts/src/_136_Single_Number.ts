function singleNumber(nums: number[]): number | undefined {
    const numCountMap: Record<number, number> = {}
    for(let i = 0; i < nums.length; i++) {
        const count = numCountMap[nums[i]] ? numCountMap[nums[i]] : 0
        numCountMap[nums[i]] = count + 1
    }
    return Object.keys(numCountMap).filter((key) => numCountMap[key as any] === 1) as unknown as number
}
