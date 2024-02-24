"use client"
import {useState} from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
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
 * DONE - Error functionality that responds to checkEmail function. 
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
        setInvalidLogin(false);
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === false) {
            setEmailFormatError(true);
        } else {
            setEmailFormatError(false);

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
                {/*Landing page link */}
                <Link className='font-bold underline text-primaryGreen' href="/">Level Up Dev - Log-in</Link>
            </section>
            <div className="flex justify-center items-center mt-12">
                <section className="flex flex-row justify-center px-8 w-full sm:w-2/4 h-2/3 pb-8 min-h-64 max-w-96 bg-babygreen">
                    <div className="flex-1"></div>
                    <form className="flex flex-col flex-1 pt-4">
                        {/* Email input field */}
                        <label htmlFor='loginInputField' className="font-bold text-gray-700 text-2xl my-2">Email</label>
                        <input id="loginInputField" name="loginInputField" onChange={(e) => setEmail(e.target.value) } className="p-2 border border-primaryGreen bg-white text-xl rounded-lg" type="email"></input>
                        
                        {/*Error messages */}
                        <p className={`${emailFormatError || invalidLogin? 'hidden':'block'} my-4`}></p>
                        <p className={`${emailFormatError?'block' : 'hidden'} my-2 text-sm text-red-700`}>Not a valid email format</p>
                        <p className={`${invalidLogin?'block' : 'hidden'} my-2 text-sm text-red-700`}>Invalid email address</p>
                        
                        {/*Submit button */}
                        <button disabled={enableSubmission()} aria-label='Click to submit email for log in submission' type="submit" onClick={() => submitLogInCredential()} className="p-2 mt-0 border border-primaryGreen font-bold text-2xl bg-white rounded-lg text-primaryGreen" >Log In</button>
                        
                        <p className={` text-center text-gray-700 mt-4 text-sm`}>Psst!!! Work in Progress, use abc@gmail.com for now.</p>

                        {/*Sign up link */}
                        <p className='text-center text-sm text-primaryGreen mt-8 font-bold'>Sign Up &#40;WIP&#41;</p>
                    </form >
                    <div className="flex-1"></div>
                </section>
            </div>
        </main>
    )
}

export default LogIn;