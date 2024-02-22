import postcss from "postcss";
import Acheivement from "../Acheivement/acheivement";

/**
 * Timeline component that consumes an array of all data and displays based on dates
 * @param {array} data = array of objects representing different event types like skills, roles, and projects
 * 
 * Todo: Sort data by dates
 * Todo: Possible take in multiple steams of data to be combined here
 */
const Timeline = ({data}) => {
    return (
        <section>
            <p className="text-center text-xl font-bold mb-4 md:mb-0">Timeline</p>

            {/* Mobile View */}
            <div className="md:hidden flex flex-col items-center justify-center">
                {                    
                    data.map( (entry, index) => {
                        {/* Apply specific background color based on colorId being a 0 (even) or 1 (odd) */}
                        return <Acheivement key={`entry-${index}`} content={entry} colorId={index % 2} />
                    })
                }
            </div>

            {/* Desktop View */}
            <div className="hidden md:flex md:flex-row">
                <div className="w-2/4 p-6 border-r-2 border-dotted border-black flex flex-col items-center lg:pl-0">
                    {
                        data.map( (entry, index) => {
                            {/* If array index is an even number, apply specific background color (colorId) */}
                            if(index % 2 === 0) {
                                return <Acheivement key={`entry-${index}`} content={entry} colorId={index % 2} position="left" />
                            }
                        })
                    }                    
                </div>
                <div className="w-2/4 p-6 pl-6 mt-28 flex flex-col items-center lg:pr-0">
                    {
                        data.map( (entry, index) => {
                            {/* Apply specific background color based on colorId being a 0 (even) or 1 (odd) */}
                            if(index % 2 !== 0) {
                                return <Acheivement key={`entry-${index}`} content={entry} colorId={index % 2} position="right" />
                            }
                        })
                    }  
                </div>
            </div>
        </section>
    )
}

export default Timeline;