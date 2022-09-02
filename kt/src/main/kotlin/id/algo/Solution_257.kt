package id.algo

import io.algo.TreeNode

class Solution_257 {
    fun binaryTreePaths(root: TreeNode?): List<String> {
        if (root == null) {
            return emptyList()
        }
        if (root.left == null && root.right == null)
            return listOf("${root.`val`}")

        val left = binaryTreePaths(root.left)
        val right = binaryTreePaths(root.right)

        return (left + right).map { "\"${root.`val`}\"" + "->" + "$it" }
    }
}