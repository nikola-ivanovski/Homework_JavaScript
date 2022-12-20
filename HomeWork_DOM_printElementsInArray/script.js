let numbers = [1, 44, 52, 26, 75, 3, 65];
let list = document.getElementById("list");
let sum = document.getElementsByClassName("total")[0];
let total = 0;

for (let number of numbers) {
  list.innerHTML += `<li>${number}</li>`;
}

for (const i in numbers) {
  total += numbers[i];
  sum.innerHTML = `The total sum is: ${total}`;
}
