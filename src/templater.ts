import { PromptKeys } from "./models";

export const findAndReplace = (toBeReplaced : Buffer, promptAnswers : PromptKeys) : string => {
    const dataAsString = toBeReplaced.toString();
        const replacedWithDescription = dataAsString.replace("{{ description }}", promptAnswers.FileName);
        console.log(promptAnswers.ReactComponent);
        const replacedWithReact = promptAnswers.ReactComponent === null ? replacedWithDescription.replace("{{ React }}", '') : replacedWithDescription.replace("{{ React }}", 'import React from "react";')
        return replacedWithReact;
}