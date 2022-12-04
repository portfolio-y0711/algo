package id.algo

class Solution_441 {
    fun arrangeCoins(n: Int): Int {
        var num = n
        var count = 0
        for (i in 1..n) {
            if (num >= i) {
                count++
                num -= i
            } else {
                break
            }
        }
        return count
    }
}