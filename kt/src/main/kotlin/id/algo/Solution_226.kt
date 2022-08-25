package io.algo

class Solution_226 {
    fun invertTree(root: TreeNode?): TreeNode? {
        if (root == null) return root
        val tmp = root.left
        root.left = root.right
        root.right = tmp
        root.left?.let { invertTree(it) }
        root.right?.let { invertTree(it) }
        return root
    }
}
