async function fetchData(){
    try{
const resp = await fetch('https://jsonplaceholder.typicode.com/users')
const json = await resp.json();
console.log(json)
    }catch(err){
        console.log('Error occured',err);
    }
}
fetchData()