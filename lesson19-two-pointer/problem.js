/**
 * LeetCode Problem: Container With Most Water
 *
 * Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai).
 * n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0).
 * Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.
 *
 * Example 1:
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
 * In this case, the max area of water (blue section) the container can contain is 49.
 *
 * Example 2:
 * Input: heights = [1,1]
 * Output: 1
 *
 * Example 3:
 * Input: heights = [4,3,2,1,4]
 * Output: 16
 */

function maxArea(heights) {
  let maxArea = 0

  let [left, right] = [0, heights.length-1];
  do {
    const left_val = heights[left];
    const right_val = heights[right];
    const width = right - left;
    const height = Math.min(left_val, right_val);
    
    maxArea = Math.max(maxArea, width * height)
    if (left_val < right_val) left++
    else right--;
  } while (left < right);

  return maxArea;
}

module.exports = maxArea;
