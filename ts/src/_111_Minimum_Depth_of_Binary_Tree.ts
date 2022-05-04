import { TreeNode } from './types'

function minDepth(root: TreeNode | null): number {
    if (root === null) return 0
    
    if (root.left === null) {
        return minDepth(root.right) + 1
    }
    
    if (root.right === null) {
        return minDepth(root.left) + 1
    }
    
    let left = minDepth(root.left)
    let right = minDepth(root.right)
    
    return Math.min(left, right) + 1
}

console.log(minDepth(new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))))