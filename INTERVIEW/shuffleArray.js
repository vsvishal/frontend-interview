function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    //Swap
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  }
  return arr;
}

const allUsers = ["Vishal", "Bhau", "Elon", "Billgates"];
console.log(shuffleArray(allUsers));
