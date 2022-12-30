// Team Roster Card Styling 
const teamCards = team => {
// Manager Card Styling
    const managerCard = manager =>{
        return `
            <div class="card text-bg-success mb-3" style="max-width: 20rem;">
                <div class="card-header fs-2 fw-bold">${manager.getRole()}</div>
                    <div class="card-body my-2">
                        <h3 class="card-title">${manager.getName()}</h3>
                            <p class="card-text fs-5">
                                Manager ID: ${manager.getId()}
                                <br>
                                Email: ${manager.getEmail()}
                                <br>
                                Office Number: ${manager.getOfficeNumber()}
                            </p>
                    </div>
            </div>
        `
    }
// Engineer Card Styling 
    const engineerCard = data => {
        return `
            <div class="card text-bg-primary mb-3" style="max-width: 20rem;">
                <div class="card-header fs-2 fw-bold">${engineer.getRole()}</div>
                    <div class="card-body my-2">
                        <h3 class="card-title">${engineer.getName()}</h3>
                            <p class="card-text fs-5">
                                Engineer ID: ${engineer.getId()}
                                <br>
                                Email: ${engineer.getEmail()}
                                <br>
                                GitHub: ${engineer.getGithub()}
                            </p>
                    </div>
            </div>
        `
    };
// Intern Card Styling
    const internCard = data => {
        return `
            <div class="card text-bg-warning text-light mb-3" style="max-width: 20rem;">
                <div class="card-header fs-2 fw-bold">${intern.getRole()}</div>
                    <div class="card-body my-2">
                        <h3 class="card-title">${intern.getName()}</h3>
                            <p class="card-text fs-5">
                                Intern ID: ${intern.getId()}
                                <br>
                                Email: ${intern.getEmail()}
                                <br>
                                School Attended: ${intern.getSchoolName()}
                            </p>
                    </div>
            </div>
        `
    }
// Functions to push Cards into HTML Page once they are created



};


module.exports = team => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Roster</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
          <link rel="stylesheet"href="https://fonts.googleapis.com/css?family=Righteous">
  </head>
  
  <body>
    <div class="container">
      <nav class="navbar navbar-nav d-flex justify-content-lg-center sticky-top mt-5 bg-body-primary ">
              <div class="top-50 start-50 translate-middle-y">
                  <span class="navbar-brand fw-bolder fs-1 p-3" style="font-family: 'Righteous', cursive;">Our Company Team</span>
              </div>
      </nav>
      </div>
      <section class="container">
          <div class="my-2">
              <div class="mt-5 row justify-content-center gap-3">
                  ${teamCards(data)}
              </div>
          </section>
  
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
              integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
              crossorigin="anonymous"></script>
  </body>
  
  </html>
    `;
};
