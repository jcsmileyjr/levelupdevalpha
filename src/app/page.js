
import AcheivementTestData from '../libs/dummyData/acheivementTestData.json';
import Timeline from "@/components/Timeline/timeline"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold underline">Level Up Dev</h1>
        <p className="text-base mt-2">Visually track your technical skills and career progression</p>
      </div>
      <div className="flex flex-col lg:flex-row ">
        <div className="w-full order-last lg:order-first lg:w-2/3">
          <h2 className="text-center text-2xl">Celebrate the Journey</h2>
          <Timeline data={AcheivementTestData} />
        </div>
        <div className="w-full lg:w-1/3 lg-6 lg:mt-0">
          <h2 className="text-center text-2xl lg:text-xl">Passion &  Sacrifice</h2>
        </div>
      </div>
    </main>
  )
}
