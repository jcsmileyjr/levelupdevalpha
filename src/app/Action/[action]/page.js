"use client"
import Link from 'next/link';
import {useState, useEffect} from 'react';
import { addEventUserProfile } from '@/libs/api/addEventUserProfile';
import { updateEventUserProfile } from '@/libs/api/updateEventUserProfile';
import getUserProfile from '@/libs/api/getUserProfile';

const getData = (type, userData) => {
    if(type === 'Skills') return userData.SkillsData;
    if(type === 'Projects') return userData.ProjectsData;
    if(type === 'Titles') return userData.TitlesData;
    if(type === 'Experiences') return userData.ExperiencesData;
}

/**
 * TODO: Remaining bug of mobile view seen on desktop not selecting an item in the select element
 * @param {string} action - slug use to call the page 
 * @returns http://localhost:3000/Action/skills
 */
const Action = ({params: {action}}) => {
    const [actionData, setActionData] = useState([]); // The data related to the page action type (skills, projects, ...) for the active user profile
    const [userProfile, setUserProfile] = useState({}); // Use to intitially get actionData and display user name
    const [actionTitle, setActiontitle] = useState("");
    const [actionTitleFormatError, setActionTitleFormatError] = useState(false);
    const [actionDescription, setActionDescription] = useState("");
    const [actionDescriptionFormatError, setActionDescriptionFormatError] = useState(false);
    const [selectedAction, setSelectedAction] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("");
    const [selectedYear, setSelectedYear] = useState("");

    const monthArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

    useEffect(() => {
        let userData = getUserProfile();
        let data = getData(action, userData); // Get the array of content from user data based on the page type
        setUserProfile(userData);
        setActionData(data);     
    }, [])

    // function to create an action that the user wants to accomplish later
    const createAction = (event, type) => {
        let error = false;
        event.preventDefault();

        if (actionTitle === "") {
            error = true;
            setActionTitleFormatError(true);
        } else {
            setActionTitleFormatError(false);
        }

        if (actionDescription === "") {
            error = true;
            setActionDescriptionFormatError(true);
        } else {
            setActionDescriptionFormatError(false);
        }
 
        if (error) return;

        let actionItem =     {
            "title" : actionTitle, 
            "description" : actionDescription ,
            "date" : "",
            "orderBy": 0
        };

        setActionData([...actionData, actionItem])
        addEventUserProfile(actionItem, type);
        setActiontitle("");
        setActionDescription("");
    }

    const updateAction = (event) => {
        event.preventDefault();
        const orderBy = selectedMonth.concat(selectedYear);
        const date = selectedMonth.concat(`/${selectedYear}`);
        setActionData(actionData.map( (actionItem) => {
            if (actionItem.title === selectedAction) {
                actionItem.date = date;
                actionItem.orderBy = Number(orderBy);
                updateEventUserProfile(actionItem, action);
                return actionItem;
            } else {
                return actionItem;
            }    
            })
        );
        setSelectedMonth("");
        setSelectedYear("");
    }

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
                <Link className='font-bold text-gray-700 p-2 mt-0 border border-primaryGreen font-bold text-base bg-white rounded-lg min-w-24 flex justify-center items-center' href="/">Sign out</Link>
            </section>
            <div className='flex flex-col lg:flex-row gap-6 justify-between'>
                {/* Adding new skills to the Wants category */}
                <section className='flex-1 flex flex-col gap-6 justify-between'>
                    <form id="createAction" className='flex flex-col sm:items-center bg-babygreen rounded-lg px-12 sm:pl-0 pb-6 sm:pb-20 px-4'>
                        <h1 className='font-bold underline text-2xl text-primaryGreen my-6 text-center'>Decide what {action} you want to have</h1>
                        <label className='text-xl text-gray-700 font-bold mb-2' htmlFor='inputTitle'>Title</label>
                        <div className='mb-6 w-full sm:w-2/4'>
                            <input value={actionTitle} id="inputTitle" onChange={(e) => setActiontitle(e.target.value)} type="text" className='w-full p-2 border border-primaryGreen bg-white text-xl rounded-lg'></input>
                            <p className={`${actionTitleFormatError ? 'hidden':'block'} my-2 text-gray-700 text-base`}>20 character count limit</p>
                            <p className={`${actionTitleFormatError ? 'block' : 'hidden'} my-2 text-base text-red-700`}>Missing</p>
                        </div>

                        <label className='text-xl text-gray-700 font-bold mb-2' htmlFor='inputReason'>Reason</label>
                        <div className='mb-6 w-full sm:w-2/4'>
                            <textarea value={actionDescription} id="inputReason" onChange={(e) => setActionDescription(e.target.value)} type="text" className='w-full p-2 border border-primaryGreen bg-white text-xl rounded-lg'></textarea>
                            {/*Error messages */}
                            <p className={`${actionDescriptionFormatError ? 'hidden':'block'} my-2 text-gray-700 text-base`}>40 character count limit</p>
                            <p className={`${actionDescriptionFormatError ? 'block' : 'hidden'} my-2 text-base text-red-700`}>Missing</p>
                            <p className='w-full mt-2'><span className='font-bold'>Definition:</span> In 20 words or less, why do you want to learn this skill? How will it impact your career journey?</p>
                        </div>
                        <button type="submit" onClick={(e) => createAction(e, action)} className='p-2 mt-0 border border-primaryGreen font-bold text-xl bg-white rounded-lg text-primaryGreen w-1/2 sm:w-1/4 self-center'>ADD</button>
                    </form>
                    <div className=' bg-babygreen rounded-lg min-h-40'>
                        <h2 className='text-center font-bold underline text-2xl text-primaryGreen my-6'>List  of skills You Want </h2>
                        <div className='flex flex-row flex-wrap px-8 sm:px-6'>
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
                    <form className='flex flex-col sm:items-center bg-babygreen rounded-lg px-12 sm:pl-0 pb-6 px-4 flex-1'>
                        <h1 className='font-bold underline text-2xl text-primaryGreen my-6 text-center'>Confirmed {action} Learned</h1>

                        <label className='text-xl text-gray-700 font-bold mb-2' htmlFor='selectReason'>Find {action}</label>
                        <div className='mb-6 w-full sm:w-2/4'>
                            <select value={selectedAction} onChange={(e) => setSelectedAction(e.target.value)} name="selectReason" id="selectReason" type="text" className='w-full p-2 border border-primaryGreen bg-white text-xl rounded-lg'>
                                <option value="" key="default-option-1"></option>
                                {
                                    wants.map((item, index) => (
                                        <option value={item.title} key={`${item}-${index}`}>{item.title}</option>
                                    ))
                                }
                            </select>
                            <p className='w-full mt-2'><span className='font-bold'>Definition:</span> Ready to place on your resume and be known for it.</p>
                        </div>
                        {/* Pick month completed */}
                        <label className='text-xl text-gray-700 font-bold mb-2' htmlFor='selectMonth'>Month - {action} was completed</label>
                        <div className='mb-6 w-full sm:w-2/4'>
                            <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} name="selectMonth" id="selectMonth" type="text" className='w-full p-2 border border-primaryGreen bg-white text-xl rounded-lg'>
                                <option value="" key="default-month-option-1"></option>
                                {
                                    monthArray.map( (month, index) => (
                                        <option value={month} key={`${month}${index}`}>{month}</option>
                                    ))
                                }
                            </select>
                        </div>
                        {/* Pick year completed */}
                        <label className='text-xl text-gray-700 font-bold mb-2' htmlFor='selectYear'>Year -  {action} was completed</label>
                        <div className='mb-6 w-full sm:w-2/4'>
                            <input  maxLength={4} onChange={(e) => setSelectedYear(e.target.value)} type="text" value={selectedYear} id="selectedYear" name="selectedYear" className='w-full p-2 border border-primaryGreen bg-white text-xl rounded-lg'/>
                            <p className='text-gray-700 text-base'>Examples: 2007, 2014, 2023</p>
                        </div>                        

                        <button type="submit" onClick={(e) => updateAction(e)} className='p-2 mt-0 border border-primaryGreen font-bold text-xl bg-white rounded-lg text-primaryGreen w-1/2 sm:w-1/4 self-center'>ADD</button>
                    </form>                
                    <div className=' bg-babygreen rounded-lg min-h-40'>
                        <h2 className='text-center font-bold underline text-2xl text-primaryGreen my-6'>List of your Achievements</h2>
                        <div className='flex flex-row flex-wrap px-8 sm:px-6'>
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