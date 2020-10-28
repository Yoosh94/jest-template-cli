import { readTemplate } from "../reader";
import fs from 'fs';

jest.mock('fs');

describe("reader", () => {
  beforeEach(() => {
    fs.promises = require('fs/promises');
  });
  
  it("returns the data from the file as a buffer", async () => {
    
    const returnedBuffer = Buffer.from("This is some data from a text.");
    fs.promises.readFile = jest.fn().mockResolvedValue(returnedBuffer);
    const response = await readTemplate('someLocation')
    expect(response).toBe(returnedBuffer);
  })
});
  