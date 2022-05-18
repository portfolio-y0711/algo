import { TreeNode } from './types'

function minDepth(root: TreeNode | null): number {
    if (!root) return 0
    if (!root.left) return minDepth(root.right) + 1
    if (!root.right) return minDepth(root.left) + 1
    return 1 + Math.min(minDepth(root.left), minDepth(root.right)) 
}

console.log(minDepth(new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))))