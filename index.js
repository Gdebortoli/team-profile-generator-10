const fs = require("fs"); 
const inquirer = require("inquirer"); 
// Requiring information from Lib pages 
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const generatePage = require('./src/trTemplate')

// 
const prompts = () => {
    console.log(`
=======================================================================
Please answer the following questions about yourself and your team members 
to create a roster for your Employees. 
=======================================================================
`);
return inquirer.prompt([
        {
            type: 'input',
            name: 'employer',
            message: "What is your Team Manager's name? *REQUIRED*",
            validate: employerInput => {
                if (employerInput) {
                    return true;
                } else {
                    console.log("Please enter your Manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employee id',
            message: "Please enter your Team Manager's employee ID."
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter your Team Manager's email."
        }, 
        {
            type: 'input',
            name: 'office number',
            message:"Please enter your Team Manager's office number."
        }, 
        {
            type: 'input',
            name: 'github',
            message:'Please enter your GitHub username.*REQUIRED*', 
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your Github username!');
                    return false;
                }
            }
        }, 
    ])
// Function to write html file
    // .then(answers => {
    //     console.log(answers);
    //     fs.writeFileSync("./dist/teamRoster.html", teamRosterTemplate(answers))
    //     }
    //)
};
// Function call to initialize app
        prompts();
        


  
