import { ListNode } from './types'

function removeElements(head: ListNode | null, val: number): ListNode | null {
    let cursor = head
    let previous = cursor

    while (cursor) {
        if (cursor?.val === val) {
            previous!.next = cursor.next
            cursor = previous!.next
        } else {
            previous = cursor
            cursor = cursor.next
        }
    }
    return (head?.val === val) ? head.next : head
}