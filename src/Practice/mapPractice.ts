//map creation
function mapCRUD() {

    let userRole=new Map<number,string>()
    console.log("initial userRole: ",userRole)

    // Add to the map
    userRole.set(101,"Sumeet")
    console.log("initial userRole: ",userRole)
    userRole.set(201,"Shah")
    console.log("initial userRole: ",userRole)
    userRole.set(301,"Amram")
    console.log("initial userRole: ",userRole)

    // Read from the map
    console.log("Reading userRole:",userRole.get(101))
    console.log("Reading userRole:",userRole.get(701))

    //Check existance from the map
    console.log("Checking existance in userRole:",userRole.has(101))
    console.log("Checking existance in userRole:",userRole.has(801))

    //delete feom the map
    userRole.delete(101)
    console.log("After Deletion: ",userRole)

    //clear the map
    userRole.clear()
    console.log("After Clear: ",userRole)
}
//mapCRUD()

//Maps with string
let value: Record<string,number>={
    Hindi:50,
    English:40,
    Maths:20,
    Science:60
}
let scores=new Map<string,number>(Object.entries(value))
console.log(scores.get("Hindi"))

//Maps with string--2

const scores1 = new Map<string, number>([
  ["Hindi", 50],
  ["English", 40],
  ["Maths", 20],
  ["Science", 60],
]);


console.log(scores1.set("NewSubject",50))
console.log("New Map: ",scores1)
console.log("Get value: ",scores1.get("Maths"))
scores1.delete("Maths")
console.log("New Map after delete: ",scores1)
scores1.clear()
console.log("New Map after clear: ",scores1)

