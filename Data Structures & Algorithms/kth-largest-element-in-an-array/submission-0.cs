public class Solution {
    public int FindKthLargest(int[] nums, int k) {
        var sorted = nums.OrderBy(x => x).ToArray();
        return sorted[sorted.Length - k];
    }
}
