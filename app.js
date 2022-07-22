const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const internal = require("stream");
const team = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: 'number',
            name: 'id',
            message: 'Enter your ID number.'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address.'
        },
        {
            type: 'number',
            name: 'officenumber',
            message: 'Enter your office number.'
        }
    ]
    ).then((data) => {
        const manager = new Manager(data.name, data.id, data.email, data.officenumber);
        team.push(manager); 
        // console.log(team)
        employ();
    });

const employ = function() {
    inquirer.
    prompt([
            {
                type: 'list',
                name: 'employees',
                message: 'Enter the members of your team.',
                choices: ['Engineer', 'Intern', 'Finish']
            }
]).then((data) => {
    // console.log(data);
    if (data.employees === 'Engineer') {
        // console.log('OK')
        engine();
    }
    else if (data.employees === 'Intern') {
        // console.log('New!')
        intern();
    }
    else if (data.employees === 'Finish') {
        console.log('FINISH!');
        // console.log(render(team));
        group();
    };
})}

const engine = function() {
    //do inquirer questions for engineer here
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is their name?"
            },
            {
                type: 'number',
                name: 'id',
                message: 'Enter their ID number.'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter their email address.'
            },
            {
                type: 'input',
                name: 'github',
                message: 'Enter their Github profile name.'
            }
        ]
    ).then((data) => {
        const engineer = new Engineer(data.name, data.id, data.email, data.github);
        team.push(engineer); 
        // console.log(team);
        employ();
    });
};

const intern = function() {
    //do inquirer questions for intern here
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is their name?"
            },
            {
                type: 'number',
                name: 'id',
                message: 'Enter their ID number.'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter their email address.'
            },
            {
                type: 'input',
                name: 'school',
                message: 'Enter the name of the school they attend.'
            }
        ]
    ).then((data) => {
        const intrn = new Intern(data.name, data.id, data.email, data.school);
        team.push(intrn); 
        console.log(team);
        employ();
    });
};

const group = function() {
     fs.writeFile('team.html', render(team) , err => console.log(err));
}
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
