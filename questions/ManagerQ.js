const questionsForManager = [
    {
        type: 'input',
        message: 'What is the name of your manager?',
        name: 'managerName',
    },
    {
        type: 'input',
        message: "What is the manager's ID?",
        name: 'managerID',
    },
    {
        type: 'input',
        message: "What is the manager's email?",
        name: 'managerEmail',
    },
    {
        type: 'input',
        message: "What is the manager's office number?",
        name: 'managerNumber',
    },
    {
        type: 'list',
        message: 'Would you like to add another team memeber?',
        choices: ['Engineer', 'Intern'],
        name: 'addMember',
    }
]

module.exports = questionsForManager;