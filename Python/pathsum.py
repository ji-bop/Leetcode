# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# FIRST SOLUTION
class Solution(object):
    def pathSum(self, root, sum):
        if not root:
            return []
        res = []
        queue = [(root, root.val, [root.val])]
        while queue:
            curr, val, ls = queue.pop(0)
            if not curr.left and not curr.right and val == sum:
                res.append(ls)
            if curr.left:
                queue.append(
                    (curr.left, val+curr.left.val, ls+[curr.left.val]))
            if curr.right:
                queue.append(
                    (curr.right, val+curr.right.val, ls+[curr.right.val]))
        return res

# SECOND SOLUTION


class Solution(object):
    def pathSum(self, root, sum):
        if not root:
            return []
        res = []
        stack = [(root, sum-root.val, [root.val])]
        while stack:
            curr, val, ls = stack.pop()
            if not curr.left and not curr.right and val == 0:
                res.append(ls)
            if curr.right:
                stack.append(
                    (curr.right, val-curr.right.val, ls+[curr.right.val]))
            if curr.left:
                stack.append(
                    (curr.left, val-curr.left.val, ls+[curr.left.val]))
        return res


# THIRD SOLUTION

class Solution(object):
    def pathSum(self, root, s):
        if not root:
            return []
        res = []
        stack = [(root, [root.val])]
        while stack:
            curr, ls = stack.pop()
            if not curr.left and not curr.right and sum(ls) == s:
                res.append(ls)
            if curr.right:
                stack.append((curr.right, ls+[curr.right.val]))
            if curr.left:
                stack.append((curr.left, ls+[curr.left.val]))
        return res
