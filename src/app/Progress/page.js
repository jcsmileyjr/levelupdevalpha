import Link from 'next/link';

const Progress = () => {
    return (
        <main className="flex min-h-screen flex-col p-4">
            <section className="flex justify-between items-center">
                {/*Landing page link */}
                <Link className='font-bold underline text-primaryGreen text-base' href="/">Level Up Dev - Log-in</Link>
                <Link className='font-bold text-gray-700 p-2 mt-0 border border-primaryGreen font-bold text-base bg-white rounded-lg' href="/">Sign out</Link>
            </section>
        </main>
    )
}

export default Progress; 