/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const cMap = new Map();

  for (const transaction of transactions) {
    const { category, price } = transaction;
    if (cMap.has(category)) {
      const totalSpent = cMap.get(category);
      cMap.set(category, totalSpent + price);
    } else {
      cMap.set(category, price);
    }
  }

  // const result = Array.from(cMap.entries()).map(([key, value]) => {
  //   return {
  //     category: key,
  //     totalSpent: value,
  //   };
  // });

  const result = Array.from(cMap, ([category, totalSpent]) => ({
    category,
    totalSpent,
  }));

  return result;
}

module.exports = calculateTotalSpentByCategory;
