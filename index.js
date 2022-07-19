// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Convert Celsius to Fahrenheit</h1>`;

/** TODO:
 * The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
 * You are given a variable celsius representing a temperature in Celsius.  Use the variable fahrenheit alredy defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature.  Use the formula mentioend above to help convert the Celsius temperature to Fahrenheit.
 
 function convertCtoF(celsius) {
   let fahrenheit;
   return fahrenheit;
 }
 
 convertCtoF(30);
 */

function convertCtoF(celsius) {
  let fahrenheit;
  fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

console.log('0ºC = ' + convertCtoF(0) + 'ºF');
console.log('-30ºC = ' + convertCtoF(-30) + 'ºF');
console.log('-10ºC = ' + convertCtoF(-10) + 'ºF');
console.log('0ºC = ' + convertCtoF(0) + 'ºF');
console.log('20ºC = ' + convertCtoF(20) + 'ºF');
console.log('30ºC = ' + convertCtoF(30) + 'ºF');

/** PROBLEM EXPLANATION:
 * The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
 * You are given a variable 'celsius' representing a temperature in Celsius.  Use the variable 'fahrenheit' already defined and apply the algorithm to assign it the corresponding temperature in Fahrenheit.
 */

/** HINT:
 * Keep in mind the 'order of operation' check the link in the links section for more information.
 * Relevant Links:
 *    - The Order of Operations: PEMDAS (http://www.purplemath.com/modules/orderops.htm)
 *    - Order of Operation: Video (https://www.khanacademy.org/math/pre-algebra/order-of-operations/order_of_operations/v/order-of-operations)
 */
