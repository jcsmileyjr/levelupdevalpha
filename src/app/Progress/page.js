import Link from 'next/link';
import Timeline from '@/components/Timeline/timeline';
import AcheivementTestData from '../../libs/dummyData/acheivementTestData';

const Progress = () => {
    return (
        <main className="flex min-h-screen flex-col p-4">
            <section className="flex justify-between items-center">
                {/*Landing page links */}
                <Link className='font-bold underline text-primaryGreen text-base' href="/">Level Up Dev - Progress</Link>
                <Link className='font-bold text-gray-700 p-2 mt-0 border border-primaryGreen font-bold text-base bg-white rounded-lg' href="/">Sign out</Link>
            </section>
            <div className='flex flex-col lg:flex-row '>
                <div className='w-2/4 mt-6 lg:mt-0 lg:w-2/4'>
                    competency
                </div>
                {/* Presentation Timeline Display */}
                <section className="w-full order-last mt-6 lg:mt-0 lg:w-2/4">
                    <h2 className="text-center text-2xl text-primaryGreen font-bold">Timeline of achievements</h2>
                    <Timeline data={AcheivementTestData} />
                </section>
            </div>
        </main>
    )
}

export default Progress; 