const tree = {
  name: "John",
  children: [
    {
      name: "Jime",
      children: [],
    },
    {
      name: "Zoe",
      children: [
        { name: "Kyle", children: [] },
        {
          name: "Bhau",
          children: [
            {
              name: "Elon",
              children: [
                {
                  name: "Dhoni",
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

function recursiveTraverse(obj) {
  if (obj.children.length === 0) {
    return;
  }

  obj.children.forEach((child) => {
    console.log(child.name);
    recursiveTraverse(child);
  });
}

console.log(recursiveTraverse(tree));
