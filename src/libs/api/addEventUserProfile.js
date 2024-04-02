import getUserProfile from "./getUserProfile"

// Default user profile. Mainly used for testing
const nullUserProfile = {
    "email" : "default.test.com", 
    "name" : "default", 
    "TitlesData" : [],
    "SkillsData" : [], 
    "ProjectsData" : [], 
    "ExperiencesData" : [], 
    "version" : 0
};

// Mocks Netlify function with local storage to save new skills, projects, etc.
const addEventUserProfile = async (actionItem, type) => {
    let userProfile = getUserProfile();
    if (userProfile === null) userProfile = nullUserProfile; // if getUserProfile() returns blank. Mainly affects testing

    if (type === "Skills") {
        userProfile.SkillsData.push(actionItem);
    } else if (type === "Projects") {
        userProfile.ProjectsData.push(actionItem);
    } else if (type === "Titles") {
        userProfile.TitlesData.push(actionItem);
    } else {
        userProfile.ExperiencesData.push(actionItem);
    }

    localStorage.setItem("levelupdev-profile", JSON.stringify(userProfile));
}

export {addEventUserProfile}