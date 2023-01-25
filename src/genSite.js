module.exports = function genSite(team) {
    const site = () => {
        let template = ``

        team.forEach(member => {
            if (member.getRole() === 'Intern') {
                template += ` <div class="col-sm-4 py-3">
                <div class="card shadow rounded">
                  <div class="text-center text-light bg-primary">
                      <p class="fs-2"></i>${member.name}</p>
                      <p class="fs-3"><i class="fa-solid fa-user-graduate"></i>Intern</p>
                  </div>
                  <div class="card-body list-group p-3">
                      <li class="list-group-item">ID: ${member.id}</li>
                      <li class="list-group-item">Email: <a href="mailto:${member.email}">${member.email}</a></li>
                    <li class="list-group-item">School: ${member.school}</li>
                  </div>
                </div>
              </div>`
            } else if (member.getRole() === 'Manager') {
                template += ` <div class="col-sm-4 py-3">
                <div class="card shadow rounded">
                  <div class="text-center text-light bg-primary">
                      <p class="fs-2">${member.name}</p>
                      <p class="fs-3"><i class="fas fa-coffee"></i>Manager</p>
                  </div>
                  <div class="card-body list-group p-3">
                      <li class="list-group-item">ID: ${member.id}</li>
                      <li class="list-group-item">Email: <a href="mailto:${member.email}">${member.email}</a></li>
                    <li class="list-group-item">Office Number: ${member.office}</li>
                  </div>
                </div>
              </div>`
            } else {
                template += `<div class="col-sm-4 py-3">
                <div class="card shadow rounded">
                  <div class="text-center text-light bg-primary">
                      <p class="fs-2">${member.name}</p>
                      <p class="fs-3"><i class="fa-solid fa-glasses"></i>Engineer</p>
                  </div>
                  <div class="card-body list-group p-3">
                      <li class="list-group-item">ID: ${member.id}</li>
                      <li class="list-group-item">Email: <a href="mailto:${member.email}">${member.email}</a></li>
                    <li class="list-group-item"><a href="https://www.github.com/${member.github}">${member.github}</a></li>
                  </div>
                </div>
              </div>`
            }
        })
        return `${template}`
    }
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"rel="stylesheet"> </link>
        <script src="https://kit.fontawesome.com/d686ae585f.js" crossorigin="anonymous"></script>
    </head>
    <body>
        <header class="px-4 py-5 text-center text-light bg-danger">
            <h1 class="display-5 fw-bold">Team Generator</h1>
            <div class="col-lg-6 mx-auto">
              <p class="lead mb-4">Below you will find information regarding your team!</p>
            </div>
          </header>
          <div class="container my-5">
            <div class="row justify-content-center">
    
            ${site()}
    
                  </div>
              </div>
    </body>
    </html>`
}