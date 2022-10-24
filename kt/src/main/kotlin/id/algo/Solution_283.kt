package id.algo

class Solution_283 {
    fun moveZeroes(nums: IntArray): Unit {
        var cursor = 0
        for(i in nums.indices) {
            if(nums[i] != 0) {
                nums[cursor++] = nums[i]
            }
        }
        for (j in cursor until nums.size) {
            nums[j] = 0
        }
    }
}
