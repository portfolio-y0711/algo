package id.algo

class Solution_258 {
    fun addDigits(num: Int): Int {
        var sum = num

        if (num < 10) {
            return num
        }

        while (sum >= 10) {
            sum = (sum / 10) + (sum % 10)
        }
        return sum
    }
}