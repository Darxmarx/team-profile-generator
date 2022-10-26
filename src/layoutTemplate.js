// generating the actual index.html
let generateIndex = teamObj => {
    console.log('team object', teamObj)

    // set card to empty by default
    let htmlCard = ""

    // iterate over all objects given
    for (let i = 0; i < teamObj.length; i++) {
        let finalPrompt = teamObj[i].office || teamObj[i].gitHub || teamObj[i].school;
        let keys = Object.keys(teamObj[i]);
        let lastKey = keys[4];
        let finalOption = lastKey + ":" + finalPrompt;

        if (lastKey === undefined) {
            finalOption = "";
        } else if (lastKey === 'gitHub') {
            finalOption = (`GitHub : <a href = 'https://www.github.com/${teamObj[i].gitHub}'> ${teamObj[i].gitHub}</a>`);
            console.log(finalOption);
        } else {
            console.log(finalOption);
        }


        // generate the contents of the html card
        let { name, role, email, id } = teamObj[i]
        htmlCard += `
         <div class="card col" style="width: 18rem;">
            <div class="card-body card-header">
                <h5 class="card-title">${name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Email: <a href=mailto:${email}>${email}</a></li>
                <li class="list-group-item">Employee ID: ${id}</li>
                <li class="list-group-item"> ${finalOption}</li> 
            </ul>
        </div>`
    }

    return `

    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Member Profile</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
        <header class="jumbotron">
            <h1>My Team</h1>
        </header>
    
        <main class="container">
            <div class="row">
             ${htmlCard}
            </div>
        </main>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    </body>
    
    </html>`
}

module.exports = generateIndex;
