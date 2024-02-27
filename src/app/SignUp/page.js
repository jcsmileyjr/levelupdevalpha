"use client"
import {useState} from 'react';
import { useRouter } from 'next/navigation';
import Timeline from '@/components/Timeline/timeline';
import Link from 'next/link';
import LoginPromoData from '../../libs/dummyData/loginPromoData.json';

const SignUp = () => {
    return (
        <main className="flex min-h-screen flex-col p-4">
            <section className='flex flex-row justify-between'>
                {/*Landing page link */}
                <Link className='font-bold underline text-primaryGreen' href="/">Level Up Dev - Sign Up</Link>
                <Link className='font-bold underline text-primaryGreen' href="/">Go back to Landing Page</Link>
            </section>
            <div className="flex flex-col lg:flex-row mt-8 gap-6">
                <form className="flex flex-col flex-1 w-full m-auto lg:m-0 sm:w-2/4 lg:w-1/3 lg-6 lg:mt-0 bg-babygreen rounded-lg min-h-64 h-2/3 p-4 lg:p-8 pb-8">
                    {/* Email input field */}
                    <label htmlFor='inputEmail' className='font-bold text-gray-700 text-2xl my-2'>Email address</label>
                    <input id="inputEmail" name="inputEmail"  className="p-2 border border-primaryGreen bg-white text-xl rounded-lg" type="email"></input>

                    {/* Name input field */}
                    <label htmlFor='inputName' className='font-bold text-gray-700 text-2xl my-2'>First Name</label>
                    <input id="inputName" name="inputName"  className="p-2 border border-primaryGreen bg-white text-xl rounded-lg" type="text"></input>

                    {/*Submit button */}
                    <button disabled={false} aria-label='Click to submit email and name to create an account.' type="submit" onClick={(e) => console.log("it works")} className="p-2 mt-6 border border-primaryGreen font-bold text-2xl bg-white rounded-lg text-primaryGreen" >Sign Up</button>                    
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

export default SignUp;