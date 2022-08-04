

const templateBuilder = employees => {
    var team = [];
    employees.forEach(employee => {
      if(employee.role === 'Manager'){
        let manager = employee;
        var html = `
        <div>
          <h1>${manager.name}</h1>
          <h2>Manager</h2>
          <div>
            <p>ID: ${manager.id}</p>
            <p>Email: ${manager.email}</p>
            <p>Office number: ${manager.office}</p>
          </div>
        </div>
        `
        team.push(html);
      }
      if(employee.role === 'Engineer'){
        let engineer = employee;
        var html = `
        <div>
          <h1>${engineer.name}</h1>
          <h2>Engineer</h2>
          <div>
            <p>ID: ${engineer.id}</p>
            <p>Email: ${engineer.email}</p>
            <p>Github: ${engineer.github}</p>
          </div>
        </div>
        `
        team.push(html);
      }
      if(employee.role === 'Intern'){
        let intern = employee;
        var html = `
        <div>
          <h1>${intern.name}</h1>
          <h2>Intern</h2>
          <div>
            <p>ID: ${intern.id}</p>
            <p>Email: ${intern.email}</p>
            <p>School: ${intern.school}</p>
          </div>
        </div>
        `
        team.push(html);
      }
    })
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
        </div
      </header>
      <main class="container my-5">
        <div>
          ${team}
      </main>
    </body>
    </html>
    `
 }

exports.templateBuilder = templateBuilder