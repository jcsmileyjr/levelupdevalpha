import getUserProfile from "./getUserProfile";

// Default user profile. Used for testing
const nullUserProfile = {
    "email" : "default.test.com", 
    "name" : "default", 
    "TitlesData" : [],
    "SkillsData" : [], 
    "ProjectsData" : [], 
    "ExperiencesData" : [], 
    "version" : 0
};

const updateEventUserProfile = async (actionItem, type) => {
    let userProfile = getUserProfile();
    if (userProfile === null) userProfile = nullUserProfile; // if getUserProfile() returns blank. Mainly affects testing
    let foundIndex;

    if (type === "Skills") {
        foundIndex = userProfile.SkillsData.findIndex( item => actionItem.actionID === item.actionID);
        userProfile.SkillsData[foundIndex] = actionItem;
    } else if (type === "Projects") {
        foundIndex = userProfile.ProjectsData.findIndex( item => actionItem.actionID === item.actionID);
        userProfile.ProjectsData[foundIndex] = actionItem;
    } else if (type === "Titles") {
        foundIndex = userProfile.TitlesData.findIndex( item => actionItem.actionID === item.actionID);
        userProfile.TitlesData[foundIndex] = actionItem;
    } else {
        foundIndex = userProfile.ExperiencesData.findIndex( item => actionItem.actionID === item.actionID);
        userProfile.ExperiencesData[foundIndex] = actionItem;
    }

    localStorage.setItem("levelupdev-profile", JSON.stringify(userProfile));
}

export {updateEventUserProfile}