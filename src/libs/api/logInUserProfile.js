
import getAllUserProfiles from './getAllUserProfiles';

/**
 * Function to check the API (fake data) for an email. If true, return profile. If false, return negative feedback.
 * @param {string} email - user input in email format
 * @returns 
 */
const logInUserProfile = async (email) => {
    let userProfiles = await getAllUserProfiles();
    let submission = userProfiles.find( (user) => user.email === email);

    if(submission === undefined) {
        return false;
    } else {
        localStorage.setItem("levelupdev-profile", JSON.stringify(submission));
        return true;
    }
}

export {logInUserProfile}