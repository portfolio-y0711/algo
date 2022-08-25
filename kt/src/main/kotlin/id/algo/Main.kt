package io.algo

fun main() {
    val solution226 = Solution_226().invertTree(
        TreeNode(4)
            .apply {
                left = TreeNode(2)
                    .apply {
                       left = TreeNode(1)
                       right = TreeNode(3)
                    }
                right = TreeNode(7)
                    .apply {
                       left = TreeNode(6)
                       right = TreeNode(9)
                    }
            })
    println(solution226)
}
