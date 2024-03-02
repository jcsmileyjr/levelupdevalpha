import getUserProfile from "./getUserProfile"

// Mocks Netlify function with local storage to save new skills, projects, etc.
const addEventUserProfile = async (actionItem, type) => {
    const userProfile = getUserProfile();

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