import { QuestionCollection } from "inquirer";
import path = require('path');
const question : QuestionCollection = [
    {
        type: "list",
        name: "FileType",
        message: "File type?",
        choices: [{name:"javascript", value: 'js'},{name:"typescript", value: 'ts'}]
    },
    {
        type : "input",
        message : "Name of the file?",
        default : "test",
        name: "FileName"
    },
    {
        type: "list",
        name: "ReactComponent",
        message: "Are you testing a react componenent",
        choices: [{name:"yes", value: 'x'},{name:"no", value: null}]
    },
    {
        type: 'fuzzypath',
        name: 'FileLocation',
        itemType: 'directory',
        rootPath: process.cwd(),
        message: 'Select your target directory. Note: type the folder name for better results',
        excludePath: (nodePath:string) => nodePath.includes('node_modules') || nodePath.includes('.git'),
        depthLimit: 5
    }
    // {
    //     type : "input",
    //     message : `Save location`,
    //     default : process.cwd(),
    //     name: "FileLocation",
    //     transformer: (input) => {
    //         const envSpecificPath = path.normalize(process.cwd());
    //         return path.join(envSpecificPath,input);
    //     },
    //     filter: (input)
    // }
];

module.exports = question;