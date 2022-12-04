package id.algo

class Solution_434 {
    //    fun countSegments(s: String): Int {
//        val trimmed = s.trim()
//        if (trimmed == "") {
//            return 0
//        }
//        return trimmed.split(Regex("\\s+")).size
//    }
    fun countSegments(s: String): Int {
        var count = 0
        for (i in 0 until s.toCharArray().size) {
            if (s[i] !== ' ' && (i == 0 || s[i - 1] == ' ')) {
                count++
            }
        }
        return count
    }
}