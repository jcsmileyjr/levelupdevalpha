// function mocking netlify functions to get a specific user data
const getUserProfile = () => {
    const data= JSON.parse(localStorage.getItem("levelupdev-profile"));
    return data;
}

export default getUserProfile;