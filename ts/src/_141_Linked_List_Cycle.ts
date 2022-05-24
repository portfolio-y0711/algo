function hasCycle (head: ListNode | null) {
  const visited: Set<ListNode> = new Set()
    
  while (head !== null) {
      const next = head.next
      if (next) {
        if (visited.has(next)) {
            return true
        }
        visited.add(next)
      }
      head = next
  }
  return false
}
  