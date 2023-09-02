'use strict';

//PROBLEM
//building a smart home thermometer, our task is:
//given an array of temperatures of one day, calculate the temperature
//amplitude. Keep in mind that sometimes there might be a sensor err

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [23, -11, 'error', 6, 7, 8, 'error'];
//1 understand the problem
//...
//amplitude is asking for the range, aka the diff b/t the highest and lowest

//2 breaking up into sub problems
// - need to:
// a) sort array from highest to lowest
// b) retieve the highest value and lowest value
// c) find the difference b/t them

//3 solve

//---MY SOLUTION---
const findAmplitude = (arr) => {
  const sorted = arr.sort((a, b) => a - b);
  const validValues = [];
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== 'error') {
      validValues.push(sorted[i]);
    }
  }
  //return amplitude
  return validValues[validValues.length - 1] - validValues[0];
};
const amplitude = findAmplitude(temperatures);
console.log(amplitude);

//---COURSE SOLUTION---
const calcTempAmplitude = (temps) => {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  return max - min;
};
const amp = calcTempAmplitude(temperatures);
console.log(amp);

//PROBLEM 2:
//Function should now recieve 2 arrays of temps

//1 understand the problem:
// just merge the 2 arrays at the beginning

//2 break into sub problems
//merge, then origional function will work

//3 solve
const combineTemps = (arr, arr2) => {
  const combine = [...arr, ...arr2];
  return findAmplitude(combine);
};
const solution = combineTemps(temperatures, temperatures2);
console.log(solution);

//DEBUGGING

// const measureKelvin = () => {
//   const measurement = {
//     type: 'temperature',
//     unit: 'celcius',
//     value: prompt('Degrees celcius')
//   }
//   const kelvin = Number(measurement.value) + 273
//   return kelvin
// }
// //ID THE BUG
// console.log(measureKelvin())

//solution
//convert measurement.value from string to number

//CODING CHALLENGE
console.log('Coding Challenge:');
/*
Given array of forecasted max temperatures, the thermometer displays
a string with these temperatures.
Ex. [17, 21, 23] will print '... 17C in 1 days ... 21C in 
2 days ... 23C in 3 days'
create a function 'printForecast' which takes in the array and
logs the string to the console.
test data 1: [17, 21, 23]
test data 2: [12, 5, -5, 0, 4]
*/

//take in arr
//loop through and on each iteration, print a string with
//temp and the day (index + 1)

const printForecast = (arr) => {
  let forecast = [];
  let days = 0;
  for (let i = 0; i < arr.length; i++) {
    days++;
    let string = `... ${arr[i]}°C in ${days} days `;
    forecast.push(string);
  }
  return forecast.join('');
};
const test1 = printForecast([17, 21, 23]);
const test2 = printForecast([12, 5, -5, 0, 4]);
console.log(test1);
console.log(test2);
