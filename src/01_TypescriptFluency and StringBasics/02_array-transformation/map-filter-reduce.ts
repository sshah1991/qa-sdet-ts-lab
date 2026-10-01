/**
 * ============================================================================
 * DRILL 2: map(), filter(), reduce()
 * ============================================================================
 * map():    Transforms every item 1:1.
 *           [1, 2, 3].map(x => x * 2) -> [2, 4, 6]
 * 
 * filter(): Keeps only items that pass a true/false check.
 *           [1, 2, 3, 4].filter(x => x % 2 === 0) -> [2, 4]
 * 
 * reduce(): Squashes the array down into one final result (number, object, etc.).
 *           Always pass an initial value as the second argument!
 *           [1, 2, 3].reduce((acc, curr) => acc + curr, 0) -> 6
 * ============================================================================
 */

// ============================================================================
// INTERVIEW DRILL QUESTIONS
// ============================================================================

/**
 * Q1: Running Sum of 1D Array (LeetCode 1480)
 * Asked at: Microsoft, Adobe
 * 
 * Return an array where each element is the sum of all elements up to that index.
 * 
 * Example:
 *   Input:  nums = [1, 2, 3, 4]
 *   Output: [1, 3, 6, 10]
 *   Explanation: [1, 1+2, 1+2+3, 1+2+3+4]
 */
export function runningSum(arr: number[]) {
    // Hint: Can be solved with a running accumulator in map or reduce
    let sum = 0
    let newArr = arr.map(element => {
        sum += element
        return sum
    })
    console.log(arr)
    console.log(newArr)
}
let arrInput = [1, 2, 3, 4]
//runningSum(arrInput)

/**
 * Q2: Extract and Clean User Data
 * Asked at: Flipkart, Amazon (Frontend screening)
 * 
 * Given a list of users, return a list containing only the names (uppercase)
 * of users who are active (isActive: true).
 * 
 * Example:
 *   Input:  [
 *             { name: "alice", isActive: true },
 *             { name: "bob", isActive: false },
 *             { name: "charlie", isActive: true }
 *           ]
 *   Output: ["ALICE", "CHARLIE"]
 */
export function getActiveUserNames(users: { name: string; isActive: boolean }[]) {
    // Hint: Chain .filter() and .map()
    console.log(users)
    let filteredArr = users.filter(element => element.isActive === true)
    console.log(filteredArr)
    let upperCaseArr = filteredArr.map(element => element.name.toUpperCase())
    console.log(upperCaseArr)

}
let users = [{ name: "alice", isActive: true },
{ name: "bob", isActive: false },
{ name: "charlie", isActive: true }]

//getActiveUserNames(users)


/**
 * Q3: Count Word Occurrences / Frequency Counter
 * Asked at: Meta, PayTM
 * 
 * Given an array of strings, count how many times each string appears.
 * Return an object where keys are words and values are their counts.
 * 
 * Example:
 *   Input:  ["apple", "banana", "apple", "orange", "banana", "apple"]
 *   Output: { apple: 3, banana: 2, orange: 1 }
 */
export function countFrequencies(input: string[]) {
    // Hint: Use .reduce() with an empty object {} as initial value
    let result = input.reduce((acc: Record<string, number>, word: string) => {
        acc[word] = (acc[word] || 0) + 1
        return acc
    }, {})
    console.log(result);
}
//countFrequencies(["apple", "banana", "apple"]);
/**
 * Q4: Calculate Total Cart Value
 * Asked at: Swiggy, Walmart
 * 
 * Given a cart with items, quantity, and price, return the total cost.
 * If an item is on sale (onSale: true), apply a 10% discount to that item.
 * 
 * Example:
 *   Input:  [
 *             { price: 100, qty: 2, onSale: false }, // 200
 *             { price: 50,  qty: 2, onSale: true }   // 10% off 100 = 90
 *           ]
 *   Output: 290
 */
export function calculateTotal(cart: { price: number; qty: number; onSale: boolean }[]) {
    // Hint: Use .reduce() starting at 0

    const result = cart.reduce((acc, elment) => {
        if (elment.onSale === true) {
            let discountAmount = elment.price * elment.qty * .10
            acc += elment.price * elment.qty - discountAmount
        } else {
            acc += elment.price * elment.qty
        }
        return acc
    }, 0)
    console.log(result)
}
const cartItems = [
    { price: 100, qty: 2, onSale: false }, // 200
    { price: 50, qty: 2, onSale: true },  // 50
];
calculateTotal(cartItems)

/**
 * Q5: Group Items by Category
 * Asked at: Google, Uber
 * 
 * Given a list of items, group them by their category into an object.
 * 
 * Example:
 *   Input:  [
 *             { name: "pen", category: "stationery" },
 *             { name: "apple", category: "food" },
 *             { name: "notebook", category: "stationery" }
 *           ]
 *   Output: {
 *             stationery: ["pen", "notebook"],
 *             food: ["apple"]
 *           }
 */
export function groupByCategory(items: { name: string; category: string }[]) {
    // Hint: Use .reduce() with {} as initial value

    let result = items.reduce((acc: Record<string, string[]>, element: { name: string; category: string }) => {
        // 1. If category array doesn't exist yet, initialize it
        if (!acc[element.category]) {
            acc[element.category] = []
        }
        acc[element.category].push(element.name)
        return acc
    }, {})
    console.log(result)
}
const input = [
    { name: "pen", category: "stationery" },
    { name: "apple", category: "food" },
    { name: "notebook", category: "stationery" },
    { name: "", category: "temp" }
];

groupByCategory(input);