"use client"
import {useState} from 'react';
import { useRouter } from 'next/navigation';
import LoginDummyData from '../../libs/dummyData/loginTestData.json';

/**
 * Login page
 * DONE - function (check email) that checks email to see if its formatted correctly.
 * If bad format, return error. If good, continues
 * DONE - Create dummy players array of player object [email, name]
 * 
 * DONE - Update the form to not submit, unless there is data in the input
 * DONE - function (check email) connects with dummydata, check if email is in array, return true/false. 
 * If true, return name of person to localStorage
 * DONE - Create starter Progress page. If checkEmail function is true, moves player to Progress page
 * TODO - Error functionality that responds to checkEmail function. 
 * @returns 
 */
const LogIn = () => {
    const router = useRouter() //  Use to relocate user to another page

    const [email, setEmail] = useState(""); // user entered email address
    const [emailFormatError, setEmailFormatError] = useState(false); // User input validation feedback
    const [invalidLogin, setInvalidLogin] = useState(false); // User login submission validation feedback

    /**
     * Function to check the API (fake data) for an email. If true, return profile. If false, return negative feedback.
     * @param {string} email - user input in email format
     * @returns 
     */
    const getUserProfile = (email) => {
        let submission = LoginDummyData.find( (user) => user.email === email);

        if(submission === undefined) {
            return false;
        } else {
            return true;
        }
    }
    
    // Check user input to see if meet email guidlines & submit content to API for true/false return
    const submitLogInCredential = () => {
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === false) {
            setEmailFormatError(true);
            return;
        } else {
            setEmailFormatError(false);
            setInvalidLogin(false);

            if(getUserProfile(email)) {
                router.push('/Progress')
            } else {
                setInvalidLogin(true);
            }
        }
    }

    // Enable and Disable the submit button
    const enableSubmission = () => {
        if(email.length > 0) {
            return false;
        } else {
            return true;
        }
    }

    return (
        <main className="flex min-h-screen flex-col p-4">
            <section>
                <p className="font-bold underline text-primaryGreen">Level Up Dev - Log-in</p>
            </section>
            <div className="flex justify-center items-center mt-12">
                <section className="flex flex-row justify-center px-8 w-full sm:w-2/4 h-2/3 min-h-56 max-w-96 bg-babygreen">
                    <div className="flex-1"></div>
                    <form className="flex flex-col flex-1">
                        <label htmlFor='loginInputField' className="font-bold text-primaryGreen text-2xl my-2">Email</label>
                        <input id="loginInputField" name="loginInputField" onChange={(e) => setEmail(e.target.value) } className="p-2 border border-primaryGreen bg-white text-xl rounded-lg" type="email"></input>
                        <p className={`${emailFormatError?'visible' : 'invisible'}`}>Not a valid email format</p>
                        <p className={`${invalidLogin?'visible' : 'invisible'}`}>Invalid email address</p>
                        <button disabled={enableSubmission()} aria-label='Click to submit email for log in submission' type="submit" onClick={() => submitLogInCredential()} className="p-2 mt-4 border border-primaryGreen font-bold text-2xl bg-white rounded-lg text-primaryGreen" type="button">Log In</button>
                    </form >
                    <div className="flex-1"></div>
                </section>
            </div>
        </main>
    )
}

export default LogIn;