import IconContainer from "../IconContainer/iconContainer";

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
        <div className={`flex flex-col md:flex-row gap-4 items-center w-full ${position === 'right'? 'justify-start' : 'justify-end '}`}>
            <div className= {`min-w-64 w-72 p-8 pt-0 rounded-lg flex flex-col items-start mb-8 shadow-md border-2 border-solid ${colorId === 1 ? 'bg-babygreen border-babygreen' : 'bg-babyblue border-babyblue'}`} >
                <IconContainer type={content.actionType} />
                <h3 className="font-bold text-xl">{content.title}</h3>
                <p className="my-2">{content.description}</p>
                <p className="font-bold md:hidden">{content.date} </p>
            </div>
            <div className={`hidden md:flex ${position === 'right'? 'order-first' : ''}`}>
                <p className={`font-bold `}>{content.date} </p>
            </div>
        </div>
    );
}

export default Acheivement;