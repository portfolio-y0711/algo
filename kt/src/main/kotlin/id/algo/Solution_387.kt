package id.algo

class Solution_387 {
    fun firstUniqChar(s: String): Int {
        val charCounts = IntArray(26)
        for (char in s) {
            charCounts[char - 'a']++
        }
        for (i in 0..s.length - 1) {
            if (charCounts[s[i] - 'a'] == 1) return i
        }
        return -1
    }
}