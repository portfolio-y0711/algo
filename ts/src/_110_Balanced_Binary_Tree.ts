import { TreeNode } from './types'

const height = function (root: TreeNode, depth: number): number {
    if (root) {
        return 1 + Math.max(height(root.left!, depth), height(root.right!, depth))
    }
    return depth
    
}

function isBalanced(root: TreeNode | null): boolean {
    if (root) {
        let heightDifference = Math.abs(height(root.left!, 0) - height(root.right!, 0))
        if (heightDifference > 1) {
            return false
        }
        else {
            return isBalanced(root.left) && isBalanced(root.right)
        }
    }
    return true
}

console.log(isBalanced(new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))))
