let data=[]
const fetchData=(cb)=>{
    //assume its fetching data from some API
    setTimeout(()=>{
        data=[1,2,3,4,5,6,7,8]
        console.log("Data fetched successfully");
        cb();  //trigger callback here
    },2000)
}
const diaplayData=()=>{
    console.log("Display Function: ",data)
}
fetchData(diaplayData) // asynchronous execution
// passing function as argument
// which consider here callback function