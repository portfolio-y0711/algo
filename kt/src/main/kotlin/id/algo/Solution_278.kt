package id.algo

class Solution_278 : VersionControl() {
    fun firstBadVersion(n: Int): Int {
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
        return left
    }
}

open class VersionControl {
    fun isBadVersion(version: Int) : Boolean {
        return when (version) {
            3 -> false
            5 -> true
            4 -> true
            else -> throw Exception("")
        }
    }
}


