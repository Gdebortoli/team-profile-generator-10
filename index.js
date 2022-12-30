// Requiring dependencies for functionality in the code 
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
// Requiring information from Lib pages 
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const trTemplate = require("./src/trTemplate");
// Requiring path so we can reroute it to the correct folder location instead of the root
const distFile = path.join(__dirname, "dist");
const employeeRoster = path.join(distFile, "index.html");


const teamRoster = [];

// Team Prompts
const teamPrompts = () => {
  console.log(`
=========================================================================
Please answer the following questions regarding your Employee's and Team.
=========================================================================
`);
  // Manager Prompts - Starting the Data Entry 
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'managerName',
        message: "What your Team Manager's name? *Required*",
      },
      {
        type: 'input',
        name: 'managerId',
        message: 'What is the employee ID of your Team Manager?',

      },
      {
        type: 'input',
        name: 'managerEmail',
        message: "What is your Team Manager's Email?",

      },
      {
        type: 'number',
        name: 'officeNumber',
        message: "What is the Team Manager's office number? *Required*",
        validate: officeNumInput => { // validating they entered in a github username
          if (officeNumInput) {
            return true;
          } else {
            console.log('Please enter a valid Office Number!');
            return false;
          }
        },
      }
    ])
    .then((answer) => {
      const manager = new Manager(answer.managerName, answer.managerId, answer.managerEmail, answer.officeNumber);
      teamRoster.push(manager);
      console.log(manager);
      console.log(teamRoster);
      addTeamMember();
    })
};

// Asking to add Team Member and what type
const addTeamMember = () => {
  inquirer.prompt([
    { // giving them the option of what team member they would like to add or if they are done
      type: 'list',
      name: 'addTeamMember',
      message: 'Which type of Team Member would you like to add to the roster?',
      choices: ['Engineer', 'Intern', 'None. My Roster is complete!'],
    }
  ])
    // once they choose a team member running the corresponding function based on their choice and the creating the page if they are finished
    .then((choice) => {
      switch (choice.addTeamMember) {
        case 'Engineer':
          addEngineer();
          break;
        case 'Intern':
          addIntern();
          break;
        case 'None. My Roster is complete!':
          console.log(`
                =========================================================================
                          Congratulations! You have finished your Team Roster.
                =========================================================================
                `)
          createRoster();
      }
    })
}

// Engineer Questions - When decidding to add an engineer 
const addEngineer = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'engineerName',
        message: "What is the Engineer's name?",
      },
      {
        type: 'input',
        name: 'engineerId',
        message: 'What is the employee ID of your Engineer?',

      },
      {
        type: 'input',
        name: 'engineerEmail',
        message: "What is your Engineer's Email?",

      },
      {
        type: 'input',
        name: 'engineerGithub',
        message: "What is the Engineer's github username?",
        validate: githubInput => { // validating they entered in a github username
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter a valid Github Username!');
            return false;
          }
        }

      },
    ])
    .then((answer) => {
      const engineer = new Engineer(answer.engineerName, answer.engineerId, answer.engineerEmail, answer.engineerGithub);
      teamRoster.push(engineer);
      console.log(engineer);
      console.log(teamRoster);
      addTeamMember();
    })
}
//Intern Questions - When adding an intern 
const addIntern = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'internName',
        message: "What is the Intern's name?",
      },
      {
        type: 'input',
        name: 'internId',
        message: 'What is the employee ID of your Intern?',

      },
      {
        type: 'input',
        name: 'internEmail',
        message: "What is your Intern's Email?",

      },
      {
        type: 'input',
        name: 'internSchoolName',
        message: "What school did the intern attend? *Required*",
        validate: schoolNameInput => { // validating they entered in a school
          if (schoolNameInput) {
            return true;
          } else {
            console.log('Please enter the school your Intern attended.')
          }
        }

      },
    ])
    .then((answer) => {
      const intern = new Intern(answer.internName, answer.internId, answer.internEmail, answer.internSchoolName);
      teamRoster.push(intern);
      console.log(intern);
      console.log(teamRoster);
      addTeamMember();
    });
}
// Create the page function 
const createRoster = () => {
  fs.writeFileSync(employeeRoster, trTemplate(teamRoster), 'utf-8');
  console.log('Roster Page Completed :) This is your team!');
}


teamPrompts(); 




