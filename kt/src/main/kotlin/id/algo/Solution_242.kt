
class Solution_242 {
    fun isAnagram(s: String, t: String): Boolean {
        return s.toList().sorted() == t.toList().sorted()
    }
}

