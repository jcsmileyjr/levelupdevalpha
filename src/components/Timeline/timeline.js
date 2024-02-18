import postcss from "postcss";
import Acheivement from "../Acheivement/acheivement";

const Timeline = ({data}) => {
    return (
        <section>
            <p className="text-center text-xl font-bold mb-4 md:mb-0">Timeline</p>
            <div className="md:hidden flex flex-col items-center justify-center">
                {
                    data.map( (entry, index) => {
                        return <Acheivement key={`entry-${index}`} content={entry} colorId={index % 2} />
                    })
                }
            </div>
            <div className="hidden md:flex md:flex-row">
                <div className="w-2/4 p-4 border-r-2 border-dotted border-black flex flex-col items-center">
                    {
                        data.map( (entry, index) => {
                            if(index % 2 === 0) {
                                return <Acheivement key={`entry-${index}`} content={entry} colorId={index % 2} />
                            }
                        })
                    }                    
                </div>
                <div className="w-2/4 p-4 mt-28 flex flex-col items-center">
                {
                        data.map( (entry, index) => {
                            if(index % 2 !== 0) {
                                return <Acheivement key={`entry-${index}`} content={entry} colorId={index % 2} />
                            }
                        })
                    }  
                </div>
            </div>
        </section>
    )
}

export default Timeline;