const user = {
  name: "Bhau",
  greet() {
    setTimeout(function () {
      console.log(this.name);
    }, 0);
  },
  display() {
    console.log("display()", this.name);
  },
};

user.greet();
user.display();

// greet() is invoked as a method of user, so this inside greet refers to user.
// However, the setTimeout callback is a separate regular function. Regular function don't lexically inherit this.

//Arrow funcion this comes from where the function was created.
