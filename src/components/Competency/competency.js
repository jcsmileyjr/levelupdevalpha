import Link from 'next/link';
import Image from 'next/image';
import Star from '../../images/star-icon-black.png';
import Globe from '../../images/internet-icon-black.png';
import GlobeOrange from '../../images/internet-icon-orange.png';

/**
 * Component that displays the title of data via a wanted or achieved section
 * @param {string} title - Name of the section and name of the wizard page
 * @param {array} content - array of objects
 * @param {string} content.title - title of skill, project, role, experience to be displayed
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
        <section className='mb-8 sm:m-auto sm:mb-8 sm:w-11/12'>
            {/* Displays title of the Competency */}
            <div className='flex flex-row justify-between items-center mb-2'>
                <h2 className='text-2xl font-bold text-primaryGreen'>{title}</h2>
                <Link className='group flex justify-center items-center underline text-base text-gray-700 hover:text-primaryOrange font-bold' href={`/Action/${title}`}>
                    Go to {title} Page
                    <Image priority={false} src={Globe} width={15} height={15} alt="" className='ml-2 group-hover:hidden' />
                    <Image priority={false} src={GlobeOrange} width={15} height={15} alt="" className='ml-2 hidden group-hover:block' />
                </Link>
            </div>
            <div className='bg-babygreen rounded-lg flex flex-col sm:flex-row pb-4 py-4 px-4 sm:py-0'>
                {/* Display the "Want" section */}
                <div className='flex-1 border-b-2 sm:border-r-2 sm:border-b-0 border-solid border-black sm:pr-4 '>
                    <p className='underline text-xl text-gray-700 font-bold text-center my-4'>List of {title} <span className="whitespace-nowrap">You want</span></p>
                    <div className='flex flex-row flex-wrap'>
                        {
                            wants.map( (item, index) => (
                                <p key={`item-${index}`} className='mb-2 basis-3/6 flex flex-row items-center'>
                                    <Image priority={false} src={Star} width={10} height={10} alt="" className='mr-2' />
                                    {item.title}
                                </p>
                            ))
                        }
                    </div>
                </div>

                {/* Display the "Achieved" section */}
                <div className='flex flex-col flex-1 border-t-2 sm:border-l-2 sm:border-t-0 border-solid sm:pl-4 '>
                    <p className='underline text-xl  text-gray-700 font-bold text-center my-4'>List of Achievements</p>
                    <div className='flex flex-row flex-wrap'>
                        {
                            acheived.map( (item, index) => (
                                <p key={`item-${index}`} className='mb-2 basis-3/6 flex flex-row items-center'>
                                    <Image priority={false} src={Star} width={10} height={10} alt="" className='mr-2' />
                                    {item.title}
                                </p>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Competency;