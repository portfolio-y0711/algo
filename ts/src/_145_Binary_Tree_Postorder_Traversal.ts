import { TreeNode } from "./types"

function postorderTraversal(root: TreeNode | null): number[] {
  const acc: number[] = []
  function traverse(root: TreeNode | null, acc: number[]) {
    if (!root) return
    traverse(root.left, acc)
    traverse(root.right, acc)
    acc.push(root.val)
  }
  traverse(root, acc)
  return acc
}

console.log(postorderTraversal(new TreeNode(1, null, new TreeNode(2, new TreeNode(3)))))