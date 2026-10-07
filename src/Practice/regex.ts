console.log(/\d/.test("abcd123"))
console.log(/\d/.test("123"))
console.log(/\d/.test("abcd"))

console.log("++++++++1")

console.log(/\D/.test("abcd123"))
console.log(/\D/.test("abcd"))
console.log(/\D/.test("123"))

console.log("++++++++2")

console.log(/\w/.test("abcd123"))
console.log(/\w/.test("abcd"))
console.log(/\w/.test("123"))
console.log(/\w/.test("!!"))

console.log("++++++++3")

console.log(/\W/.test("abcd123"))
console.log(/\W/.test("abcd"))
console.log(/\W/.test("123"))
console.log(/\W/.test("!!"))
console.log(/\W/.test(" "))

console.log("++++++++4")

console.log(/\s/.test("abcd123"))
console.log(/\s/.test("abcd"))
console.log(/\s/.test("123!!"))
console.log(/\s/.test("Sumeet Shah"))
console.log(/\s/.test(""))

console.log("++++++++5")
console.log(/\S/.test("abcd123"))
console.log(/\S/.test("abcd"))
console.log(/\S/.test("123!!"))
console.log(/\S/.test("Sumeet Shah"))
console.log(/\S/.test(" "))

console.log("++++++++6")
console.log(/^Admin/.test("AdminURL"))
console.log(/\URL$/.test("URL"))


console.log("++++++++7")
console.log(/[^a-z0-9]/.test("---"))
console.log(/[a-z0-9]/.test("---"))

console.log(/[^a-z0-9]/.test("hello!"))
console.log(/[a-z0-9]/.test("hello"))

console.log(/[a]/.test("apple"))
console.log(/[^a]/.test("aaa"))
console.log("++++++++8")
console.log(/[a-z0-9]/.test("hello"))//true
console.log(/[a-z0-9]/.test("**"))//false
console.log(/[^a-z0-9]/.test("**"))//true
console.log(/[^a-z0-9]/.test("**1"))//true
console.log(/[^a-z0-9]/.test("hello"))//false
console.log(/[^a-z0-9]/.test("hello1"))//false
console.log(/[^a-z0-9]/.test("hello1@"))//true
console.log(/[a-z0-9]/.test("hello1@"))//true
console.log("++++++++9")
console.log(/[^\d]/.test("abcd123"))
console.log(/[^\d]/.test("123"))
console.log("++++++++10")
const text = "Order #227 on 2026-10-04";
console.log(text.match(/\d/g))
console.log(text.match(/[^a-zA-Z]/g))
console.log(text.match(/[-]/g))

console.log("catfish and cat".match(/^cat/g));

console.log("bm boom boo boom".match(/bo*m/g));
console.log("bm boom boo bboom oom moob".match(/bo*m/g));

console.log("User #42!".match(/[a-z0-9]/g));//"s" "e" "r" "4" "2"

console.log("User #42!".match(/[^a-z0-9]/g)); //"U"," ","#","!"

const ssn = "1231-45-6789";
//ssn.replace(/\d/g, "*");
console.log(ssn)
let a=ssn.replace(/.{4}$/,"****")
console.log(a)
let b=ssn.replace(/^.{4}/,"****")
console.log(b)
let c=ssn.replace(/^\d{4}/,"****")
console.log(c)
