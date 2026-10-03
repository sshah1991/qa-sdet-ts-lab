/**
 * ============================================================================
 * DRILL 1: split() & join()
 * ============================================================================
 * str.split(delim, limit?) -> string[] : Cuts string into array by delimiter.
 * arr.join(delim?)         -> string   : Glues array elements with delimiter.
 * 
 * CORE TRICKS:
 * - str.split("")              -> Character array: "cat" -> ["c", "a", "t"]
 * - arr.join("")               -> Concatenate chars without commas
 * - str.split("").reverse().join("") -> Reverse string
 * - "".split("") === []        -> Empty string edge case
 * - "".split(",") === [""]     -> Produces single empty element
 * ============================================================================
 */

// ============================================================================
// REAL INTERVIEW DRILL QUESTIONS
// ============================================================================

/**
 * Q1: Reverse Words in a String (LeetCode 151)
 * Asked at: Amazon, Microsoft, Bloomberg
 * 
 * Given an input string s, reverse the order of the words. A word is defined
 * as a sequence of non-space characters. Return a string with words in reverse
 * order joined by a single space, without leading/trailing spaces.
 * 
 * Example:
 *   Input:  s = "the sky is blue"
 *   Output: "blue is sky the"
 *   Input:  s = "  hello world  "
 *   Output: "world hello"
 */

function reverseWords(s1: string, s2: string) {
    let split = s1.split(" ")
    let rev = split.reverse()
    let joinwithspace = rev.join(" ")
    console.log(joinwithspace)

    let trimmedString = s2.trim()
    let splitString = trimmedString.split(" ")
    let revString = splitString.reverse()
    let finalString = revString.join(" ")
    console.log(finalString)



}

reverseWords("the sky is blue", "  hello world  ")

/**
 * Q2: Defanging an IP Address (LeetCode 1108)
 * Asked at: Amazon, Adobe
 * 
 * Given a valid (IPv4) IP address, return a defanged version of that IP address.
 * A defanged IP address replaces every period "." with "[.]".
 * 
 * Example:
 *   Input:  address = "1.1.1.1"
 *   Output: "1[.]1[.]1[.]1"
 */
function defangIPaddr(address: string) {
    let output = address.split(".").join("[.]")
    console.log(output)
}

defangIPaddr("1.1.1.1")

/**
 * Q3: Truncate Sentence (LeetCode 1816)
 * Asked at: Google, TCS, Infosys
 * 
 * You are given a sentence `s` and an integer `k`. You want to truncate `s`
 * such that it contains only the first `k` words. Return `s` after truncating it.
 * 
 * Example:
 *   Input:  s = "Hello how are you Contestant", k = 4
 *   Output: "Hello how are you"
 */
function truncateSentence(s: string, k: number) {
    // TODO: implement using split with limit or array slicing + join
    let newSTR = s.split(" ", k).join(" ")
    console.log(newSTR)

}
truncateSentence("Hello how are you Contestant", 4)

/**
 * Q4: Valid Anagram Check (LeetCode 242)
 * Asked at: Meta, Uber, Goldman Sachs
 * 
 * Given two strings `s` and `t`, return true if `t` is an anagram of `s`,
 * and false otherwise (an anagram uses the exact same letters rearranged).
 * Solve using split, sort, and join.
 * 
 * Example:
 *   Input:  s = "anagram", t = "nagaram" -> Output: true
 *   Input:  s = "rat", t = "car"         -> Output: false
 */
function isAnagram(s: string, t: string) {
    // TODO: implement using split, sort, join
    if (s.length === t.length) {
        let str1 = s.split("").sort().join()
        let str2 = t.split("").sort().join()

        if (str1 == str2) {
            console.log("True")
        } else {
            console.log("false")
        }
    }

}
isAnagram("anagram", "nagaram")

/**
 * Q5: Simplify Path / Canonical Path (LeetCode 71)
 * Asked at: Meta, Apple, Citadel
 * 
 * Given an absolute Unix-style file path (e.g., "/a/./b/../../c/"), convert
 * it to its simplified canonical path.
 * In Unix:
 * - A single period '.' refers to the current directory.
 * - A double period '..' refers to the directory up a level.
 * - Multiple consecutive slashes '//' are treated as a single slash '/'.
 * 
 * Example:
 *   Input:  path = "/home//foo/"
 *   Output: "/home/foo"
 *   Input:  path = "/../"
 *   Output: "/"
 *   Input:  path = "/a/./b/../../c/"
 *   Output: "/c"
 */
export function simplifyPath(path: string){
    // TODO: split by "/", filter tokens, use a stack, then join with "/"

    let strSplit = path.split("/")

    let stack: string[] = []
    strSplit.forEach(element => {
        if (element === "." || element === "") {
            return
        } if (element === '..') {
            stack.pop()
        } else {
            stack.push(element)
        }
    });
   let finalString="/"+stack.join("/")
   console.log(finalString)
}

simplifyPath("/a/./b/../../c/")
simplifyPath("/home//foo/")
