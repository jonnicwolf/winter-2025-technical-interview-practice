// Prompt for Lemonade Change
// You are running a lemonade stand and decide to sell lemonade for $5 per cup.
// Customers will be paying with either a $5 bill, a $10 bill, or a $20 bill.
// You need to provide the correct change to each customer.
// Return true if you can provide change to every customer, otherwise return false.

function canProvideChange(bills) {
  if (bills[0] > 5) return false;

  let bank = bills[0];

  for (let i=1; i<bills.length-1; i++) {
    const bill = bills[i];
    if (bank % bill <= 0) return false
    else bank+=bill;
  };

  return true;
};

console.log(canProvideChange([5,10,20]));
console.log(canProvideChange([10,10,20]));
console.log(canProvideChange([10,5,20]));
console.log(canProvideChange([20,10,5]));

module.exports = canProvideChange;
