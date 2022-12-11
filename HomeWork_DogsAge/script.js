function calculateDogAge(dogAge) {
  let dogYear = 7 * dogAge;
  console.log(`Your dog is ${dogYear} years old in dog years`);
  let humanYear = dogAge / 7;
  console.log(`${humanYear} years old in human years`);
}

calculateDogAge(14);
calculateDogAge(4);
calculateDogAge(7);
