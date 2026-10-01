const arr=[1,2,3]

function mapTest(){
    //double every number
    const newArr= arr.map(element=>element*2)
    console.log(arr)
    console.log(newArr)
    
}
//mapTest()

function filterTest(){
    //filter all even numbers
    const newArr=arr.filter(element=>element%2===0)
    console.log(arr)
    console.log(newArr)
}
//filterTest()

function reduceTest(){
    const newArr=arr.reduce((acc,cur)=> acc+cur,0)
    console.log(arr)
    console.log(newArr)
}
reduceTest()