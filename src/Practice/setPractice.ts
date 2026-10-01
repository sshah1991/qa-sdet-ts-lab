

const allowedRoles = new Set(["admin", "editor", "owner"]);
//canAccess("owner")

function canAccess(role: string):boolean{
    console.log(allowedRoles.has(role))
    console.log(role)
    return allowedRoles.has(role)
}

//addAndDeleteRole("testRole","admin")
function addAndDeleteRole(roleToAdd:string,roleToDelete:string){
    console.log(allowedRoles.size);
    console.log("Before adding: ",allowedRoles)
    allowedRoles.add(roleToAdd)
    console.log(allowedRoles.size);
    console.log("After adding: ", allowedRoles)
    allowedRoles.delete(roleToDelete)
    console.log(allowedRoles.size);
    console.log("After deleting: ", allowedRoles)
}


function setOperations(){
    let setA = new Set<number>([1,2,3,4,5])
    let setB = new Set<number>([3,4,5,6,7])
    let setC = new Set<number>([1,1,2,2,3,4,4,6,6,6,9])

    // filter all uniqe elements
    let uniqueSet= new Set([...setC])
    let uniqeSet2= new Set(setC)

    console.log("uniqe set: ",uniqueSet)
    console.log("uniqe set: ",uniqeSet2)

    // Union (all unique items from A B and C)
    let union=new Set([...setA,...setB,...setC])
    console.log("union: ",union)

    // Intersection (items present in both A and B)
    let intersection= new Set([...setA].filter(x=>setB.has(x)))
    console.log("Intersection: ",intersection)

    // Difference (items in A but not B) 
    let difference= new Set([...setA].filter(x=>!setB.has(x)))
    console.log("Diff: ",difference)
}
//setOperations()
