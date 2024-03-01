import LoginTestData from '../dummyData/loginTestData.json';

// Mocks Netlify function call to database to get all user profiles to be use on LogIn and SignUp functionality
const getAllUserProfiles = async () => {
    const localData= JSON.parse(localStorage.getItem("levelupdev-profile"));

    if(localData === null) {
        return LoginTestData;
    } else {
        LoginTestData.push(localData);
        return LoginTestData;
    }
}

export default getAllUserProfiles