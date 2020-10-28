import { findAndReplace } from "../templater";
import { PromptKeys } from "../models";

describe("templater", () => {
  beforeEach(() => {

  });
  it("Find and replaces replaces the description correctly", () => {
    const bufferToReplace = Buffer.from("{{ description }}");
    const promptKeys = {
      FileName: "This will be the new text"
    } as PromptKeys 
    const response = findAndReplace(bufferToReplace,promptKeys);
    expect(response).toBe(promptKeys.FileName); 
  })

  it("Find and replaces adds the react import when it is meant to", () => {
    const bufferToReplace = Buffer.from("{{ React }}");
    const promptKeys = {
      ReactComponent: 'x'
    } as PromptKeys 
    const response = findAndReplace(bufferToReplace,promptKeys);
    expect(response).toBe('import React from "react";'); 
  })

  it("Find and replaces removes the react template when it is not neede", () => {
    const bufferToReplace = Buffer.from("{{ React }}");
    const promptKeys = {
      ReactComponent : null
    } as unknown as  PromptKeys;
    const response = findAndReplace(bufferToReplace,promptKeys);
    expect(response).toBe(''); 
  })
});
  