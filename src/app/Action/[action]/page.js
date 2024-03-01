"use client"
import Link from 'next/link';
import {useState, useEffect} from 'react';
import getUserProfile from '@/libs/api/getUserProfile';

const getData = (type, userData) => {
    if(type === 'Skills') return userData.SkillsData;
    if(type === 'Projects') return userData.ProjectsData;
    if(type === 'Titles') return userData.TitlesData;
    if(type === 'Experiences') return userData.ExperiencesData;
}

/**
 * 
 * @param {string} action - slug use to call the page 
 * @returns http://localhost:3000/Action/skills
 */
const Action = ({params: {action}}) => {
    const [actionData, setActionData] = useState([]);
    const [userProfile, setUserProfile] = useState({});

    useEffect(() => {
        let userData = getUserProfile();
        let data = getData(action, userData);

        console.log("userdata: ", userData);
        setUserProfile(userData);
        setActionData(data);     
    }, [])


    // Filters the array of objects for any that hasn't been achieved.
    const wants = actionData.filter((data) => {
        if(data.date === "") return data
    })

    // Filter the array of objects for any that has been acheived.
    const acheived = actionData.filter((data) => {
        if(data.date.length > 0) return data;
    })
    
    return (
        <main className="flex min-h-screen flex-col p-4">
            <section className="flex justify-between items-center mb-6">
                {/*navigation */}
                <Link className='font-bold underline text-primaryGreen text-base' href="/Progress">Go to Progress Page - {userProfile.name}&#39;s {action}</Link>
                <Link className='font-bold text-gray-700 p-2 mt-0 border border-primaryGreen font-bold text-base bg-white rounded-lg' href="/">Sign out</Link>
            </section>
            <div className='flex flex-col lg:flex-row gap-6'>
                {/* Adding new skills to the Wants category */}
                <section className='flex-1 flex flex-col gap-6'>
                    <form id="createAction" className='flex flex-col sm:items-center bg-babygreen rounded-lg px-12 sm:pl-0 pb-6 px-4'>
                        <h1 className='font-bold underline text-2xl text-primaryGreen my-6 text-center'>Decide what SKILL you want to have</h1>
                        <label className='text-xl text-gray-700 font-bold mb-2' htmlFor='inputTitle'>Title</label>
                        <div className='mb-6 w-full sm:w-2/4'>
                            <input id="inputTitle" type="text" className='w-full p-2 border border-primaryGreen bg-white text-xl rounded-lg'></input>
                            <p className='text-gray-700 text-base'>20 character count limit</p>
                        </div>

                        <label className='text-xl text-gray-700 font-bold mb-2' htmlFor='inputReason'>Reason</label>
                        <div className='mb-6 w-full sm:w-2/4'>
                            <textarea id="inputReason" type="text" className='w-full p-2 border border-primaryGreen bg-white text-xl rounded-lg'></textarea>
                            <p>40 character count limit</p>
                            <p className='w-full mt-2'><span className='font-bold'>Definition:</span> In 20 words or less, why do you want to learn this skill? How will it impact your career journey?</p>
                        </div>
                        <button type="submit" className='p-2 mt-0 border border-primaryGreen font-bold text-2xl bg-white rounded-lg text-primaryGreen w-1/2 sm:w-1/4 self-center'>ADD</button>
                    </form>
                    <div className=' bg-babygreen rounded-lg min-h-40'>
                        <h2 className='text-center font-bold underline text-2xl text-primaryGreen my-6'>List  of skills You Want </h2>
                        <div className='flex flex-row flex-wrap px-12 sm:px-6'>
                            {
                                wants.map( (item, index) => (
                                    <p key={`item-${index}`} className='mb-2 basis-6/12 sm:basis-3/12'>{item.title}</p>
                                ))
                            }
                        </div>
                    </div>
                </section>

                {/* Confirm that a skill has been acomplishsed */}
                <section className='flex-1 flex flex-col gap-6 justify-between'>
                    <div className='flex flex-col sm:items-center bg-babygreen rounded-lg px-12 sm:pl-0 pb-6 px-4 flex-1'>
                        <h1 className='font-bold underline text-2xl text-primaryGreen my-6 text-center'>Confirmed Skilled Learned</h1>

                        <label className='text-xl text-gray-700 font-bold mb-2' htmlFor='selectReason'>Find Skill</label>
                        <div className='mb-6 w-full sm:w-2/4'>
                            <select id="selectReason" type="text" className='w-full p-2 border border-primaryGreen bg-white text-xl rounded-lg'>
                                {
                                    wants.map((item, index) => (
                                        <option key={`${item}-${index}`}>{item.title}</option>
                                    ))
                                }
                            </select>
                            <p>40 character count limit</p>
                            <p className='w-full mt-2'><span className='font-bold'>Definition:</span> Ready to place on your resume, competency to develop production-ready software, and have built something that can be used by others with it.</p>
                        </div>
                        <button type="submit" className='p-2 mt-0 border border-primaryGreen font-bold text-2xl bg-white rounded-lg text-primaryGreen w-1/2 sm:w-1/4 self-center'>ADD</button>
                    </div>                
                    <div className=' bg-babygreen rounded-lg min-h-40'>
                        <h2 className='text-center font-bold underline text-2xl text-primaryGreen my-6'>List of your Achievements</h2>
                        <div className='flex flex-row flex-wrap px-12 sm:px-6'>
                            {
                                acheived.map( (item, index) => (
                                    <p key={`item-${index}`} className='mb-2 basis-6/12 sm:basis-3/12'>{item.title}</p>
                                ))
                            }
                        </div>
                    </div>                   
                </section>
            </div>
        </main>
    )
}

export default Action;