class Solution_387 {
  def firstUniqChar(s: String): Int = {
    val charsCounts = Array.fill[Int](26)(0)
    for (ch <- s) {
      charsCounts(ch - 'a') += 1
    }
    for (i <- 0 until s.length - 1) {
      if (charsCounts(s(i) - 'a') == 1) return i
    }
    -1
  }
}
