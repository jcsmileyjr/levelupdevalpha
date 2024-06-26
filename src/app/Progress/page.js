"use client"
import Link from 'next/link';
import Timeline from '@/components/Timeline/timeline';
import Competency from '@/components/Competency/competency';
import getUserProfile from '@/libs/api/getUserProfile';
import Image from 'next/image';
import GarbageCan from '../../images/recycle-bin-icon-red.png';
import Spinner from '../../images/loader-icon-blue.png';
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation';
import {useState, useEffect} from 'react';

const Progress = () => {    
    const router = useRouter() //  Use to relocate user to another page

    const [userProfile, setUserProfile] = useState({});
    const [acheivementData, setAcheivementData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let userData = getUserProfile(); // Get user profile from local storage
        if (userData === null) userData = nullUserProfile; // if getUserProfile() returns blank. Mainly affects testing
        let acheivements = getTimeLineData(userData); // Use that user profile to extact event data
        setUserProfile(userData);
        setAcheivementData(acheivements);
        // Display pop-up "How to use" for the Progress page and then disable it.
        const profileSetting = JSON.parse(localStorage.getItem("levelupdev-settings"));
        if (profileSetting === null) {
            howToUse();
        }
        setLoading(false);
    }, [])

    // Function to display initial "how to use" pop-up and then disable it. 
    const howToUse = () => {
        Swal.fire({
            title: "How to Use - Part 1/3",
            html: "<h1>In each competency area, there are two sections:<h1></br><ol><li>1. The list of something you want</li><li>2. The list of your achievements</li></ol>",
            confirmButtonText: 'Continue',
            showCancelButton: true
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'How to Use - Part 2/3',
                    html: '<p>Take a moment to determine, within each competency area, what you want to accomplish in the future. Click the <b> "go to" links </b> to open each individual section to add new goals </p>',
                    confirmButtonText: 'One more, I promise',
                    showCancelButton: true
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            title: 'How to Use - Part 3/3',
                            text: 'The Timeline of Achievements displays each item that you have completed.',
                            confirmButtonText: 'Done'
                        })
                    } 
                });
            } 
          })

        let profileSetting = {disableHowToUseProgress : true};
        localStorage.setItem("levelupdev-settings", JSON.stringify(profileSetting));
    }

    const nullUserProfile = {
        "email" : "default.test.com", 
        "name" : "default", 
        "TitlesData" : [],
        "SkillsData" : [], 
        "ProjectsData" : [], 
        "ExperiencesData" : [], 
        "version" : 0
    };

    /**
     *  Function to combine, filter, and sort raw data into a timeline
     */
    const getTimeLineData = (userData) => {
        const combinedRawData = userData.SkillsData.concat(userData.ProjectsData, userData.TitlesData, userData.ExperiencesData);
        const acheivedProgressData = combinedRawData.filter((progress) => {return progress.orderBy > 0});
        const sortedProgressData = acheivedProgressData.sort((a, b) => {return a.orderBy - b.orderBy});
        return sortedProgressData
    }

    /**
     * Function to delete the account when the delete button is clicked. 
     */
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
                localStorage.removeItem("levelupdev-profile");
                localStorage.removeItem("levelupdev-settings");
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
            { loading &&
                <section className='flex justify-center items-center h-screen w-full'>
                    <Image className='animate-spin' priority={false} src={Spinner} width={250} height={150} alt="Clickable garbage can icon to delete account and sign out of app" />
                </section>
            }
            { !loading &&
                <>
                    <section className="sm:flex justify-between items-center hidden">
                        {/*Landing page links */}
                        <p className='font-bold text-primaryGreenDarker text-base'>Level Up Dev - {userProfile && userProfile.name}</p>
                        <Link className='font-bold text-gray-700 p-2 mt-0 border border-primaryGreenDarker font-bold text-base bg-white hover:bg-primaryGreenDarker hover:text-white drop-shadow-md active:drop-shadow-2xl rounded-lg min-w-24 flex justify-center items-center' href="/">Sign out</Link>
                    </section>
                    <section className="flex justify-between items-center sm:hidden gap-4">
                        {/*Landing page links */}
                        <div>
                            <p className='font-bold text-primaryGreenDarker text-base'>Level Up Dev</p>
                            <p className='font-bold text-primaryGreenDarker text-base'>{userProfile && userProfile.name}</p>
                        </div>
                        <Link className='font-bold text-gray-700 p-2 mt-0 border border-primaryGreenDarker font-bold text-base bg-white hover:bg-primaryGreenDarker hover:text-white drop-shadow-md active:drop-shadow-2xl rounded-lg min-w-24 flex justify-center items-center' href="/">Sign out</Link>
                    </section>            
                    <div className='flex flex-col xl:flex-row gap-4 sm:gap-16'>
                        <div className='w-full mt-6 sm:self-center xl:self-auto md:w-11/12 xl:mt-0 xl:w-2/4'>
                            {userProfile.SkillsData && <Competency title='Skills' content={userProfile.SkillsData} />}
                            {userProfile.ProjectsData && <Competency title='Projects' content={userProfile.ProjectsData} />}                    
                            {userProfile.TitlesData && <Competency title='Titles' content={userProfile.TitlesData} />}                    
                            {userProfile.ExperiencesData && <Competency title='Experiences' content={userProfile.ExperiencesData} />}
                            <p className='ml-8 mb-8 text-gray-700 text-base xl:flex hidden'>Version: {userProfile.version}</p>

                            {/* Delete account button */}
                            <button onClick={() => deleteAccount()} className='font-bold text-gray-700 p-2 mt-0 border border-rose-600 bg-red-50 font-bold text-sm bg-white rounded-lg min-w-24 xl:flex flex-row items-center ml-6 hidden gap-2'>
                                <Image priority={false} src={GarbageCan} width={25} height={15} alt="Clickable garbage can icon to delete account and sign out of app" />
                                <p className='text-sm text-gray-700'>Click to delete account &#40;removes all data&#41;</p>
                            </button>
                        </div>
                        {/* Presentation Timeline Display - Displayed on larger devices */}
                        <section className="w-full order-last mt-6 lg:mt-0 xl:w-2/4">
                            <h1 className="text-center text-2xl text-primaryGreen font-bold">Timeline of achievements</h1>
                            <Timeline data={acheivementData} />

                            {/* Delete account button - Displayed on smaller devices */}
                            <button onClick={() => deleteAccount()} className='font-bold text-gray-700 p-2 mt-4 border border-rose-600 bg-red-50 font-bold text-sm bg-white rounded-lg w-full sm:w-1/2 sm:m-auto flex flex-row items-center justify-center xl:hidden gap-2'>
                                <Image priority={false} src={GarbageCan} width={25} height={15} alt="Clickable garbage can icon to delete account and sign out of app" />
                                <p className='text-sm text-gray-700'>Click to delete account</p>
                            </button>
                            <p className='mt-8 text-gray-700 text-base flex  xl:hidden items-center justify-center'>Version: {userProfile.version}</p>                    
                        </section>
                    </div>
                
                </>
            }
        </main>
    )
}

export default Progress; 