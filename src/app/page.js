
import AcheivementTestData from '../libs/dummyData/acheivementTestData.json'; // Dummy acheivement data
import Timeline from "@/components/Timeline/timeline" // component to display Timeline

/**
 * Landing page for the app
 * Consumes acheivement dummy data or localhost data
 * @returns landing page UI
 */
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold underline text-primaryGreen">Level Up Dev</h1>
        <p className="text-base mt-2">Visually track your technical skills and career progression</p>
      </div>
      <div className="flex flex-col lg:flex-row mt-8">
        
        {/* Presentation Timeline Display */}
        <div className="w-full order-last mt-6 lg:mt-0 lg:order-first lg:w-2/3">
          <h2 className="text-center text-2xl text-primaryGreen font-bold">Celebrate the Journey</h2>
          <Timeline data={AcheivementTestData} />
        </div>

        {/* Login and Sign up Section */}
        <div className="w-full lg:w-1/3 lg-6 lg:mt-0">
          <div className='flex flex-col bg-babygreen rounded-lg p-12'>
            <h2 className="text-center text-2xl lg:text-xl text-black font-bold ">Passion &  Sacrifice</h2>
            <button className='p-2 mt-4 border border-primaryGreen font-bold text-2xl bg-white rounded-lg text-primaryGreen'>Log In</button>
            <button className='p-2 mt-4 border border-primaryGreen font-bold text-2xl bg-white rounded-lg text-primaryGreen'>Sign Up</button>
          </div>
        </div>
      </div>
    </main>
  )
}
