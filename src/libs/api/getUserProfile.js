
const getUserProfile = () => {
    const data= JSON.parse(localStorage.getItem("levelupdev-profile"));
    //const data = await response.json();
    return data;
}

export default getUserProfile;