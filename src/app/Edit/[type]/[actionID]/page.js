"use client"
import Link from 'next/link';
import Image from 'next/image';
import getUserProfile from '@/libs/api/getUserProfile';
import { getActionItem } from '@/libs/utils/getActionItem';
import { updateEventUserProfile } from '@/libs/api/updateEventUserProfile';
import {useState, useEffect} from 'react';
import { useRouter } from 'next/navigation';
import EditPen from '../../../../images/edit-pen-icon.png'
import { v4 as uuidv4 } from 'uuid';

const Edit = ({params: {type, actionID}}) => {
    const router = useRouter();
    const [userProfile, setUserProfile] = useState({}); // Use to intitially get actionData and display user name
    const [actionTitle, setActionTitle] = useState("");
    const [actionDescription, setActionDescription] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("");
    const [selectedYear, setSelectedYear] = useState("");
    
    // Format error handling for item creation
    const [actionTitleFormatError, setActionTitleFormatError] = useState(false);
    const [actionDescriptionFormatError, setActionDescriptionFormatError] = useState(false);
    
    // Format error handling for item update
    const [selectedMonthFormatError, setSelectedMonthFormatError] = useState(false);
    const [selectedYearFormatError, setSelectedYearFormatError] = useState(false);    
    
    // Content for the month select element
    const monthArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];    
    
    useEffect(() => {
        let userData = getUserProfile();
        const actionItem = getActionItem(type, actionID, userData);      
        setActionTitle(actionItem.title);
        setActionDescription(actionItem.description);
        getDate(actionItem.date);
        setUserProfile(userData);    
    }, [type, actionID])

    const getDate = (date) => {
        if(date !== "") {
            let stringArray = date.split("/");
            setSelectedMonth(stringArray[0]);
            setSelectedYear(stringArray[1]);
        }
    }

    // Function to update the item
    const updateAction = (e) => {
        let error = false;
        
        e.preventDefault();

        // UI Validation
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

        if (selectedMonth === "" && selectedYear !== "") {
            error = true;
            setSelectedMonthFormatError(true);
        } else {
            setSelectedMonthFormatError(false);
        }

        if (selectedYear === "" && selectedMonth !== "") {
            error = true;
            setSelectedYearFormatError(true);
        } else {
            setSelectedYearFormatError(false);
        }

        if (error) return;
        
        let actionItem = {
            "title" : actionTitle, 
            "description" : actionDescription ,
            "actionType" : type,
            "date" : "",
            "orderBy": 0,
            "actionID" : actionID
        }; 

        // UI Validation that triggers if either one is empty and the other has content
        if (selectedMonth !== "" && selectedYear !== "") {
            actionItem.orderBy = selectedYear.concat(selectedMonth);
            actionItem.date = selectedMonth.concat(`/${selectedYear}`);
        }


        updateEventUserProfile(actionItem, type);
        setActionTitle("");
        setActionDescription("");    
        setSelectedMonth("");
        setSelectedYear("");    

        router.back();
    }


    return (
        <main className="flex min-h-screen flex-col p-4">
            <section className="sm:flex hidden justify-between items-center mb-6">
                {/*navigation */}
                <button role="link" type="button" onClick={() => router.back()}  className='font-bold underline text-primaryGreenDarker text-base'>Go Back - {userProfile.name}</button>
                <Link className='font-bold text-gray-700 p-2 mt-0 border border-primaryGreenDarker font-bold text-base bg-white rounded-lg min-w-24 flex justify-center items-center' href="/">Sign out</Link>
            </section>
            <section className="flex sm:hidden gap-4 justify-between items-center mb-6">
                {/*navigation */}
                <div>
                    <button role="link" type="button" onClick={() => router.back()} className='font-bold underline text-primaryGreenDarker text-base'>Go Back</button>
                    <p className='font-bold text-primaryGreenDarker text-base'>{userProfile.name}</p>
                </div>
                <Link className='font-bold text-gray-700 p-2 mt-0 border border-primaryGreenDarker font-bold text-base bg-white rounded-lg min-w-24 flex justify-center items-center' href="/">Sign out</Link>
            </section>
            <section className='flex flex-col sm:w-2/5 xl:w-1/4 sm:m-auto'>
                <h1 className='font-bold underline text-2xl text-primaryGreen my-6 text-center'>Edit Item</h1>

                {/* Update the Title*/}
                <label className='text-xl text-gray-700 font-bold mb-2' htmlFor='inputTitle'>Title</label>
                <div className='mb-6 w-full '>
                    <input value={actionTitle} id="inputTitle" onChange={(e) => setActionTitle(e.target.value)} type="text" className='w-full p-2 border border-primaryGreen bg-white text-xl rounded-lg'></input>
                    <p className={`${actionTitleFormatError ? 'hidden':'block'} my-2 text-gray-700 text-base`}>20 character count limit</p>
                    <p className={`${actionTitleFormatError ? 'block' : 'hidden'} my-2 text-base text-red-700`}>Missing</p>
                </div>

                {/* Update the reason */}
                <label className='text-xl text-gray-700 font-bold mb-2' htmlFor='inputReason'>Reason</label>
                <div className='mb-6 w-full '>
                    <textarea value={actionDescription} id="inputReason" onChange={(e) => setActionDescription(e.target.value)} type="text" className='w-full p-2 border border-primaryGreen bg-white text-xl rounded-lg'></textarea>
                    {/*Error messages */}
                    <p className={`${actionDescriptionFormatError ? 'hidden':'block'} my-2 text-gray-700 text-base`}>40 character count limit</p>
                    <p className={`${actionDescriptionFormatError ? 'block' : 'hidden'} my-2 text-base text-red-700`}>Missing</p>
                    <p className='w-full mt-2'><span className='font-bold'>Definition:</span> In 20 words or less, why do you want to learn or do this? How will it impact your career journey?</p>
                </div>

                {/* Update month completed */}
                <label className='text-xl text-gray-700 font-bold mb-2' htmlFor='selectMonth'>Month completed</label>
                <div className='mb-6 w-full '>
                    <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} name="selectMonth" id="selectMonth" type="text" className='w-full p-2 border border-primaryGreen bg-white text-xl rounded-lg'>
                        <option value="" key="default-month-option-1"></option>
                        {
                            monthArray.map( (month, index) => (
                                <option value={month} key={`${month}${index}`}>{month}</option>
                            ))
                        }
                    </select>
                    <p className={`${selectedMonthFormatError ? 'block' : 'hidden'} mt-2 text-base text-red-700`}>Missing</p>
                </div>   

                {/* Update year completed */}
                <label className='text-xl text-gray-700 font-bold mb-2' htmlFor='selectedYear'>Year completed</label>
                <div className='mb-6 w-full '>
                    <input  maxLength={4} onChange={(e) => setSelectedYear(e.target.value)} type="text" value={selectedYear} id="selectedYear" name="selectedYear" className='w-full p-2 border border-primaryGreen bg-white text-xl rounded-lg'/>
                    <p className={`${selectedYearFormatError ? 'hidden':'block'} text-gray-700 text-base`}>Examples: 2007, 2014, 2023</p>
                    <p className={`${selectedYearFormatError ? 'block' : 'hidden'} mt-2 text-base text-red-700`}>Missing</p>
                </div> 

                <button type="submit" onClick={(e) => updateAction(e)} className='flex justify-center items-center p-2 mt-0 border border-primaryGreen font-bold text-xl bg-white rounded-lg text-primaryGreen w-1/2 self-center'>
                    <Image priority={false} src={EditPen} width={20} height={20} alt="" className='mr-2' />
                    Update
                </button>                                             
            </section>
        </main>
    )
}

export default Edit;