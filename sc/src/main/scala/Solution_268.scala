object Solution_268 {
  def missingNumber(nums: Array[Int]): Int = {
    var map = (0 to nums.size).map(e => (e, 0)).toMap
    for (i <- nums) {
      map = map.updated(i, map.getOrElse(i, 0) + 1)
    }
    for (entry <- map) {
      if (entry._2 == 0) {
        return entry._1
      }
    }
    -1
  }
}
