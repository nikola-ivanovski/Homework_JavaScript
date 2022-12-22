// Homework part 1

let animalInput = prompt("What the dog says?");

function Animal(name, kind) {
  this.name = name;
  this.kind = kind;
  this.speak = function () {
    return `Dog says: ${animalInput}`;
  };
}

let myDog = new Animal("Sparky", "husky");
console.log(myDog);
console.log(myDog.speak(`${animalInput}`));

// Homework part 2

let books = [
  {
    title: "The Robots of dawn",
    author: "Isaac Asimov",
    readingStatus: true,
  },
  {
    title: "Mockingjay: The Final Book of the Hunger Games",
    author: "Suzanne Collins",
    readingStatus: false,
  },
];

for (let i = 0; i < books.length; i++) {
  let book = `${books[i].title} by ${books[i].author}.`;
  if (books[i].readingStatus) {
    console.log(`Already read ${book}`);
  } else {
    console.log(`You still need to read ${book}`);
  }
}
