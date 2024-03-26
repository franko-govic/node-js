+//primjer export

function calculateTax(amount, taxRate) {
  return amount * (taxRate / 100);
}

module.exports = calculateTax;