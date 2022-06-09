import { ListNode } from './types'

function reverseList(head: ListNode | null): ListNode | null {
    if (!head) return null
    let cursor /* 1 (-> 2) */ = head 
    
    while (head.next !== null) {
        const tmp /* 2 (-> 3) */ = head.next 
        cursor.next /* 1 (-> 3) */ = tmp.next 
        tmp.next /* 2 (-> 1) */ = cursor 
        cursor /* 2 (-> 1) */ = tmp 
    }
    return cursor
  }
  
  reverseList(new ListNode(1, new ListNode(2, new ListNode(3))))