const array = [1,2,3,4,5,6,7,8,9,10];

//i want to create new array by multiplying all element using 3

const newArray = array.map((num) => num * 3);
console.log(newArray);

const evenArray = array.filter((num) => num%2===0);
console.log(evenArray);


//if first match found it will return that element
//if no match found then it will return undefined
const found = array.find((num)=>num==19)
console.log(found ? 'found '+ found: 'not found');

//find index of match
const findindex=array.findIndex((num)=>num==9);
console.log(findindex ? 'Found: ' + findindex: 'Not found');

//Find count of 2
const array1=[1,2,3,2,4,5,2,6,7,2,8,2]
const findcount =array1.filter((num)=>num==2).length;
console.log('Found count: ',findcount);

//Print individual elements useing foreeach
array1.forEach(num=>console.log(num))


result=[35,67,89,65,94]
// To check if all students pass individul
console.log (result.every(num=>35))

// For anyone student get marks greater than 90
console.log(result.some(num=>num>=90)) 


// To merge array within array into single array
console.log([[1,2],2,3,[4,5,6]].flat())

// To check if element is present in array and to get 
// the index we can use findindex or for element we can use find
console.log(array.includes(5))

//
console.log(("aarushi").toLowerCase().indexOf('a'));
console.log(("aarushi").lastIndexOf('a'));

//Slicing
const myarr=[10,20,30,40,50]
console.log(myarr.slice(2)) // starts from 2 till last
console.log(myarr.slice(1,4)) // starts from 2 till 3

//let's insert a new element in between --->inserting 60 between 30 and 40
//splice(start,deletecount,element to insert)
myarr.splice(3,0,60,70)
console.log(myarr)

//Delete 60
myarr.splice(3,1)
console.log("After delete:",myarr)


// replace 70 by 35
myarr.splice(3,1,35)
console.log('After replace:',myarr)
