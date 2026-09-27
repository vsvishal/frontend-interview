const user = {
  name: "Vishal",
  designation: "Software Engineer",
  address: {
    city: "Pune",
    pincode: "412307",
  },
};

const newUser = {
  ...user,
  address: {
    ...user.address,
    city: "Mumbai",
  },
};

const {
  address: { city },
} = user;

console.log(city);

console.log(typeof null);
console.log(typeof undefined);
