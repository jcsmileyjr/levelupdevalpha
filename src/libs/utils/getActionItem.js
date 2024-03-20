
const getActionItem = (type, actionID, userProfile) => {
    let foundIndex;

    if (type === "Skills") {
        foundIndex = userProfile.SkillsData.findIndex( item => Number(actionID) === item.actionID);
        return userProfile.SkillsData[foundIndex];
    } else if (type === "Projects") {
        foundIndex = userProfile.ProjectsData.findIndex( item => Number(actionID) === item.actionID);
        return userProfile.ProjectsData[foundIndex];
    } else if (type === "Titles") {
        foundIndex = userProfile.TitlesData.findIndex( item => Number(actionID) === item.actionID);
        return userProfile.TitlesData[foundIndex];
    } else {
        foundIndex = userProfile.ExperiencesData.findIndex( item => Number(actionID) === item.actionID);
        return userProfile.ExperiencesData[foundIndex];
    }
}

export {getActionItem}