/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
   

reverseList(head) {
    if (!head) return head;
    
 let prev = null;
 let temp = head.next;

 while (temp !== null && head !== null){ 

 head.next = prev;
 prev = head
 head = temp
 temp = temp.next
 head.next = prev
 }

 return head ;

}

   }
