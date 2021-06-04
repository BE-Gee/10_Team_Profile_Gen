const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const employee = [];
function start() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "employeeName",
        message: "Add new name",
      },
      {
        type: "input",
        name: "email",
        message: "Add employee email",
      },
      {
        type: "confirm",
        name: "finish",
        message: "Would you like to add another",
      },
    ])
    .then((answers) => {
      employee.push(answers);
      if (answers.finish) {
        start();
      } else {
        const results = buildPage(employee);
        generatePage(results);
      }
    });
}
function buildPage(team) {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${team.map((employee) => {
                  return `<div>${employee.employeeName}<div/>
                  <div> ${employee.email}<div?>`;
                })}
            </div>
        </div>
    </div>
</body>
</html>
    `;
}
function generatePage(template) {
  fs.writeFileSync("index.html", template, "utf-8");
}
start();
