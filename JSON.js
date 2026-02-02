const users = '{"name": "Preet", "age": 21, "gender": "female"}'

// JSON.parse() -> used to convert JSON string into a JavaScript object
const user = JSON.parse(users)
console.log(user["gender"]);

//  JSON.stringify() -> used to convert JavaScript object into a JSON string
const users1 = {
    name: "harkirat",
    age: 25,
    gender: "male"
}

const finalString = JSON.stringify(users1)
console.log(finalString)
