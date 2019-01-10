// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Jonsson, Bengt', 'Andersson, Ulf', 'Göransson, Rudolf', 'Olsson, Kurt', 'Anka, Kalle', 'Långben, Janne', 'Pigg, Musse', 'Kånkel, Onkel', 'Fistelkvist, Magister', 'Fyrkant, Svampbob', 'Ferdinand, Tjuren', 'Sjöstjärna, Patrik', 'Cobain, Kurt', 'Vedder, Eddie', 'Rose, Axl', 'Poole, Joseph', 'Sixx, Nikki', 'McDonald, Ronald', 'Snider, Dee', 'Surman, Roman', 'Castronovo, Kyle', '13, Wednesday', 'Tankersley, Jack', 'Doebbler, Troy'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const born1500 = inventors.filter(inventor => (inventor.year > 1499 && inventor.year < 1600));
console.log(born1500);
console.log('');

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names

const names = inventors.map(inventor => inventor.first + ' ' + inventor.last);
console.log(names);
console.log('');

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const  birthdates = inventors.sort((a, b) => (a.year > b.year) ? 1 : -1);
console.log(birthdates);
console.log('');

// Array.prototype.reduce()
// 4. How many years did all the inventors live?

const alive = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0);
console.log(alive);
console.log('');

// 5. Sort the inventors by years lived

const  yearsLived = inventors.sort((a, b) => (a.passed-a.year < b.passed-b.year) ? 1 : -1);
console.log(yearsLived);
console.log('');

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

/* MUST RUN IN BROWSER CONSOLE on WIKIPEDIA PAGE
const cat = document.querySelector('.mw-category');
const links = [...cat.querySelectorAll('a')];
const de = links.map(link => link.textContent).filter(street => street.includes(' de '));
*/

// 7. sort Exercise
// Sort the people alphabetically by last name

const sortedPeople = people.sort();
console.log(sortedPeople);
console.log('');

// Bonus, by first name

const sortedFirst = people.sort((a,b) => (a.substr(a.indexOf(' ')) > b.substr(b.indexOf(' '))) ? 1 : -1 )
console.log(sortedFirst);
console.log('');

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const sumData = data.reduce((obj,item) => { 
    if (!obj[item]) obj[item] = 0;
    obj[item]++;
    return obj;
},{});
console.log(sumData);