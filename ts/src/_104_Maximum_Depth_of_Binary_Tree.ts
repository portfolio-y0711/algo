import { TreeNode } from './types'

function maxDepth(root: TreeNode | null): number {
    if (root === null) return 0
    return 1 + Math.max(maxDepth(root?.left), maxDepth(root?.right))
}

console.log(maxDepth(new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))))