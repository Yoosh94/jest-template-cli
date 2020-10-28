import { doesFileAlreadyExist } from "../writer";
import fs from 'fs';
jest.mock('fs');
describe("writer", () => {
  beforeEach(() => {
    fs.promises = require('fs/promises');
  });
  it("doesAFileExist return true when a file exists", async () => {
    fs.promises.access = jest.fn().mockImplementation(() =>  Promise.resolve());
    const result = await doesFileAlreadyExist('pathtoFile');
    expect(result).toBe(true);
  })
});
  