const person={
    fname:"Ishit",
    lname:"Dhiman",
    email:"ishit@gmail.com",
    age: 2,
    address:{
        street:"1601",
        city:"Dharamshala",
        zipcode:176216,
        country:"India"
    },
    greeting: function(){
        console.log(`Welcome ${this.fname} ${this.lname}`)
    }
}
console.log(person)
console.log("Address:",person.address)
person.greeting()
console.log(person['email'])

for (let key in person){
    console.log(person[key])
}