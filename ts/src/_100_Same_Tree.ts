import { TreeNode } from "./types"

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p && !q) return true
    if (!p || !q) return false
    return isSameTree(p.left, q.left) && (p.val === q.val) && isSameTree(p.right, q.right)
} 

console.log(isSameTree(new TreeNode(1, new TreeNode(2)), new TreeNode(1, null, new TreeNode(2))))