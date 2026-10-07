/**
 * ============================================================================
 * DRILL 4: sort() with Custom Comparator
 * ============================================================================
 * arr.sort(compareFn?)
 * - GOTCHA 1: Mutates the array in-place! Use `[...arr].sort(...)` or `arr.toSorted(...)`.
 * - GOTCHA 2: Default sort converts elements to STRINGS!
 *             [10, 2, 5].sort() -> [10, 2, 5] (because "10" < "2")
 * 
 * COMPARATOR CONTRACT: (a, b) => number
 * - Return < 0: `a` comes before `b` (no swap)
 * - Return > 0: `b` comes before `a` (swap)
 * - Return 0:   Keep original relative order
 * 
 * CHEAT SHEET:
 * - Numbers ascending:   (a, b) => a - b
 * - Numbers descending:  (a, b) => b - a
 * - Strings:             (a, b) => a.localeCompare(b)
 * - Objects by prop:     (a, b) => a.age - b.age
 * - Multi-level tiebreak: (a, b) => a.score - b.score || a.name.localeCompare(b.name)
 * 
 * SUMMARY RULE
 * Sorting strings: arr.sort() ✅ (works as expected)
 * Sorting numbers: arr.sort((a, b) => a - b) ✅ (always provide the math function)
 * ============================================================================
 */

// ============================================================================
// INTERVIEW DRILL QUESTIONS
// ============================================================================

/**
 * Q1: Sort Colors (LeetCode 75)
 * Asked at: Microsoft, Amazon, Adobe
 * 
 * Given an array `nums` with `n` objects colored red (0), white (1), or blue (2),
 * sort them in-place so that objects of the same color are adjacent,
 * with the colors in the order red, white, and blue (0, 1, 2).
 * 
 * Example:
 *   Input:  nums = [2, 0, 2, 1, 1, 0,2,1,0,22]
 *   Output: [0, 0, 1, 1, 2, 2]
 */
export function sortColors(nums: number[]): void {
    // Solve using custom numeric comparator in-place
    const output = nums.sort((a, b) => a - b)
    //const output=nums.sort()
    console.log(output)
}
let Input = [2, 0, 2, 1, 1, 0, 3, 3, 3, 1, 55, 6]
//sortColors(Input)

/**
 * Q2: Largest Number (LeetCode 179)
 * Asked at: Amazon, Microsoft, Salesforce
 * 
 * Given a list of non-negative integers `nums`, arrange them such that they
 * form the largest possible number when concatenated.
 * Return the result as a string.
 * 
 * Example:
 *   Input:  nums = [10, 2]
 *   Output: "210"
 *   Input:  nums = [3, 30, 34, 5, 9]
 *   Output: "9534330"
 */
export function largestNumber(nums: number[]): string {
    // Hint: Compare concatenated strings `(b + a).localeCompare(a + b)`

    //convert the input to a string
    let input = nums.map(String)
    console.log(input)

    input.sort((a, b) => (b + a).localeCompare(a + b))
    console.log(input)
    let output = input.join("")
    console.log(output)
    return output;
}
let input = [3, 30, 34, 5, 9, 2, 2, 88, 99]
//largestNumber(input)



/**
 * Q3: Sort Characters By Frequency (LeetCode 451)
 * Asked at: Meta, Bloomberg, Amazon
 * 
 * Given a string `s`, sort it in decreasing order based on the frequency
 * of the characters.
 * 
 * Example:
 *   Input:  s = "tree"
 *   Output: "eert" (or "eetr")
 *   Input:  s = "cccaaa"
 *   Output: "aaaccc" (or "cccaaa")
 */
export function frequencySort(s: string): string {
    // Hint: Build a count map, then sort unique characters by frequency descending
    let myMap = new Map<string, number>()

    for (let i = 0; i < s.length; i++) {
        let currentWord = s[i]
        if (!myMap.has(currentWord)) {
            myMap.set(currentWord, 1)
        } else {
            myMap.set(currentWord, (myMap.get(currentWord) || 0) + 1)
        }

    }

    let myArray = Array.from(myMap)

    let sortedArray = myArray.sort((a, b) => b[1] - a[1])

    let finalString = ""
    sortedArray.forEach(([digit, count]) => {
        finalString += digit.repeat(count)
    })
    console.log(finalString)
    return finalString;
}
let s = "tree"
//frequencySort(s)


/**
 * Q4: Custom Multi-Level Object Sorting
 * Asked at: Uber, Flipkart (Machine Coding / Screening)
 * 
 * Given a list of employees with `department`, `salary`, and `name`:
 * Sort by:
 * 1. `department` alphabetically ascending
 * 2. If same department, by `salary` descending
 * 3. If same salary, by `name` alphabetically ascending
 * 
 * Example:
 *   Input:  [
 *             { name: "Bob",   dept: "Eng", salary: 100 },
 *             { name: "Alice", dept: "Eng", salary: 120 },
 *             { name: "David", dept: "HR",  salary: 90 },
 *             { name: "Carol", dept: "Eng", salary: 100 }
 *           ]
 *   Output: [Alice (Eng, 120), Bob (Eng, 100), Carol (Eng, 100), David (HR, 90)]
 */
export interface Employee {
    name: string;
    dept: string;
    salary: number;
}

export function sortEmployees(employees: Employee[]): Employee[] {
    // Hint: Chain comparator conditions using the `||` operator

    //create a copy of the employee
    const empCopy = Array.from(employees)
    const sortedEmployee = empCopy.sort((a, b) => {

        //sorting condition
        const deptComparison = a.dept.localeCompare(b.dept)
        const salaryCompare = b.salary - a.salary
        const nameCompare = a.name.localeCompare(b.name)
        //decide which sorting condition to pass
        if (deptComparison !== 0) {
            return deptComparison
        }
        if (salaryCompare !== 0) {
            return salaryCompare
        } else (nameCompare !== 0)
        return nameCompare
    })

    //console.log(sortedEmployee)

    // 3. Print from the stored variable
    sortedEmployee.forEach(({ name, dept, salary }) => {
        console.log(`${name} (${dept}, ${salary})`);
    });
    return sortedEmployee;
}
const input1: Employee[] = [
    { name: "Bob", dept: "Eng", salary: 100 },
    { name: "Alice", dept: "Eng", salary: 120 },
    { name: "David", dept: "HR", salary: 90 },
    { name: "Carol", dept: "Eng", salary: 100 }
];
//sortEmployees(input1)

/**
 * Q5: Relative Sort Array (LeetCode 1122)
 * Asked at: Google, Amazon
 * 
 * Given two arrays `arr1` and `arr2`, the elements of `arr2` are distinct,
 * and all elements in `arr2` are also in `arr1`.
 * Sort the elements of `arr1` such that the relative ordering of items matches `arr2`.
 * Elements that do not appear in `arr2` should be placed at the end in ascending order.
 * 
 * Example:
 *   Input:  arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], arr2 = [2, 1, 4, 3, 9, 6]
 *   Output: [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]
 */
export function relativeSortArray(arr1: number[], arr2: number[]): number[] {
    const frequencyMap = new Map<number, number>();
    const leftovers: number[] = [];
    const result: number[] = [];

    // 1. Store arr2 in a Set for O(1) membership checks
    const arr2Set = new Set(arr2);

    // 2. Count frequencies of arr2 elements, collect leftovers
    for (const num of arr1) {
        if (arr2Set.has(num)) {
            const count = frequencyMap.get(num) || 0;
            frequencyMap.set(num, count + 1);
        } else {
            leftovers.push(num);
        }
    }

    // 3. Reconstruct matched numbers strictly in the relative order of arr2
    for (const num of arr2) {
        const count = frequencyMap.get(num) || 0;
        for (let j = 0; j < count; j++) {
            result.push(num);
        }
    }

    // 4. Sort leftovers in ascending order
    leftovers.sort((a, b) => a - b);

    // 5. Combine and return
    return result.concat(leftovers);
}

// Verification
const arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19];
const arr2 = [2, 1, 4, 3, 9, 6];
console.log(relativeSortArray(arr1, arr2));
// Output: [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]