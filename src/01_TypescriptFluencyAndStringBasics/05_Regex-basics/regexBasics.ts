/**
 * ============================================================================
 * DRILL 5: Regex Basics (Regular Expressions)
 * ============================================================================
 * CORE METHODS:
 * - /regex/.test(str)           -> boolean  : Checks if pattern exists in str.
 * - str.match(/regex/g)         -> string[] : Returns matches (needs 'g' for all).
 * - str.replace(/regex/g, val)  -> string   : Replaces matched patterns.
 * 
 * CORE TOKENS:
 * - \d : Any digit [0-9]        | \D : Non-digit
 * - \w : Alphanumeric + _       | \W : Non-alphanumeric
 * - \s : Whitespace (space/tab) | \S : Non-whitespace
 * - ^  : Start of string        | $  : End of string
 * - +  : 1 or more              | *  : 0 or more      | ? : 0 or 1
 * - [a-z0-9] : Custom class     | [^a-z0-9] : Negated class
 * 
 * FLAGS:
 * - g : Global (all occurrences, not just first)
 * - i : Case-insensitive
 * ============================================================================
 */

// ============================================================================
// INTERVIEW DRILL QUESTIONS
// ============================================================================

/**
 * Q1: Valid Palindrome (LeetCode 125)
 * Asked at: Meta, Microsoft, Yandex
 * 
 * A phrase is a palindrome if, after converting all uppercase letters into
 * lowercase letters and removing all non-alphanumeric characters, it reads
 * the same forward and backward.
 * 
 * Example:
 *   Input:  s = "A man, a plan, a canal: Panama"
 *   Output: true (cleaned: "amanaplanacanalpanama")
 *   Input:  s = "race a car"
 *   Output: false
 */
export function isPalindrome(s: string): boolean {
  // Hint: Use .toLowerCase() and .replace(/[^a-z0-9]/g, "")

  let input = s.toLowerCase()
  console.log("input: ", input)

  let newString = input.replace(/[^a-z0-9]/g, "")
  console.log(newString)
  let revSrring = newString.split("").reverse().join("")
  console.log(revSrring)

  if (newString === revSrring) {
    return true;
  } else {
    return false;
  }
}
let s = "A man, a plan, a canal: Panama"
let b="APPLE"
let val=isPalindrome(b)
console.log(val)


/**
 * Q2: Validate IP Address (LeetCode 468)
 * Asked at: Amazon, Twitter, Cisco
 * 
 * Given a string `queryIP`, return "IPv4" if it is a valid IPv4 address,
 * "IPv6" if it is a valid IPv6 address, or "Neither" if it is not.
 * 
 * IPv4 rules: 4 numbers separated by ".", each 0-255, no leading zeros (e.g. "192.168.1.1").
 * 
 * Example:
 *   Input:  queryIP = "172.16.254.1"   -> Output: "IPv4"
 *   Input:  queryIP = "256.256.256.256" -> Output: "Neither"
 */
export function validIPAddress(queryIP: string): string {
  // Hint: Regex for 0-255 without leading zeros: ^([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$
  return "Neither";
}

/**
 * Q3: String to Integer (atoi) - Sanitization Phase (LeetCode 8)
 * Asked at: Amazon, Microsoft, Bloomberg
 * 
 * Implement the parsing logic of `myAtoi`:
 * 1. Ignore leading whitespace.
 * 2. Check for optional sign ('+' or '-').
 * 3. Extract the continuous sequence of leading digits.
 * 
 * Example:
 *   Input:  s = "   -042"    -> Extracted: "-042"
 *   Input:  s = "1337c0d3"   -> Extracted: "1337"
 *   Input:  s = "words and 987" -> Extracted: null (no leading digits)
 */
export function extractLeadingInteger(s: string): string | null {
  // Hint: Use /^\s*([+-]?\d+)/.exec(s) or match()
  return null;
}

/**
 * Q4: Mask Personal Information / Email Sanitization (LeetCode 831)
 * Asked at: Intuit, PayPal
 * 
 * Given an email string, mask it:
 * - Lowercase all characters.
 * - Keep the first and last character of the name, replacing all in-between with "*****".
 * - Keep the domain as-is.
 * 
 * Example:
 *   Input:  email = "LeetCode@LeetCode.com"
 *   Output: "l*****e@leetcode.com"
 *   Input:  email = "AB@qq.com"
 *   Output: "a*****b@qq.com"
 */
export function maskEmail(email: string): string {
  // Hint: Group first char, middle chars, last char, and domain using capturing groups ()
  return "";
}

/**
 * Q5: Count Words and Extract Tokens from Raw Logs
 * Asked at: Splunk, Datadog (SDET / Observability screening)
 * 
 * Given a raw log line, extract all key-value pairs formatted as `key="value"`.
 * Return them as a key-value Record object.
 * 
 * Example:
 *   Input:  log = 'level="error" status="500" trace_id="abc-123" msg="timeout"'
 *   Output: {
 *             level: "error",
 *             status: "500",
 *             trace_id: "abc-123",
 *             msg: "timeout"
 *           }
 */
export function parseLogAttributes(log: string): Record<string, string> {
  // Hint: Use RegExp with global matchAll: /(\w+)="([^"]*)"/g
  return {};
}