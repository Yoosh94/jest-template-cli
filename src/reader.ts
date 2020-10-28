import fs = require('fs');


export const readTemplate = (location:string) : Promise<Buffer> => {
     return fs.promises.readFile(location).then((bufferData:Buffer) => {
        return bufferData;
    });
}