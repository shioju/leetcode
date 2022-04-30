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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let dummy = new ListNode(-200);
  let curr = dummy;
  let next = head;
  while (next) {
    if (next.val === curr.val) {
      curr.next = next.next;
    } else {
      curr.next = next;
      curr = next;
    }
    next = next.next;
  }
  return dummy.next;
}
