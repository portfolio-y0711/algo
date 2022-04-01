//  * Definition for singly-linked list.
 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }

 function deleteDuplicates(head: ListNode | null): ListNode | null {
     let cursor = head
     if (!cursor) return null
     while (cursor.next !== null) {
         if (cursor.val === cursor.next.val) {
           cursor.next = cursor.next.next 
         } else {
             cursor = cursor.next
         }
    }
    return head
}

const root = new ListNode(1, new ListNode(1, new ListNode(2)))

console.log(deleteDuplicates(root))