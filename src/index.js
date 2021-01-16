const NUMS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
const DEC_NUMS = ['', '', 'twent', 'thirt', 'fort', 'fift', 'sixt', 'sevent', 'eight', 'ninet'];

const decimal = (number) => {
  const n = number.toString().split('')
  let str = '';
  if (number === 0) {
    str = ''
  } else if (number <= 12) {
    str = NUMS[number]
  } else if (number == 14) {
    str = 'fourteen';
  } else if (number > 12 && number < 20) {
    str = `${DEC_NUMS[n[1]]}een`;
  } else if (number % 10 === 0) {
    str = `${DEC_NUMS[n[0]]}y`;
  } else {
    str = `${DEC_NUMS[n[0]]}y ` + NUMS[n[1]];
  }
  return str;
}

module.exports = function toReadable(number) {
  switch (number.toString().length) {
    case 1:
      return NUMS[number];
    case 2:
      return decimal(number);
    case 3:
      let str = `${NUMS[(number / 100) | 0]} hundred`;
      if (number % 100) {
        str += ` ${decimal(number % 100)}`;
      }
      return str;
  }
}
