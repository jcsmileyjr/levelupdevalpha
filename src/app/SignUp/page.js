"use client"
import {useState} from 'react';
import { useRouter } from 'next/navigation';
import Timeline from '@/components/Timeline/timeline';
import Link from 'next/link';
import LoginPromoData from '../../libs/dummyData/loginPromoData.json';
import { signUpUserProfile } from '@/libs/api/signUpUserProfile';

// Page to create a user profile and save it
const SignUp = () => {
    const router = useRouter() //  Use to relocate user to another page

    const [email, setEmail] = useState(""); // user entered email address
    const [name, setName] = useState("") // user enter first name
    const [emailFormatError, setEmailFormatError] = useState(false); // User email validation feedback
    const [nameFormatError, setNameFormatError] = useState(false) // User name validation feedback
    const [duplicateEmailError, setDuplicateEmailError] = useState(false) // Unique email validation feedback

    // Function to create a user Profile and save it to local storage/database
    const createUserProfile = async (event) => {
        let pass = true;
        event.preventDefault();

        // test the email input field
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === false) {
            setEmailFormatError(true);
            pass = false;
        } else {
            setEmailFormatError(false);
            setDuplicateEmailError(false);
        }

        // Test the name input field
        if(name === "") {
            setNameFormatError(true);
            pass = false;
        } else {
            setNameFormatError(false);
        }

        // If both email and name input validation pass, check for duplicate email. If good, proceed. If bad, throw error
        if (pass) {
            let isUniqueEmail = await signUpUserProfile(email, name);
            if (!isUniqueEmail) {
                setDuplicateEmailError(true);
            } else {
                router.push('/Progress');
            }
        }        
    }

    return (
        <main className="flex min-h-screen flex-col p-4">
            <section className='flex flex-row justify-between gap-4'>
                {/*Landing page link */}
                <p className='font-bold text-primaryGreenDarker' href="/">Level Up Dev</p>
                <Link className='font-bold underline text-primaryGreenDarker' href="/">Go back to Landing Page</Link>
            </section>
            <div className="flex flex-col lg:flex-row mt-8 gap-6">
                <form className="flex flex-col flex-1 w-full m-auto lg:m-0 sm:w-2/4 lg:w-1/3 lg-6 lg:mt-0 bg-babygreen rounded-lg min-h-64 h-2/3 p-4 lg:p-8 pb-8">
                    {/* Email input field and error message */}
                    <label htmlFor='inputEmail' className='font-bold text-gray-700 text-2xl my-2'>Email address</label>
                    <input id="inputEmail" onChange={(e) => setEmail(e.target.value)} value={email} name="inputEmail"  className="p-2 border border-primaryGreen bg-white text-xl rounded-lg" type="email"></input>
                    <p className={`${emailFormatError ? 'hidden':'block'} my-4`}></p>
                    <p className={`${emailFormatError?'block' : 'hidden'} my-2 text-sm text-red-700`}>Not a valid email format</p>

                    {/* Name input field and error message */}
                    <label htmlFor='inputName' className='font-bold text-gray-700 text-2xl my-2'>Your Name</label>
                    <input id="inputName" onChange={(e) => setName(e.target.value)} name="inputName"  className="p-2 border border-primaryGreen bg-white text-xl rounded-lg" type="text"></input>
                    <p className={`${nameFormatError ? 'hidden':'block'} my-4`}></p>
                    <p className={`${nameFormatError ?'block' : 'hidden'} my-2 text-sm text-red-700`}>Please enter a name</p>                 

                    {/*Submit button */}
                    <button disabled={false} aria-label='Click to submit email and name to create an account.' type="submit" onClick={(e) => createUserProfile(e)} className="p-2 mt-6 border border-primaryGreen font-bold text-2xl bg-white hover:bg-primaryGreenDarker hover:text-white drop-shadow-md active:drop-shadow-2xl rounded-lg text-primaryGreen" >Sign Up</button> 
                    <p className={`${duplicateEmailError ?'block' : 'hidden'} my-2 text-sm text-red-700`}>Duplicate Email, please use a different email address!</p>                   
                </form >

                {/* Presentation Timeline Display */}
                <section className="w-full order-last mt-6 lg:mt-0 lg:order-first lg:w-2/3">
                    <h2 className="text-center text-2xl text-primaryGreen font-bold">Visual see all your Acheivements</h2>
                    <Timeline data={LoginPromoData} />
                </section>
            </div>            
        </main>
    )
}

export default SignUp;