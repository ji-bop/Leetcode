class Solution:
    def countOperations(self, a: int, b: int) -> int:
        return 0 if a * b == 0 else a // b + self.countOperations(b, a % b)
