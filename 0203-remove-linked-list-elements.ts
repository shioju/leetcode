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

function removeElements(head: ListNode | null, val: number): ListNode | null {
  const dummy = new ListNode();
  let prev = dummy;
  let next = head;
  while (next) {
    if (next.val === val) {
      prev.next = next.next;
    } else {
      prev.next = next;
      prev = prev.next;
    }
    next = next.next;
  }
  return dummy.next;
}
