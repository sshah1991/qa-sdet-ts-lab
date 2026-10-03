//remove duplicate from a string Banana => Ban

let str:string="Banana"

function removeDuplicate(str:string){
     let newStr=[...new Set(str)]
     console.log( newStr.join(""))
}
//removeDuplicate(str)


// const nums = [1, 5, 2];
// const names=["Sumeet","Shah"]

// // ...nums dumps 1, 5, 2 as separate function arguments!
// console.log(nums)
// console.log([...nums])
// console.log(Math.max(...nums)); // 5

// console.log(names)
// console.log(...names)


const employeeList= [
    { name: "Bob",   dept: "Eng", salary: 100 },
    { name: "Alice", dept: "Eng", salary: 120 },
    { name: "David", dept: "HR",  salary: 90 },
    { name: "Carol", dept: "Eng", salary: 100 }
];

console.log(employeeList)
console.log("*************************************************")
console.log(...employeeList)