package id.algo

class Solution_349 {
    fun intersection(nums1: IntArray, nums2: IntArray): IntArray {
        return nums1
            .filter { it ->
                nums2.contains(it)
            }
            .distinct()
            .toIntArray()
    }
}