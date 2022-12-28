function teamCards = data => {
    const managerCard = manager =>{
        return `
        <div class="card border-secondary mb-3" style="max-width: 18rem;">
            <div class="card-header fs-3 fw-bold">Header 0.5</div>
                <div class="card-body my-3">
                    <h5 class="card-title">info card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
        `
    }
 

module.exports = (teamPrompts) => {
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
              <div class="mt-5 row gap-3">
                  ${teamCards(data)}
              </div>
          </section>
  
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
              integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
              crossorigin="anonymous"></script>
  </body>
  
  </html>
    `
};
