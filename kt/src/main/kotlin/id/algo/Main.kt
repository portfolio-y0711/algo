package io.algo

import Solution_242
import id.algo.Solution_231
import id.algo.Solution_235

fun main() {
    val solution = Solution_235()
    println(solution.lowestCommonAncestor(
            TreeNode(6).apply {
                left = TreeNode(2).apply {
                   left = TreeNode(0)
                   right = TreeNode(4).apply {
                       left = TreeNode(3)
                       right = TreeNode(5)
                   }
                }
                right = TreeNode(8).apply {
                    left = TreeNode(7)
                    right = TreeNode(9)
                }
            },
            p = TreeNode(2),
            q = TreeNode(8)
    )?.`val`)

//    val solution231 = Solution_231()
//    println(solution231.isPowerOfTwo(8))

//    val solution242 = Solution_242()
//    println(solution242.isAnagram("anagram", "nagaram"))

//    val solution226 = Solution_226().invertTree(
//        TreeNode(4)
//            .apply {
//                left = TreeNode(2)
//                    .apply {
//                       left = TreeNode(1)
//                       right = TreeNode(3)
//                    }
//                right = TreeNode(7)
//                    .apply {
//                       left = TreeNode(6)
//                       right = TreeNode(9)
//                    }
//            })
//    println(solution226)
}
