import Link from 'next/link';

/**
 * Component that displays the title of data via a wanted or achieved section
 * @param {string} title - Name of the section and name of the wizard page
 * @param {array} content - array of objects
 * @param {string} content.title - title of skill, project, role, experience to be displayed
 * @returns 
 */
const Competency = ({title, content}) => {

    // Filters the array of objects for any that hasn't been achieved.
    const wants = content.filter((data) => {
        if(data.date === "") return data
    })

    // Filter the array of objects for any that has been acheived.
    const acheived = content.filter((data) => {
        if(data.date.length > 0) return data;
    })

    return (
        <section className='mb-8'>
            {/* Displays title of the Competency */}
            <div className='flex flex-row justify-between items-center mb-2'>
                <h2 className='text-2xl font-bold text-primaryGreen'>{title}</h2>
                <Link className='underline text-base text-gray-700 font-bold' href={`/${title}`}>Go to the {title} Page</Link>
            </div>
            <div className='bg-babygreen flex flex-row pb-4 px-4'>
                {/* Display the "Want" section */}
                <div className='flex-1 border-r-2 border-solid border-black '>
                    <p className='underline text-base text-gray-700 font-bold text-center my-4'>List of {title} You want</p>
                    <div className='flex flex-row flex-wrap'>
                        {
                            wants.map( (item, index) => (
                                <p key={`item-${index}`} className='mb-2 basis-3/6'>{item.title}</p>
                            ))
                        }
                    </div>
                </div>

                {/* Display the "Achieved" section */}
                <div className='flex flex-col flex-1 border-l-2 border-solid border-black pl-4 '>
                    <p className='underline text-base text-gray-700 font-bold text-center my-4'>List of your Achievements</p>
                    <div className='flex flex-row flex-wrap'>
                        {
                            acheived.map( (item, index) => (
                                <p key={`item-${index}`} className='mb-2 basis-3/6'>{item.title}</p>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Competency;