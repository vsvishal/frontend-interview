const employees = [
  { id: 101, name: "Vishal", skills: ["HTML", "CSS", "Javascript"] },
  { id: 102, name: "John", skills: ["Java", "SQL"] },
  { id: 103, name: "Elon", skills: ["React", "Angular"] },
];

const skills = employees.flatMap((emp) => emp.skills);
console.log(skills);
