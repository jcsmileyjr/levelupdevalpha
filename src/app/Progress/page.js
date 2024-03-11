"use client"
import Link from 'next/link';
import Timeline from '@/components/Timeline/timeline';
import Competency from '@/components/Competency/competency';
import getUserProfile from '@/libs/api/getUserProfile';
import {useState, useEffect} from 'react';

const Progress = () => {    
    const [userProfile, setUserProfile] = useState({});
    const [acheivementData, setAcheivementData] = useState([]);

    useEffect(() => {
        let userData = getUserProfile(); // Get user profile from local storage
        let acheivements = getTimeLineData(userData); // Use that user profile to extact event data
        setUserProfile(userData);
        setAcheivementData(acheivements);
    }, [])

    /**
     *  Function to combine, filter, and sort raw data into a timeline
     */
    const getTimeLineData = (userData) => {
        const combinedRawData = userData.SkillsData.concat(userData.ProjectsData, userData.TitlesData, userData.ExperiencesData);
        const acheivedProgressData = combinedRawData.filter((progress) => {return progress.orderBy > 0});
        const sortedProgressData = acheivedProgressData.sort((a, b) => {return a.orderBy - b.orderBy});
        return sortedProgressData
    }

    return (
        <main className="flex min-h-screen flex-col p-4">
            <section className="flex justify-between items-center">
                {/*Landing page links */}
                <Link className='font-bold underline text-primaryGreen text-base' href="/">Level Up Dev - {userProfile.name}&#39;s Progress</Link>
                <Link className='font-bold text-gray-700 p-2 mt-0 border border-primaryGreen font-bold text-base bg-white rounded-lg min-w-24 flex justify-center items-center' href="/">Sign out</Link>
            </section>
            <div className='flex flex-col xl:flex-row gap-16'>
                <div className='w-full mt-6 sm:self-center xl:self-auto md:w-11/12 xl:mt-0 xl:w-2/4'>
                    {userProfile.SkillsData && <Competency title='Skills' content={userProfile.SkillsData} />}
                    {userProfile.ProjectsData && <Competency title='Projects' content={userProfile.ProjectsData} />}                    
                    {userProfile.TitlesData && <Competency title='Titles' content={userProfile.TitlesData} />}                    
                    {userProfile.ExperiencesData && <Competency title='Experiences' content={userProfile.ExperiencesData} />}
                </div>
                {/* Presentation Timeline Display */}
                <section className="w-full order-last mt-6 lg:mt-0 xl:w-2/4">
                    <h2 className="text-center text-2xl text-primaryGreen font-bold">Timeline of achievements</h2>
                    <Timeline data={acheivementData} />
                </section>
            </div>
        </main>
    )
}

export default Progress; 