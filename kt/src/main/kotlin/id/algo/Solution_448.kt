package id.algo

class Solution_448 {
    fun findDisappearedNumbers(nums: IntArray): List<Int> {
        val indexArr = IntArray(nums.size) { 0 }
            .also {
                for (i in nums) {
                    it[i - 1] = 1
                }
            }
        val result = mutableListOf<Int>()
            .also {
                for (i in indexArr.indices) {
                    if (indexArr[i] == 0) it.add(i + 1)
                }
            }
        return result
    }
}