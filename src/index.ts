// possible arugments
// -R --react for react components
// -D --description Provide a desciroption
// -N --name of file
// -F --filename

import inquirer = require('inquirer');
import question = require('./questions');
import path = require('path');
import { readTemplate } from './reader';
import { findAndReplace } from './templater';
import { createTestFile, doesFileAlreadyExist } from './writer';
import { PromptKeys } from './models';
import { createPathToNewFile, createPathToTemplate } from './pathFactory';

inquirer.registerPrompt('fuzzypath', require('inquirer-fuzzy-path'))

inquirer.prompt<PromptKeys>(question).then((answers) =>{
    const { FileType, FileLocation,FileName } = answers;
    const pathToTemplate = createPathToTemplate(FileType);
    const pathToNewFile = createPathToNewFile(FileLocation,FileName, FileType)
    readTemplate(pathToTemplate).then(buffer => {
        var finalFile = findAndReplace(buffer, answers);
        doesFileAlreadyExist(pathToNewFile).then(exists => {
            if(exists){
                console.error(`File at location ${pathToNewFile} already exists`);
                return;
            }
            createTestFile(finalFile, pathToNewFile).then(() => {
                console.log("File created!")
                return;
            })
        })
    })
});

