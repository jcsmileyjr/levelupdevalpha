
import AcheivementTestData from '../libs/dummyData/acheivementTestData.json';
import Timeline from "@/components/Timeline/timeline"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold underline">Level Up Dev</h1>
        <p className="text-base mt-2">Visually track your technical skills and career progression</p>
      </div>
      <div className="flex flex-col md:flex-row ">
        <div className="w-full order-last md:order-first md:w-2/3">
          <h2 className="text-center text-2xl">Celebrate the Journey</h2>
          <Timeline data={AcheivementTestData} />
        </div>
        <div className="w-full md:w-1/3 mt-6 md:mt-0">
          <h2 className="text-center text-2xl md:text-xl">Passion &  Sacrifice</h2>
        </div>
      </div>
    </main>
  )
}
