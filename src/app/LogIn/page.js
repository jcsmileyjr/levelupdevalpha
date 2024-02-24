"use client"
import {useState} from 'react';
import { useRouter } from 'next/navigation';
import Timeline from '@/components/Timeline/timeline';
import Link from 'next/link';
import LoginDummyData from '../../libs/dummyData/loginTestData.json';
import LoginPromoData from '../../libs/dummyData/loginPromoData.json';

/**
 * Login page
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
        console.log("getUserProfile()")
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
        console.log("submitLogInCredential()")
    }

    // Enable and Disable the submit button
    const enableSubmission = () => {
        console.log("enableSubmission()")
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
            <div className="flex flex-col lg:flex-row mt-8 gap-4">
                <form className="flex flex-col flex-1 w-full m-auto lg:m-0 sm:w-2/4 lg:w-1/3 lg-6 lg:mt-0 bg-babygreen min-h-64 h-2/3 p-4 lg:p-8 pb-8">
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

                {/* Presentation Timeline Display */}
                <section className="w-full order-last mt-6 lg:mt-0 lg:w-2/3">
                    <h2 className="text-center text-2xl text-primaryGreen font-bold">Visual see all your Acheivements</h2>
                    <Timeline data={LoginPromoData} />
                </section>
            </div>
        </main>
    )
}

export default LogIn;