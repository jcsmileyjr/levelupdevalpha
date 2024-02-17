import postcss from "postcss";


const Acheivement = ({content, position}) => {
    return (
        <div className= {`min-w-64 w-64 min-h-56 p-8 rounded-full bg-red-200 flex flex-col items-center mb-8`} >
            <h3 className="font-bold text-xl text-center">{content.title}</h3>
            <p className="m-2">{content.description}</p>
            <p className="font-medium">{content.date}</p>
        </div>
    );
}

const Timeline = ({data}) => {
    return (
        <section>
            <p className="text-center text-xl font-bold">Timeline</p>
            <div className="flex flex-row">
                <div className="w-2/4 p-4 border-r-2 border-dotted border-black flex flex-col items-center">
                    {
                        data.map( (entry, index) => {
                            if(index % 2 === 0) {
                                return <Acheivement key={`entry-${index}`} content={entry} />
                            }
                        })
                    }                    
                </div>
                <div className="w-2/4 p-4 mt-28 flex flex-col items-center">
                {
                        data.map( (entry, index) => {
                            if(index % 2 !== 0) {
                                return <Acheivement key={`entry-${index}`} content={entry} />
                            }
                        })
                    }  
                </div>
            </div>
        </section>
    )
}

export default Timeline;