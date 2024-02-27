
import Link from 'next/link';
import SkillsData from '../../../libs/dummyData/skillsTestData.json';
import ProjectsData from '../../../libs/dummyData/projectsTestData.json';
import TitlesData from '../../../libs/dummyData/titlesTestData.json';
import ExperiencesData from '../../../libs/dummyData/experiencesTestData.json';

const getData = (type) => {
    if(type === 'Skills') return SkillsData;
    if(type === 'Projects') return ProjectsData;
    if(type === 'Titles') return TitlesData;
    if(type === 'Experiences') return ExperiencesData;
}

/**
 * 
 * @param {string} action - slug use to call the page 
 * @returns http://localhost:3000/Action/skills
 */
const Action = ({params: {action}}) => {
    const data = getData(action);
    return (
        <main className="flex min-h-screen flex-col p-4">
            <section className="flex justify-between items-center">
                {/*Landing page links */}
                <Link className='font-bold underline text-primaryGreen text-base' href="/">Level Up Dev - {action}</Link>
                <Link className='font-bold text-gray-700 p-2 mt-0 border border-primaryGreen font-bold text-base bg-white rounded-lg' href="/">Sign out</Link>
            </section>
            <div className='flex flex-col lg:flex-row gap-6'>
                {/* Adding new skills to the Wants category */}
                <section className='flex-1 flex flex-col gap-6'>
                    <form id="createAction" className='flex flex-col items-center bg-babygreen pb-6 px-4'>
                        <h1 className='font-bold underline text-2xl text-primaryGreen my-6 text-center px-4 sm:px-0'>Decide what SKILL you want to have</h1>
                        <label className='text-xl text-gray-700 font-bold mb-2' htmlFor='inputTitle'>Title</label>
                        <div className='mb-6 w-2/4'>
                            <input id="inputTitle" type="text" className='w-full p-2 border border-primaryGreen bg-white text-xl rounded-lg'></input>
                            <p className='text-gray-700 text-base'>20 character count limit</p>
                        </div>

                        <label className='text-xl text-gray-700 font-bold mb-2' htmlFor='inputReason'>Reason</label>
                        <div className='mb-6 w-2/4'>
                            <textarea id="inputReason" type="text" className='w-full p-2 border border-primaryGreen bg-white text-xl rounded-lg'></textarea>
                            <p>40 character count limit</p>
                            <p className='w-full mt-2'><span className='font-bold'>Definition:</span> In 20 words or less, why do you want to learn this skill? How will it impact your career journey?</p>
                        </div>
                        <button type="submit" className='p-2 mt-0 border border-primaryGreen font-bold text-2xl bg-white rounded-lg text-primaryGreen w-1/4'>ADD</button>
                    </form>
                    <div className=' bg-babygreen min-h-40'>
                        <h2 className='text-center font-bold underline text-2xl text-primaryGreen my-6'>List  of skills You Want </h2>
                        <div className='flex flex-row flex-wrap px-6'>
                            {
                                data.map( (item, index) => (
                                    <p key={`item-${index}`} className='mb-2 basis-3/12'>{item.title}</p>
                                ))
                            }
                        </div>
                    </div>
                </section>

                {/* Confirm that a skill has been acomplishsed */}
                <section className='flex-1'>
                    <div className='bg-babygreen '>
                        <h1 className='font-bold underline text-2xl text-primaryGreen'>Confirmed Skilled Learned</h1>

                    </div>                
                    <div className='bg-babygreen '>
                        
                    </div>                    
                </section>
            </div>
        </main>
    )
}

export default Action;