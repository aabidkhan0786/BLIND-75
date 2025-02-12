// You are given the head of a singly linked-list. The list can be represented as:
// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:
// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

// Example 1:
// Input: head = [1,2,3,4]
// Output: [1,4,2,3]

// Example 2:
// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]

// Constraints:
// The number of nodes in the list is in the range [1, 5 * 104].
// 1 <= Node.val <= 1000

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.

solution:

1) Find mid point.
2) Break the list.
3) Reverse the 2nd half.
4) Join them back.

 */
var reorderList = function (head) {
  let leftPtr = head;
  let rightPtr = head;

  while (rightPtr.next && rightPtr.next.next) {
    leftPtr = leftPtr.next;
    rightPtr = rightPtr.next.next;
  }

  // break the list
  let currentNode = leftPtr.next;
  leftPtr.next = null;

  // reverse the 2nd half
  let prevNode = null;

  while (currentNode) {
    let nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }

  // combine the list
  let h1 = head;
  let h2 = prevNode;

  while (h2) {
    let temp = h1.next;
    h1.next = h2;
    h1 = h2;
    h2 = temp;
  }
};
