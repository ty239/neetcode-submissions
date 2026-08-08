class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(L1, L2) {
 let dumb = new ListNode(0) ;// create a dummy new ListNOde(0)
 let head = dumb;// head = dumb
 while (L1 !== null && L2 !== null){// While L1 != nullptr && L2 != null            
  if (L1.val > L2.val){//if L1.val > L2.val
  dumb.next =L2  // dumb.next = L2
  dumb = L2    // dumb= l2             
  L2 = L2.next // L2 = L2.next
  }
else if (L2.val >= L1.val){// else if L2 > L1 || L1 === L2
dumb.next = L1;//dumb.next =L1
dumb = L1;// dumb = L1
L1 = L1.next;// L1 = L1.next
}
}
if (L1  === null ){// if L1 or L2 reaches null  
dumb.next = L2;     // dumb.next -> list who is not null
}else if (L2 === null){
    dumb.next = L1;
}

return head.next;
 

// retun head.next
}
     
}
