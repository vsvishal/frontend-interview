const users = [
  {
    name: "Vishal",
    roles: ["Admin", "Developer"],
  },
  {
    name: "Dhoni",
    roles: ["Devloper"],
  },
];

const result = users.flatMap(({ name, roles }) =>
  roles.map((role) => {
    (name, role);
  }),
);
