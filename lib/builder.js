const templateBuilder = employees => {
    var team = [];
    employees.forEach(employee => {
      if(employee.role === 'Manager'){
        let manager = employee;
        var html = `
        <div class="card column is-narrow m-4">
        <div class="card-header">
          <h1 class="card-header-title is-size-3">${manager.name}</h1>
          <h3 class="card-header-title">Manager</h3>
        </div>
        <div class="card-content">
            <p class="is-size-6">ID: ${manager.id}</p>
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
        <div class="card column is-narrow m-4">
          <div class="card-header">
            <h1 class="card-header-title is-size-3">${engineer.name}</h1>
            <h3 class="card-header-title">Engineer</h3>
          </div>
          <div class="card-content">
              <p class="is-size-6">ID: ${engineer.id}</p>
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
        <div class="card column is-narrow m-4">
          <div class="card-header">
            <h1 class="card-header-title is-size-3">${intern.name}</h1>
            <h3 class="card-header-title">Intern</h3>
          </div>
          <div class="card-content">
              <p class="is-size-6">ID: ${intern.id}</p>
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
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    </head>
    <body class="has-background-white-ter">
      <header class="box level has-background-primary">
          <h1 class="level-item is-size-3 has-text-weight-bold has-text-white">My Team</h1>
      </header>
      <main class="columns is-multiline m-5">
        ${team}
      </main>
    </body>
    </html>
    
    `
 }

exports.templateBuilder = templateBuilder