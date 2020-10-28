import { createPathToNewFile, createPathToTemplate } from "../pathFactory";

describe("pathFactory", () => {
  beforeEach(() => {

  });
  it.each([['js'],['ts']])("Creates the path to the template correctly", (fileType: string) => {
    var result = createPathToTemplate(fileType);
    expect(result).toContain(`template-${fileType}.txt`)
  })

  it('Creates the path to the new files location correctly', () => {
    const location = 'location';
    var fileName = 'fileName';
    var fileType= 'js';
    var result = createPathToNewFile(location,fileName,fileType);
    expect(result).toContain(`${location}\\fileName.test.${fileType}`)
  });
});
  