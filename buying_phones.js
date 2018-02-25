const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = (Math.random() * 20).toFixed(2);
const SPENDING_THRESHOLD = 110.00;

var amount_in_bank = prompt('How much money do you have?');
var total_price = 0;
var phone_count = 0;

if (PHONE_PRICE + ACCESSORY_PRICE < SPENDING_THRESHOLD) {
  total_price = calculateTotal(PHONE_PRICE + ACCESSORY_PRICE);
} else {
  total_price = calculateTotal(PHONE_PRICE);
}

console.log(formatAmount(total_price));

while (amount_in_bank > total_price) {
  amount_in_bank -= total_price;
  phone_count++;
}

console.log("Number of phones bought: " + phone_count);
console.log("Total spent: " + formatAmount(total_price * phone_count));
function calculateTotal(n) {
  return n * (1 + TAX_RATE);
}

function formatAmount(n) {
  return "$" + n.toFixed(2);
}
