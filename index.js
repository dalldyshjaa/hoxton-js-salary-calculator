let grossSalary = 100;
let pensionContribution = 5;
let taxesInPercentage;
let taxes = 0;
let moneyAfterPensionContribution =
  grossSalary - (grossSalary / 100) * pensionContribution;
if (moneyAfterPensionContribution > 80) {
  if (moneyAfterPensionContribution < 250) {
    taxesInPercentage = 4;
    taxes += ((moneyAfterPensionContribution - 80) / 100) * taxesInPercentage;
  } else {
    taxesInPercentage = 4;
    taxes += ((250 - 80) / 100) * taxesInPercentage;
  }
}
if (moneyAfterPensionContribution > 250) {
  if (moneyAfterPensionContribution < 450) {
    taxesInPercentage = 8;
    taxes += ((moneyAfterPensionContribution - 250) / 100) * taxesInPercentage;
  } else {
    taxesInPercentage = 8;
    taxes += ((450 - 250) / 100) * taxesInPercentage;
  }
}
if (moneyAfterPensionContribution > 450) {
  taxesInPercentage = 10;
  taxes += ((moneyAfterPensionContribution - 450) / 100) * taxesInPercentage;
}
let moneyAfterTaxes = moneyAfterPensionContribution - taxes;
console.log(moneyAfterTaxes);
