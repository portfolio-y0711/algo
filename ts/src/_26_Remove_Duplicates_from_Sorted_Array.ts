
function removeDuplicates_1(nums: number[]): number {
    if (nums.length === 1) return 1
    let duplicate = -101
    let cursor = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if (nums[j] > duplicate) {
                duplicate = nums[i] = nums[j]
                cursor++
                break
            }
        }
    }
    return cursor 
}

function removeDuplicates_2(nums: number[]): number {
    if (nums.length === 1) return 1
    let len = nums.length
    let prev = -101
    for (let i = 0; i < len; i++) {
        let curr = nums.shift() 
        if (curr! > prev) {
            nums.push(curr!)
            prev = curr!
        }
    }
    return nums.length 
}

function removeDuplicates_3(nums: number[]): number {
    if (nums.length === 1) return 1
    let len = nums.length
    let prev = -101
    for (let i = len - 1; i >= 0; i--) {
        if (nums[i] === prev) {
            nums.splice(i, 1)
        }
        prev = nums[i]
    }
    return nums.length 
}
