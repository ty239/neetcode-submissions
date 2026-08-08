/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
     let  isSameTree= function(p,q){
if (p === null && q === null)return true;
if (p === null || q === null )return false; 

if (p.val !== q.val )return false;
return  isSameTree(p.left,q.left) && isSameTree(p.right,q.right);


    }
    if (!subRoot)return true ;
    if (!root) return false;
   if (isSameTree(root,subRoot)){
    return true;
   }else{
    return this.isSubtree(root.right,subRoot) || this.isSubtree(root.left,subRoot)
   }
r
                       


}
}