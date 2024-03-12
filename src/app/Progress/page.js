"use client"
import Link from 'next/link';
import Timeline from '@/components/Timeline/timeline';
import Competency from '@/components/Competency/competency';
import getUserProfile from '@/libs/api/getUserProfile';
import Image from 'next/image';
import GarbageCan from '../../images/recycle-bin-icon-red.png';
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation';
import {useState, useEffect} from 'react';

const Progress = () => {    
    const router = useRouter() //  Use to relocate user to another page

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

    const deleteAccount = () => {
        Swal.fire({
            title: "Are you Sure",
            text: "Confirm that you want to remove all data",
            icon: "error",
            showDenyButton: true,
            confirmButtonText: "Delete",
            denyButtonText: `Cancel`
        }).then((result) => {
            if (result.isConfirmed) {
                router.push('/');
                Swal.fire({
                    icon: "success",
                    title: "Account has been deleted",
                    showConfirmButton: false,
                    timer: 1000
                  });
            } else if (result.isDenied) {
                //Swal.fire("Changes are not saved", "", "info");
            }
          });
    }

    return (
        <main className="flex min-h-screen flex-col p-4">
            <section className="flex justify-between items-center">
                {/*Landing page links */}
                <Link className='font-bold underline text-primaryGreen text-base' href="/">Level Up Dev - {userProfile.name}&#39;s Progress</Link>
                <Link className='font-bold text-gray-700 p-2 mt-0 border border-primaryGreen font-bold text-base bg-white rounded-lg min-w-24 flex justify-center items-center' href="/">Sign out</Link>
            </section>
            <div className='flex flex-col xl:flex-row gap-4 sm:gap-16'>
                <div className='w-full mt-6 sm:self-center xl:self-auto md:w-11/12 xl:mt-0 xl:w-2/4'>
                    {userProfile.SkillsData && <Competency title='Skills' content={userProfile.SkillsData} />}
                    {userProfile.ProjectsData && <Competency title='Projects' content={userProfile.ProjectsData} />}                    
                    {userProfile.TitlesData && <Competency title='Titles' content={userProfile.TitlesData} />}                    
                    {userProfile.ExperiencesData && <Competency title='Experiences' content={userProfile.ExperiencesData} />}
                    
                    {/* Delete account button */}
                    <button onClick={() => deleteAccount()} className='font-bold text-gray-700 p-2 mt-0 border border-rose-600 bg-red-50 font-bold text-sm bg-white rounded-lg min-w-24 xl:flex flex-row items-center ml-6 hidden gap-2'>
                        <Image priority={false} src={GarbageCan} width={25} height={15} alt="Clickable garbage can icon to delete account and sign out of app" />
                        <p className='text-sm text-gray-700'>Click to delete account &#40;removes all data&#41;</p>
                    </button>
                </div>
                {/* Presentation Timeline Display - Displayed on larger devices */}
                <section className="w-full order-last mt-6 lg:mt-0 xl:w-2/4">
                    <h2 className="text-center text-2xl text-primaryGreen font-bold">Timeline of achievements</h2>
                    <Timeline data={acheivementData} />

                    {/* Delete account button - Displayed on smaller devices */}
                    <button onClick={() => deleteAccount()} className='font-bold text-gray-700 p-2 mt-4 border border-rose-600 bg-red-50 font-bold text-sm bg-white rounded-lg w-full sm:w-1/2 sm:m-auto flex flex-row items-center justify-center xl:hidden gap-2'>
                        <Image priority={false} src={GarbageCan} width={25} height={15} alt="Clickable garbage can icon to delete account and sign out of app" />
                        <p className='text-sm text-gray-700'>Click to delete account</p>
                    </button>                    
                </section>
            </div>
        </main>
    )
}

export default Progress; 