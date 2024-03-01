import LoginTestData from '../dummyData/loginTestData.json';

// Mocks Netlify function call to database to get all user profiles to be use on LogIn and SignUp functionality
const getAllUserProfiles = async () => {
    return LoginTestData;
}

export default getAllUserProfiles