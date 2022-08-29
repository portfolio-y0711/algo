package id.algo

class Solution_231 {
    fun isPowerOfTwo(n: Int): Boolean {
        if (n < 1) return false
        var dividend = n
        while (dividend > 1) {
            if (dividend % 2 == 0) {
                dividend /= 2
            } else {
                return false
            }
        }
        return true
    }
}