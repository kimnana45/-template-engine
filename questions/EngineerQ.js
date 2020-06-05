const questionsForEngineer = [
    {
        type: 'input',
        message: 'What is the name of your engineer?',
        name: 'engineerName',
    },
    {
        type: 'input',
        message: "What is the engineer's ID?",
        name: 'engineerID',
    },
    {
        type: 'input',
        message: "What is the engineer's email?",
        name: 'engineerEmail',
    },
    {
        type: 'input',
        message: "What is the engineer's Github username?",
        name: 'engineerGithub',
    },
    {
        type: 'list',
        message: 'Would you like to add another team memeber?',
        choices: ['Engineer', 'Intern', "No, I'm done"],
        name: 'addMember',
    }
]

module.exports = questionsForEngineer;