function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    const visitedA: Set<ListNode> = new Set<ListNode>()
	const visitedB: Set<ListNode> = new Set<ListNode>()

	while (headA || headB) {
		if (headA) {
			if (visitedB.has(headA)) return headA
			visitedA.add(headA)
			headA = headA.next
		}
		if (headB) {
			if (visitedA.has(headB)) return headB
			
			visitedB.add(headB)
			headB = headB.next
		}
	}
	return null
}
