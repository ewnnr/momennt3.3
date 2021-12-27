//Hämtar kurserna via Mongodb API med fetch. 
fetch("http://localhost:3000/courses")
    .then(res => res.json())
    .then(data => {
        //Skriver ut en tabell med kurserna från databasen 
        let output = "<h2>Kurser</h2><table><tr><td>ID</td><td>Kursid</td><td>Kursnamn</td><td>Period</td></tr>"
        data.forEach(function(courses) {
            output += `
            <tr>
                <td>${courses._id}</td>
                <td>${courses.courseId}</td>
                <td>${courses.courseName}</td>
                <td>${courses.coursePeriod} </td><td><img src='\papperskorg.png'onclick="deletecourse('${courses._id}')"  alt='Erase user' id=${courses._id}/></td>     
            </tr>
           
            `

        });
        //Skriver ut till skärm med getElementById från index.html. 
        document.getElementById("output").innerHTML = output;
    })
    //Async funktion med en väntande fetch, om den körs så raderas kursen, laddar sedan om sidan när kursen är raderad från JSON.
async function deletecourse(id) {
    if (confirm('Vill du radera kursen?')) {
        await fetch("http://localhost:3000/courses/" + id, { method: "DELETE" })
        location.reload()
    }
}