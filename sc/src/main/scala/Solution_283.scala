class Solution_283 {
  def moveZeroes(nums: Array[Int]): Unit = {
    var cursor = 0
    for (i <- nums.indices) {
      if (nums(i) != 0) {
        nums(cursor) = nums(i)
        cursor += 1
      }
    }
    for {
      j <- cursor until nums.length
    } nums(j) = 0
//    println(nums.map(_.toInt).toList)
  }
}
