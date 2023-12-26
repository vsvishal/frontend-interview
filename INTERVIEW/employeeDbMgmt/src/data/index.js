(async function () {
  const data = await fetch("./data.json");
  const json = await data.json();

  console.log("json ", json);

  let employeeList = document.querySelector(".employees__names--list > ul");

  json.map((employee) => {
    let employeeName = document.createElement("li");
    employeeName.innerHTML = `${employee.firstName} ${employee.lastName}`;
    employeeList.appendChild(employeeName);
  });

  let liElments = document.querySelectorAll("li");
  console.log(liElments);
})();
