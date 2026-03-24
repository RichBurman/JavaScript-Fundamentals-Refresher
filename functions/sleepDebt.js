const getSleepHours = day => {
  if(day === 'Monday') {
    return 8;
  } else if (day === 'Tuesday') {
    return 7;
  } else if (day === 'Wednesday') {
    return 11;
  } else if (day === 'Thursday') {
    return 5;
  } else if (day === 'Friday') {
    return 8;
  } else if (day === 'Saturday') {
    return 5;
  } else if (day === 'Sunday') {
    return 10;
  }
} 

// console.log(getSleepHours('Sunday'));

const getActualSleepHours = () =>
  getSleepHours('Monday') +
  getSleepHours('Tuesday') +
  getSleepHours('Wednesday') +
  getSleepHours('Thursday') +
  getSleepHours('Friday') +
  getSleepHours('Saturday') +
  getSleepHours('Sunday');

// const getIdealSleepHours = () => {
//   const idealHours = 8;
//   return idealHours * 7;
// }

const getIdealSleepHours = (idealPerNight = 8) => {
  return idealPerNight * 7;
}

// console.log(getIdealSleepHours())
// console.log(getActualSleepHours())

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if ( actualSleepHours === idealSleepHours) {
    console.log('You got the perfect sleep')
  } else if ( actualSleepHours > idealSleepHours) {
    console.log('You got more sleep than needed')
  } else if (actualSleepHours < idealSleepHours) {
    console.log('You need more sleep!')
  }

  console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
}

calculateSleepDebt()