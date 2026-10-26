func removeNthFromEnd(head *ListNode, n int) *ListNode {
    dummy := &ListNode{Next: head}
    fast := dummy
	slow := dummy

    // put a gap of n nodes between fast and slow
    for i := 0; i < n; i++ {
        fast = fast.Next
    }

    // advance both until fast is on the last node
    for fast.Next != nil {
        fast = fast.Next
        slow = slow.Next
    }

    slow.Next = slow.Next.Next
    return dummy.Next
}