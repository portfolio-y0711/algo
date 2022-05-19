import { TreeNode } from "./types"

function hasPathSum(root: TreeNode | null, targetSum: number, acc: number = 0): boolean {
    if (!root) return false
    const currSum = acc + root.val
    if (!root.left && !root.right) return currSum === targetSum
    return hasPathSum(root.left, targetSum, currSum) || hasPathSum(root.right, targetSum, currSum)
}