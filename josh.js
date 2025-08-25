//  let person = [
//      { id:1, name: "Alice", age: 28 },
//      { id:2, name: "Bob", age: 22 },
//      { id:3, name: "Charlie", age: 30 },
//  ];

//  function updatePerson(id, updateData) {
//      for (let i = 0; i < person.length; i++) {
//          if (person[i].id === id) {
//              person[i].name = updateData.name;
//              person[i].age = updateData.age;
//          }
//      }

//  }
//      updatePerson(2, {name: "Robert", age: 26 });

//  console.log(person); 


let users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
];

let names = users.map(user => user.name);

console.log(names);