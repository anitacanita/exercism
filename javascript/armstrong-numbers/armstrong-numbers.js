export const isArmstrongNumber = (number) => {
  var digits = number.toString().split('');
  var digit;
  var numbersToSum = [];

  for(digit of digits) numbersToSum.push(Math.pow(digit, digits.length));

  var sum = numbersToSum.reduce((accumulator, number) => accumulator + number);

  return sum === number;
};
