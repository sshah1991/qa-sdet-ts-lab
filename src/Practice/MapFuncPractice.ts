function ArrayFromExaple(){
// From a Set (stripping duplicates, then sorting)
const uniqueNumbers = new Set([3, 1, 2, 3]);
const sortedArray = Array.from(uniqueNumbers).sort((a, b) => a - b);
console.log(sortedArray); // [1, 2, 3]

// From Map values (e.g. solving Group Anagrams!)
const anagramMap = new Map<string, string[]>();
anagramMap.set("aet", ["eat", "tea", "ate"]);
anagramMap.set("ant", ["tan", "nat"]);

// Convert map values into a 2D array:
const grouped = Array.from(anagramMap.values());
console.log(grouped); 
// [ ["eat", "tea", "ate"], ["tan", "nat"] ]
}

ArrayFromExaple()
