import Link from 'next/link';
import Timeline from '@/components/Timeline/timeline';
import Competency from '@/components/Competency/competency';
//import AcheivementTestData from '../../libs/dummyData/acheivementTestData';
import SkillsData from '../../libs/dummyData/skillsTestData.json';
import ProjectsData from '../../libs/dummyData/projectsTestData.json';
import TitlesData from '../../libs/dummyData/titlesTestData.json';
import ExperiencesData from '../../libs/dummyData/experiencesTestData.json';


/**
 *  Function to combine, filter, and sort raw data into a timeline
 */
const getTimeLineData = () => {
    const combinedRawData = SkillsData.concat(ProjectsData, TitlesData, ExperiencesData);
    const acheivedProgressData = combinedRawData.filter((progress) => {return progress.orderBy > 0});
    const sortedProgressData = acheivedProgressData.sort((a, b) => {return a.orderBy - b.orderBy});
    return sortedProgressData
}

const Progress = () => {
    let AcheivementTestData = getTimeLineData();

    return (
        <main className="flex min-h-screen flex-col p-4">
            <section className="flex justify-between items-center">
                {/*Landing page links */}
                <Link className='font-bold underline text-primaryGreen text-base' href="/">Level Up Dev - Progress</Link>
                <Link className='font-bold text-gray-700 p-2 mt-0 border border-primaryGreen font-bold text-base bg-white rounded-lg' href="/">Sign out</Link>
            </section>
            <div className='flex flex-col xl:flex-row gap-16'>
                <div className='w-full mt-6 sm:self-center xl:self-auto md:w-11/12 xl:mt-0 xl:w-2/4'>
                    <Competency title='Skills' content={SkillsData} />
                    <Competency title='Projects' content={ProjectsData} />
                    <Competency title='Titles' content={TitlesData} />
                    <Competency title='Experiences' content={ExperiencesData} />
                </div>
                {/* Presentation Timeline Display */}
                <section className="w-full order-last mt-6 lg:mt-0 xl:w-2/4">
                    <h2 className="text-center text-2xl text-primaryGreen font-bold">Timeline of achievements</h2>
                    <Timeline data={AcheivementTestData} />
                </section>
            </div>
        </main>
    )
}

export default Progress; 