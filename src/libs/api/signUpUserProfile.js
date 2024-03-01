//Notes
// localStorage.setItem("Elder-data", JSON.stringify(parseData[foundIndex]));
// let previousSavedData = localStorage.getItem("Elder-data");
// let activityID = JSON.parse(localStorage.getItem("Elder-edit-entry"));
import TitlesData from '../dummyData/titlesTestData.json';
import SkillsData from '../dummyData/skillsTestData.json';
import ProjectsData from '../dummyData/projectsTestData.json';
import ExperiencesData from '../dummyData/experiencesTestData.json';

import GetUserProfiles from './getAllUserProfiles';
/**
 * Function that takes in an email and check to see if its a duplicate. 
 * If duplicate, return false
 * If not an duplicate, mock Netlify call to database (via localstorage) to save the profile and return true;
 */
const signUpUserProfile = async (userEmail, name) => {
    let userProfiles = await GetUserProfiles();

    // Check if the email is already present in the array of user profiles
    let foundIndex = userProfiles.findIndex((data) => {
        return data.email === userEmail;
    });

    // If the email isn't found, then create new profile and return true. If it is found, then return false. 
    if (foundIndex === -1) {
        const newUserProfile = {
            "email" : userEmail, 
            "name" : name, 
            "TitlesData" : TitlesData,
            "SkillsData" : SkillsData, 
            "ProjectsData" : ProjectsData, 
            "ExperiencesData" : ExperiencesData, 
        };
        console.log("profile", newUserProfile)
        localStorage.setItem("levelupdev-profile", JSON.stringify(newUserProfile));
        return true;
    } else {
        return false;
    }
}

export {signUpUserProfile};