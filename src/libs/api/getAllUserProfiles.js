import LoginTestData from '../dummyData/loginTestData.json';

// Mocks Netlify function call to database to get all user profiles to be use on LogIn and SignUp functionality
// Checks if their is a local profile. If found, add to all user profiles
// TODO: Real Database, just grab the database data.
const getAllUserProfiles = async () => {
    const localData= JSON.parse(localStorage.getItem("levelupdev-profile"));
    if(localData === null) {
        return LoginTestData;
    } else {
        let profiles = [localData]
        return profiles;
    }
}

export default getAllUserProfiles