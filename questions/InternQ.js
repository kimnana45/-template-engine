const questionsForIntern = [
    {
        type: 'input',
        message: 'What is the name of your intern?',
        name: 'internName',
    },
    {
        type: 'input',
        message: "What is the intern's ID?",
        name: 'internID',
    },
    {
        type: 'input',
        message: "What is the intern's email?",
        name: 'internEmail',
    },
    {
        type: 'input',
        message: "What is the name of the school your intern is attending?",
        name: 'internSchool',
    },
    {
        type: 'list',
        message: 'Would you like to add another team memeber?',
        choices: ['Engineer', 'Intern', "No, I'm done"],
        name: 'addMember',
    }
]

module.exports = questionsForIntern;