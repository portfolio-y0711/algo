import { TreeNode } from "./types"

function preorderTraversal(root: TreeNode | null, acc: number[] = []): number[] {
  if (!root) {
    return acc
  } else {
    acc.push(root.val)
    if (root.left) preorderTraversal(root.left, acc)
    if (root.right) preorderTraversal(root.right, acc)
    return acc
  }
}