class VersionControl {
  def isBadVersion(version: Int): Boolean = {
    version match {
      case 3 => false
      case 5 => true
      case 4 => true
      case _ => throw new Exception("")
    }
  }
}

class Solution_278 extends VersionControl {
  def firstBadVersion(n: Int): Int = {
    var left = 1
    var right = n
    while (left < right) {
      val mid = left + (right - left) / 2
      if (isBadVersion(mid)) {
        right = mid
      } else {
        left = mid + 1
      }
    }
    left
  }
}

