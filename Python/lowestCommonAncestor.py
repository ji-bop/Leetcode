class Solution(object):
    def lowestCommonAncestor(self, root, p, q):
        while (root.val - p.val) * (root.val - q.val) > 0:
            root = (root.left, root.right)[p.val > root.val]
        return root


# OR


class Solution(object):
    def lowestCommonAncestor(self, root, p, q):
        a, b = sorted([p.val, q.val])
        while not a <= root.val <= b:
            root = (root.left, root.right)[a > root.val]
        return root


# OR


class Solution(object):
    def lowestCommonAncestor(self, root, p, q):
        while root:
            if p.val < root.val > q.val:
                root = root.left
            elif p.val > root.val < q.val:
                root = root.right
            else:
                return root


# OR

class Solution(object):
    def lowestCommonAncestor(self, root, p, q):
        return root if (root.val - p.val) * (root.val - q.val) < 1 else \
            self.lowestCommonAncestor((root.left, root.right)[
                p.val > root.val], p, q)


# OR

class Solution(object):
    def lowestCommonAncestor(self, root, p, q):
        if p.val < root.val > q.val:
            return self.lowestCommonAncestor(root.left, p, q)
        if p.val > root.val < q.val:
            return self.lowestCommonAncestor(root.right, p, q)
        return root
