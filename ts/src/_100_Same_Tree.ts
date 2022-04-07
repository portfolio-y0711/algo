export class TreeNode2 {
    val: number
    left: TreeNode2 | null
    right: TreeNode2 | null
    constructor(val?: number, left?: TreeNode2 | null, right?: TreeNode2 | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function isSameTree(p: TreeNode2 | null, q: TreeNode2 | null): boolean {
    if (p === null && q === null) return true
    if (!p || !q) return false
    if (p.val !== q.val) return false
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
} 

console.log(isSameTree(new TreeNode2(1, new TreeNode2(2)), new TreeNode2(1, null, new TreeNode2(2))))