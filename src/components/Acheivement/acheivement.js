/**
 * Component to display an acheivement event. Used on the landing page and Timeline component
 * @param {odject}  content.title = title of the event
 * @param {odject}  content.description = description of the event
 * @param {odject}  content.date = event date
 * @param {number}  colorId = number used to determine what background color the event should used
 * @param {string}  position = left or right string used to tell the component which side of the timeline line it should go
 */
const Acheivement = ({content, colorId, position}) => {
    return (
        <div className="flex flex-row justify-center items-center">
            <div className= {`min-w-64 w-64 min-h-56 p-8 rounded-full flex flex-col items-center mb-8 ${colorId === 1 ? 'bg-babygreen' : 'bg-babyblue'}`} >
                <h3 className="font-bold text-xl text-center">{content.title}</h3>
                <p className="m-2">{content.description}</p>
            </div>
            <div className={`flex relative ${position === 'right'? 'order-first' : ''}`}>
                <p className={`absolute text-primaryGreen font-bold ${position === "left"?'left-16 bottom-6': 'right-16 bottom-2'} `}>{content.date} </p>
            </div>
        </div>
    );
}

export default Acheivement;