//Läser ut filen courses.json och exporterar funktionen för att sen kunna importera den. 
const { readFileSync, appendFile } = require('fs');
let loadCourses = () => JSON.parse(readFileSync('courses.json'));




module.exports = { loadCourses };