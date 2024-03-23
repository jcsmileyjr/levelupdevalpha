
const getActionItem = (type, actionID, userProfile) => {
    let foundIndex;

    if (type === "Skills") {
        foundIndex = userProfile.SkillsData.findIndex( item => actionID === item.actionID);
        return userProfile.SkillsData[foundIndex];
    } else if (type === "Projects") {
        foundIndex = userProfile.ProjectsData.findIndex( item => actionID === item.actionID);
        return userProfile.ProjectsData[foundIndex];
    } else if (type === "Titles") {
        foundIndex = userProfile.TitlesData.findIndex( item => actionID === item.actionID);
        return userProfile.TitlesData[foundIndex];
    } else {
        foundIndex = userProfile.ExperiencesData.findIndex( item => actionID === item.actionID);
        return userProfile.ExperiencesData[foundIndex];
    }
}

export {getActionItem}