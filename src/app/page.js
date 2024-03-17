import Link from 'next/link';
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
      <section className="text-center">
        <h1 className="text-5xl font-bold underline text-primaryGreen">Level Up Dev</h1>
        <p className="text-base mt-2">Visually track your technical skills and career progression</p>
      </section>

      <div className="flex flex-col lg:flex-row mt-8 gap-6">                
        {/* Presentation Timeline Display */}
        <section className="w-full order-last mt-6 lg:mt-0 lg:order-first lg:w-2/3">
          <h2 className="text-center text-2xl text-primaryGreen font-bold">Celebrate the Journey</h2>
          <Timeline data={AcheivementTestData} />
        </section>

        {/* Login and Sign up Section */}
        <section className="w-full lg:w-1/3 lg-6 lg:mt-0 sm:flex sm:items-center sm:justify-center lg:block">
          <div className='flex flex-col bg-babygreen rounded-lg p-12 sm:w-2/4 lg:w-full'>
            <h2 className="text-center text-2xl lg:text-xl text-black font-bold ">Passion &  Sacrifice</h2>
            <Link href="/LogIn" aria-label='Click to go to Log in page' className='p-2 mt-4 border border-primaryGreen font-bold text-2xl bg-white rounded-lg text-primaryGreen text-center'>Log In</Link>
            <Link href="/SignUp" aria-label='Click to go to the Sign up page' className='p-2 mt-4 border border-primaryGreen font-bold text-2xl bg-white rounded-lg text-primaryGreen text-center'>Sign Up</Link>
          </div>
        </section>
      </div>
    </main>
  )
}
