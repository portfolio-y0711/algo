package id.algo

class Solution_268 {
    fun missingNumber(nums: IntArray): Int {
        val map = HashMap<Int, Int>(nums.size)
            .apply {
                for (i in 0..nums.size) {
                    this[i] = 0
                }
            }
            .apply {
                for (i in nums) {
                    this[i] = this.getOrDefault(i, 0) + 1
                }
            }
        println(map)
        for (entry in map.entries.iterator()) {
            if (entry.value == 0)  {
                return entry.key
            }
        }
        return -1
    }
}