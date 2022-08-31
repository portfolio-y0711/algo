package id.algo

import io.algo.TreeNode

class Solution_235 {
    fun lowestCommonAncestor(root: TreeNode?, p: TreeNode?, q: TreeNode?): TreeNode? {
        if (root == null || p == null || q == null) return root
        return if (root.`val` < p.`val` && q.`val` > root.`val`) {
            lowestCommonAncestor(root.right, p, q)
        } else if (root.`val` > p.`val` && q.`val` < root.`val`) {
            lowestCommonAncestor(root.left, p, q)
        } else root
    }
}