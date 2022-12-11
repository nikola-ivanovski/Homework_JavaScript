const balance = 600;

function atm() {
  let userInput = parseInt(prompt("Enter an amount that you want to withdraw"));
  if (userInput > balance) {
    console.log("You don't have enough money!");
  } else if (userInput < balance) {
    console.log(`Here is yours ${userInput} $`);
    console.log(`You have left ${balance - userInput} $`);
  } else if (isNaN(userInput)) {
    console.log("Error: please enter a number!");
  }
}
atm();
