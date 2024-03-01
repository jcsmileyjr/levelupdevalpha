
const getUserProfile = () => {
    const data= JSON.parse(localStorage.getItem("levelupdev-profile"));
    console.log("data: ", data)
    return data;
}

export default getUserProfile;