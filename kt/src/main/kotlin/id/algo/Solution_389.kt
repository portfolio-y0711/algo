package id.algo

class Solution_389 {
    fun findTheDifference(s: String, t: String): Char {
        val mapCountByCharOfS = s.groupingBy { it }.eachCount()
        val mapCountByCharOfT = t.groupingBy { it }.eachCount()
        return mapCountByCharOfT
            .entries
            .first { (k, v) -> mapCountByCharOfS[k] != v }
            .key
    }
}