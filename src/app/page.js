
import Timeline from "@/components/Timeline/timeline"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold underline">Level Up Dev</h1>
        <p className="text-base mt-2">Visually track your technical skills and career progression</p>
      </div>
      <div className="flex flex-row">
        <div className="w-3/4">
          <h2 className="text-center text-2xl">Celebrate the Journey</h2>
          <Timeline />
        </div>
        <div className="w-1/4">
          <h2 className="text-center text-xl">Passion &  Sacrifice</h2>
        </div>
      </div>
    </main>
  )
}
