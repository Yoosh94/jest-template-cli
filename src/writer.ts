import fs = require('fs');

export const createTestFile = (dataToWrite: string, path: string): Promise<void> => {
    console.log(`This is the path we are writing to ${path}`)
    return fs.promises.writeFile(path,dataToWrite).then(() => { return; })
};

export const doesFileAlreadyExist = (pathToFile: string): Promise<boolean> => {
    return fs.promises.access(pathToFile, fs.constants.F_OK).then(() =>{
        return true;
    })
    .catch(() => {
        return false;
    })
}