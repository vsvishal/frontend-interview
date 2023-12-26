const users = [
  {
    name: "Vishal",
    isActive: true,
    age: 26,
  },
  {
    name: "Rohit",
    isActive: false,
    age: 36,
  },
  {
    name: "Virat",
    isActive: true,
    age: 35,
  },
  {
    name: "Elon",
    isActive: false,
    age: 52,
  },
  {
    name: "Zebra",
    isActive: true,
    age: 12,
  },
];

const usrNames = [];
const result = users.forEach(
  (user) => user.isActive && usrNames.push(user.name)
);
// console.log(usrNames);

// console.log("result " + result);

const mapResult = users
  .filter((user) => user.isActive)
  .sort((user1, user2) => (user1.age < user2.age ? -1 : 1))
  .map((user) => user.name);
// console.log(mapResult);

const countries = [
  {
    name: "India",
    value: "IN",
    cities: ["Delhi", "Mumbai"],
  },
  {
    name: "Australia",
    value: "AUS",
    cities: ["Sydney", "Melbourne"],
  },
  {
    name: "America",
    value: "USA",
    cities: ["New York", "New Jersey"],
  },
];

for (let item in countries) {
  console.log(item.value);
}

// const country = countries[0];
// console.log(country);

// console.log(countries[country]);
