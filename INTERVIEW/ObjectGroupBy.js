const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];

// const result = Object.groupBy(inventory, ({ type }) => type);
// console.log(result);

function groupByType(inventory) {
  return inventory.reduce((acc, curr) => {
    const type = curr.type;
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(curr);

    return acc;
  }, {});
}

console.log(groupByType(inventory));

const result = inventory.reduce((map, curr) => {
  const type = curr.type;
  if (!map.has(type)) {
    map.set(type, []);
  }
  map.get(type).push(curr);
  return map;
}, new Map());
