// //Importerar funktionen för att skriva ut alla kurser ur jsonfilen.
// const { loadCourses } = require('./courses_all');
// const express = require('express');
// const app = express()
// const path = require('path')

// let fs = require('fs')
//     //Sökvägen till klientsidan.
// app.use("/pub", express.static(path.join(__dirname, 'pub')));


// //Funktion för att tillåta cors. 
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
// //Hämtar funktionen för att läsa ut kurserna i webbläsaren
// app.get('/courses', function(req, res) {
//     res.send(loadCourses());
// })

// //Funktion för att läsa ut enskilt id med for if sats. 
// app.get('/courses/:id', (req, res) => {
//     let singles = JSON.parse(fs.readFileSync('courses.json'));
//     let id = req.params.id;
//     for (let single of singles) {
//         if (single._id === parseInt(id)) {
//             res.send(single, 200);
//             return;
//         }
//     }
//     //Felmeddelande om kursen inte finns
//     res.status(500).send("Kursen hittades ej!")

// })

// //Radera kurs, först lagras kurserna i arr, och id i id. Sedan körs en for if och courses.json skrivs över med de kurser som finns kvar efter att radera har körts. 
// app.delete('/courses/:id', (req, res) => {
//     let arr = JSON.parse(fs.readFileSync('courses.json'));
//     let id = req.params.id;
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i]._id == parseInt(id)) {
//             arr.splice(i, 1);

//             fs.writeFileSync('courses.json', JSON.stringify(arr));
//             res.status(200)
//             res.end();
//             return;
//         }
//     }
//     //Felmeddelande om kursen inte finns. 
//     res.status(500).send("Kursen finns inte!")
// })



// //Lyssnar till port 3000