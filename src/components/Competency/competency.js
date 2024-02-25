import Link from 'next/link';

const Competency = ({title, content}) => {

    const wants = content.filter((data) => {
        if(data.date === "") {
            return data;
        }
    })

    const acheived = content.filter((data) => {
        if(data.date.length > 0) return data;
    })

    return (
        <section className=''>
            <div className='flex flex-row justify-between items-center'>
                <h2 className=''>{title}</h2>
                <Link className='underline' href={`/${title}`}>Go to the {title} Page</Link>
            </div>
            <div className='bg-babygreen flex flex-row pb-4 px-4'>
                <div className='flex-1 border-r-2 border-solid border-black '>
                    <p className='underline text-base text-gray-700 font-bold text-center my-4'>List of {title} You want</p>
                    <div className='flex flex-col flex-wrap'>
                        {
                            wants.map( item => (
                                <p>{item.title}</p>
                            ))
                        }
                    </div>
                </div>
                <div className='flex flex-col flex-1 border-l-2 border-solid border-black pl-4 '>
                    <p className='underline text-base text-gray-700 font-bold text-center my-4'>List of your Achievements</p>
                    <div className='flex flex-col basis-3/6 flex-wrap max-h-40'>
                        {
                            acheived.map( item => (
                                <p>{item.title}</p>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Competency;