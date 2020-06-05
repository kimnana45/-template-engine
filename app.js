const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const ManagerQ = require("./questions/ManagerQ");
const EngineerQ = require("./questions/EngineerQ");
const InternQ = require("./questions/InternQ");
const inquirer = require("inquirer");
const path = require("path");
const util = require("util");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const asyncWriteFile = util.promisify(fs.writeFile);
const render = require("./lib/htmlRenderer");

let employeeId = [];
let employees = [];

// init();

async function init(){
    try {
        const buildManager = await inquirer.prompt(ManagerQ);
        employeeId.push(buildManager.managerID);
        const manager =  new Manager(buildManager.managerName, buildManager.managerID, buildManager.managerEmail, buildManager.managerNumer);
        employees.push(manager);

        if (buildManager.addMember === 'Engineer') {
            buildEngineer();
        } else if (buildManager.addMember === 'Intern') {
            buildIntern();
        } else {
            console.log('Congratulation ,your team has been created!');
            renderHtml();
        }
    }
    catch(err) {
        console.log(err);
    }
}

async function buildEngineer(){
    try {
        const addEngineer = await inquirer.prompt(EngineerQ);
        employeeId.push(addEngineer.engineerID);
        const engineer = new Engineer(addEngineer.engineerName, addEngineer.engineerID, addEngineer.engineerEmail,addEngineer.engineerGithub);
        employees.push(engineer);

        if (addEngineer.addMember === 'Engineer') {
            buildEngineer();
        } else if (addEngineer.addMember === 'Intern') {
            buildIntern();
        } else {
            console.log('Congratulation, your team has been created!');
            renderHtml();
        }
    }
    catch (err) {
        console.log(err);
    }
}

async function buildIntern(){
    try {
        const addIntern = await inquirer.prompt(InternQ);
        employeeId.push(addIntern.internID);
        const intern = new Intern(addIntern.internName, addIntern.InternID, addIntern.internEmail, addIntern.internSchool);
        employees.push(intern);

        if (addIntern.addMember === 'Engineer') {
            buildEngineer();
        } else if (addIntern.addMember === 'Intern') {
            buildIntern();
        } else {
            console.log('Congratulation, your team has been created!');
            renderHtml();
        }
    }
    catch (err) {
        console.log(err);
    }
}

async function renderHtml(){
    try {
        const newHtml = render(employees);
        await asyncWriteFile(outputPath, newHtml);
    }
    catch (err) {
        console.log(err);
    }
}

init();




// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
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
// for the provided `render` function to work! 
