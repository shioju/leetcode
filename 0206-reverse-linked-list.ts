/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
  let curr = null;
  let next = head;
  while (next) {
    const nextNext = next.next;
    next.next = curr;
    curr = next;
    next = nextNext;
  }
  return curr;
}
