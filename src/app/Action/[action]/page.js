import Link from 'next/link';

/**
 * 
 * @param {string} action - slug use to call the page 
 * @returns http://localhost:3000/Action/skills
 */
const Action = ({params: {action}}) => {
    return (
        <main className="flex min-h-screen flex-col p-4">
            <section className="flex justify-between items-center">
                {/*Landing page links */}
                <Link className='font-bold underline text-primaryGreen text-base' href="/">Level Up Dev - Progress</Link>
                <Link className='font-bold text-gray-700 p-2 mt-0 border border-primaryGreen font-bold text-base bg-white rounded-lg' href="/">Sign out</Link>
            </section>

            Hello Action {action}!!!
        </main>
    )
}

export default Action;