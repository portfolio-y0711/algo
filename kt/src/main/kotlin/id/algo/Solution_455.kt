package id.algo

class Solution_455 {
    fun findContentChildren(g: IntArray, s: IntArray): Int {
        g.sort()
        s.sort()
        var i = 0
        var j = 0
        while (i < g.size && j < s.size) {
            if (s[j] >= g[i]) i++
            j++
        }
        return i
    }
}