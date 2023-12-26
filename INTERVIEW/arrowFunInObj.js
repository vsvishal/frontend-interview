const user = {
  usrname: "vishal",
  display: function () {
    console.log(`User name is ${this.usrname}`);
  },
  show: () => {
    console.log(`Arrow User name is ${2 * this.usrname}`);
  },
};

const disp = user.display;
disp.call(user);

// user.display.call(user);

// const newFun = user.display.bind(user);
// newFun();

// disp();
// user.show();

// console.log(undefined * undefined);
