import Image from 'next/image';
import Book from '../../images/book-messy-orange.png';
import Hammer from '../../images/hammer-icon-orange.png';

const IconContainer = ({type}) => {
    return (
        <div className='flex justify-end w-full my-2'>
            {type === "skill" &&
                <Image priority={false} src={Book} width={25} height={15} alt="" />
            }
            {type === "project" &&
                <Image priority={false} src={Hammer} width={25} height={15} alt="" />
            }
            {type === "" &&
                <Image priority={false} src={Book} width={25} height={15} alt="" />
            }
        </div>
    )
}

export default IconContainer;