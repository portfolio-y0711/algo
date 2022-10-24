class Solution_349 {
  def intersection(nums1: Array[Int], nums2: Array[Int]): Array[Int] = {
    nums1.filter {
      it => nums2.contains(it)
    }.distinct
  }
}
