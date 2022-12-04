package id.algo

class Solution_459 {
//    fun repeatedSubstringPattern(s: String): Boolean {
//        val str = s.plus(s)
//        return str.substring(1, str.length - 1).contains(s)
//    }

    fun repeatedSubstringPattern(s: String): Boolean {
        for (i in 1..s.length / 2) {
           if (s.length % i == 0 && s.replace(s.substring(0, i), "").isEmpty())  {
               return true
           }
        }
        return false
    }
}
