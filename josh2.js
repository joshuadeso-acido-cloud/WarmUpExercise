

// function areValuesUnique(numbers) {
//     return new Set(numbers).size === numbers.length;
// }

// console.log(areValuesUnique([1, 2, 3, 4]));
// console.log(areValuesUnique([1, 2, 2, 4,]))

let people = [
    { name: "Tom", age: 16},
    { name: "Jerry", age: 18},
    { name: "Spike", age: 22}
];

let adults = people.filter(person => person.age >= 18);

console.log(adults);