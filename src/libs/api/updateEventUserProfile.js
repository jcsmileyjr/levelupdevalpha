import getUserProfile from "./getUserProfile"

const updateEventUserProfile = async (actionItem, type) => {
    const userProfile = getUserProfile();
    let foundIndex;

    if (type === "Skills") {
        foundIndex = userProfile.SkillsData.findIndex( item => Number(actionItem.actionID) === Number(item.actionID));
        userProfile.SkillsData[foundIndex] = actionItem;
    } else if (type === "Projects") {
        foundIndex = userProfile.ProjectsData.findIndex( item => Number(actionItem.actionID) === Number(item.actionID));
        userProfile.ProjectsData[foundIndex] = actionItem;
    } else if (type === "Titles") {
        foundIndex = userProfile.TitlesData.findIndex( item => Number(actionItem.actionID) === Number(item.actionID));
        userProfile.TitlesData[foundIndex] = actionItem;
    } else {
        foundIndex = userProfile.ExperiencesData.findIndex( item => Number(actionItem.actionID) === Number(item.actionID));
        userProfile.ExperiencesData[foundIndex] = actionItem;
    }

    localStorage.setItem("levelupdev-profile", JSON.stringify(userProfile));
}

export {updateEventUserProfile}