import Image from 'next/image';
import Book from '../../images/book-messy-orange.png';
import Hammer from '../../images/hammer-icon-orange.png';
import Briefcase from '../../images/briefcase-icon-orange.png';
import Cap from '../../images/graduation-cap-icon-orange.png';

const IconContainer = ({type}) => {
    return (
        <div className='flex justify-end w-full my-2'>
            {type === "Skills" &&
                <Image priority={false} src={Book} width={25} height={15} alt="" />
            }
            {type === "Projects" &&
                <Image priority={false} src={Hammer} width={25} height={15} alt="" />
            }
            {type === "Titles" &&
                <Image priority={false} src={Briefcase} width={25} height={15} alt="" />
            }
            {type === "Experiences" &&
                <Image priority={false} src={Cap} width={25} height={15} alt="" />
            }            
        </div>
    )
}

export default IconContainer;