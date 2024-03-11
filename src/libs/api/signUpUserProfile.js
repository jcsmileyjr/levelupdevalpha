import getAllUserProfiles from './getAllUserProfiles';
/**
 * Function that takes in an email and check to see if its a duplicate. 
 * If duplicate, return false
 * If not an duplicate, mock Netlify call to database (via localstorage) to save the profile and return true;
 */
const signUpUserProfile = async (userEmail, name) => {
    let userProfiles = await getAllUserProfiles();

    // Check if the email is already present in the array of user profiles
    let foundIndex = userProfiles.findIndex((data) => {
        return data.email === userEmail;
    });

    // TODO: Remove the event content when close to done. 
    
    // If the email isn't found, then create new profile and return true. If it is found, then return false. 
    if (foundIndex === -1) {
        const newUserProfile = {
            "email" : userEmail, 
            "name" : name, 
            "TitlesData" : [],
            "SkillsData" : [], 
            "ProjectsData" : [], 
            "ExperiencesData" : [], 
        };
        
        localStorage.setItem("levelupdev-profile", JSON.stringify(newUserProfile));
        return true;
    } else {
        return false;
    }
}

export {signUpUserProfile};