/**
 * Component to display an acheivement event. Used on the landing page and Timeline component
 * @param {odject}  content.title = title of the event
 * @param {odject}  content.description = description of the event
 * @param {odject}  content.date = event date
 * @param {number}  colorId = number used to determine what background color the event should used
 */
const Acheivement = ({content, colorId}) => {
    return (
        <div className= {`min-w-64 w-64 min-h-56 p-8 rounded-full flex flex-col items-center mb-8 ${colorId === 1 ? 'bg-babygreen' : 'bg-babyblue'}`} >
            <h3 className="font-bold text-xl text-center">{content.title}</h3>
            <p className="m-2">{content.description}</p>
            <p className="font-medium">{content.date}</p>
        </div>
    );
}

export default Acheivement;