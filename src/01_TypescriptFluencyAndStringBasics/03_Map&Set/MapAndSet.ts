/**
 * ============================================================================
 * DRILL 3: Map and Set
 * ============================================================================
 * Set:
 * - A collection of UNIQUE values (duplicates are automatically dropped).
 * - Methods: .add(val), .has(val), .delete(val), .size
 * - Common trick: [...new Set(arr)] -> removes duplicates in O(n) time.
 * 
 * Map:
 * - Key-value store where keys can be ANY type (objects, functions, numbers).
 * - Preserves insertion order (unlike plain objects).
 * - Methods: .set(key, val), .get(key), .has(key), .delete(key), .size
 * ============================================================================
 */

// ============================================================================
// INTERVIEW DRILL QUESTIONS
// ============================================================================

/**
 * Q1: Two Sum (LeetCode 1)
 * Asked at: Google, Amazon, Meta, Microsoft
 * 
 * Given an array of integers `nums` and an integer `target`, return indices
 * of the two numbers such that they add up to `target`.
 * 
 * Example:
 *   Input:  nums = [2, 7, 11, 15], target = 9
 *   Output: [0, 1] (because nums[0] + nums[1] === 9)
 */
export function twoSum(input: number[], target: number): number[] {
  // Hint: Store complement (target - num) and index in a Map for O(n) lookup
  let comp = 0
  let seen = new Map<number, number>

  for (let i = 0; i <= input.length; i++) {
    const currentNumber = input[i]
    const complement = target - currentNumber

    if (seen.has(complement)) {
      console.log("match found")
      return [seen.get(complement)!, i]
    } else {
      seen.set(currentNumber, i)
      console.log(seen)
    }
  }
  return [];
}

const nums = [11, 15, 7, 2];
const target = 9;
//const answer = twoSum(nums, target);
//console.log(answer)

/**
 * Q2: Contains Duplicate (LeetCode 217)
 * Asked at: Apple, Adobe, Bloomberg
 * 
 * Given an integer array `nums`, return true if any value appears at least
 * twice in the array, and false if every element is distinct.
 * 
 * Example:
 *   Input:  nums = [1, 2, 3, 1] -> Output: true
 *   Input:  nums = [1, 2, 3, 4] -> Output: false
 */
export function containsDuplicate(nums: number[]): boolean {
  // Hint: Compare nums.length with new Set(nums).size
  let newNums = new Set(nums)
  console.log(newNums)
  if (newNums.size === nums.length) {
    return false;
  } else {
    return true;
  }

}
//let number = [1, 2, 3, 4, 5, 6]
//console.log(containsDuplicate(number))

/**
 * Q3: Intersection of Two Arrays (LeetCode 349)
 * Asked at: Meta, LinkedIn
 * 
 * Given two integer arrays `nums1` and `nums2`, return an array of their
 * intersection. Each element in the result must be unique.
 * 
 * Example:
 *   Input:  nums1 = [1, 2, 2, 1], nums2 = [2, 2]
 *   Output: [2]
 */
export function intersection(nums1: number[], nums2: number[]): number[] {
  // Hint: Put nums1 into a Set, then filter nums2 using set.has()
  let a = new Set(nums1)
  let b = new Set(nums2)
  const intersection = new Set([...a].filter(x => b.has(x)))
  console.log(intersection)
  return [];
}
// let nums1 = [1, 2, 2, 1,3]
// let nums2 = [2, 2,3]
// intersection(nums1,nums2)

/**
 * Q4: First Non-Repeating Character (LeetCode 387)
 * Asked at: Amazon, Microsoft, Goldman Sachs
 * 
 * Given a string `s`, find the first non-repeating character in it and return
 * its index. If it does not exist, return -1.
 * 
 * Example:
 *   Input:  s = "leetcode" -> Output: 0 ('l' is first unique)
 *   Input:  s = "loveleetcode" -> Output: 2 ('v' is first unique)
 */
export function firstUniqChar(input: string): number {
  // Hint: First pass: count frequencies in a Map.
  // Second pass: find first with count === 1.

  let wordCountMap = new Map<string, number>()
  for (let i = 0; i < input.length; i++) {
    let currentCharacter = input[i]
    let currentCharacterCount = wordCountMap.get(currentCharacter) || 0
    wordCountMap.set(currentCharacter, currentCharacterCount + 1)
  }
  console.log("Words Counted", wordCountMap)

  for (let i = 0; i <= input.length; i++) {
    const char = input[i]
    if (wordCountMap.get(char) === 1) {

      console.log("first unique char", char)
      return i
    }
  }
  return -1;
}

//console.log(firstUniqChar("sumeetshah"))

/**
 * Q5: Group Anagrams (LeetCode 49)
 * Asked at: Uber, Amazon, Netflix
 * 
 * Given an array of strings `strs`, group the anagrams together.
 * You can return the answer in any order.
 * 
 * Example:
 *   Input:  strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
 *   Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]
 */
export function groupAnagrams(inputString: string[]): string[][] {
  // Hint: Use a Map where key is the sorted word (str.split('').sort().join(''))

  let myMap=new Map<string,string[]>()

  for (let i = 0; i < inputString.length; i++) {
    const currentWord = inputString[i]
    const sortedCurrentWord = currentWord.split("").sort().join("")
    // 2. If we haven't seen this signature, initialize an empty array
    if(!myMap.get(sortedCurrentWord)){
      myMap.set(sortedCurrentWord,[])
    }
    myMap.get(sortedCurrentWord)!.push(currentWord)// array so push
  }
  console.log(myMap)
  console.log(Array.from(myMap.values()))
  return Array.from(myMap.values());
}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
groupAnagrams(strs)
