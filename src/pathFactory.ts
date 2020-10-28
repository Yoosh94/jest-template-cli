import path = require('path');

export const createPathToTemplate = (fileType: string): string => {
    const pathToTemplate = path.join(__dirname, "templates",`template-${fileType}.txt`);
    return pathToTemplate;
}

export const createPathToNewFile = (fileLocation: string,fileName: string, fileType : string): string => {
    const pathToNewFile = path.join(fileLocation,`${fileName}.test.${fileType}`)
    return pathToNewFile
}