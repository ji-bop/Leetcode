public class Solution {
    int count = 0;

    public int countSubstrings(String s) {
        if (s == null || s.length() == 0) return 0

        for (int i = 0; i < s.length(); i++) {
            // i is the mid point
            extendPalindrome(s, i, i); // Odd length
            extendPalindrome(s, i, i + 1); // Even length
        }

        return count;
    }
}

private void extendPalindrome(String s, int left, int right) {
    while (left >= 0 && right < s.length() && s.chatAt(left) == s.charAt(right)) {
        count++; left--; right++;
    }
}