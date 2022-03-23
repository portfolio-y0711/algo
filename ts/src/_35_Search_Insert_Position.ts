function searchInsert(nums: number[], target: number): number {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i
        } else if (target > nums[i] && target <= nums[i + 1]){
            return i + 1
        }
    }
    if (target < nums[0]) {
        return 0
    } else if (target > nums[nums.length -1]) {
        return nums.length
    } else {
        return -1
    }
}

console.log(searchInsert([1], 1))