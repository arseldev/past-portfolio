// let student1 = {
//     name : "Ale",
//     age : 28,
//     programmingLanguange : ["PHP", "C++", "C#", "Golang", "Javascript", "Java"]
// }

// let student2 = {
//     name : "Yoga",
//     age : 55,
//     programmingLanguange : ["Love", "Javascript"]
// }

// let student3 = {
//     name : "Fadhlan",
//     age : 8,
//     programmingLanguange : ["India", "Javascript"]
// }

// constructor Function
function StudentFSW (name, age, programmingLanguange) {
    this.name = name
    this.age = age
    this.programmingLanguange = programmingLanguange
}

// inisialisasi object
var student1 = new StudentFSW('Hafizh', 20, ["Java"])
var student2 = new StudentFSW('Adrian', 40, ["Javascript"])
var student3 = new StudentFSW('Diki', 18, ["Physical Touch"])

console.log(student2);