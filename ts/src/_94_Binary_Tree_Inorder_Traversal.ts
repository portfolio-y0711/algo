import { TreeNode } from './types'

function inorderTraversal(root: TreeNode | null): number[] {
    let left: number[] = []
    let right: number[] = []
    if (!root) return []
    if (root?.left) {
        left = inorderTraversal(root.left)
    }
    if (root?.right) {
        right = inorderTraversal(root.right)
    }
    return [...left, root.val, ...right]
    
}
