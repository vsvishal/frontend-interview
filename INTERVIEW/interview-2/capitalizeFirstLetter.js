function capitalizeFirstLetter(str) {
  const arr = str.split(" ");
  const capitalizeArr = arr.map(
    (word) => word.charAt(0).toUpperCase() + word.substring(1)
  );
  return capitalizeArr.join(" ");
}

console.log(capitalizeFirstLetter("hello my Name is vishal sharma"));
