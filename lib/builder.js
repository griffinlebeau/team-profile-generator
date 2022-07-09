




const htmlBuilder = employees => {
  for (var employee of employees) {
      if (employee.role === 'Manager') {
        return `
        <div>
          ${employee.role}
          ${employee.name}
          ${employee.id}
          ${employee.email}
          ${employee.office}
        </div>
        `

      } else if (employee.role === 'Engineer') {
        return `
        <div>
          ${employee.role}
          ${employee.name}
          ${employee.id}
          ${employee.email}
          ${employee.github}
        </div>
        `

      } else {
        return `
        <div>
          ${employee.role}
          ${employee.name}
          ${employee.id}
          ${employee.email}
          ${employee.school}
        </div>
        `

        

      }
  }
  
  
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
        ${htmlBuilder(employees)}
      </main>
    </body>
    </html>
    `;
  };
  module.exports = htmlBuilder()