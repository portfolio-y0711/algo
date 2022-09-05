package id.algo

class Solution_263 {
    fun isUgly(num: Int): Boolean {
        if (num < 1) return false
        var dividend = num
        while (dividend > 1) {
            dividend /= if (dividend % 2 == 0) {
                2
            } else if (dividend % 3 == 0) {
                3
            } else if (dividend % 5 == 0) {
                5
            } else {
                return false
            }
        }
        return true
    }
}