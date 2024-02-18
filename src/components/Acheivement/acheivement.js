const Acheivement = ({content, colorId}) => {
    console.log("colorID: ", colorId % 2);
    return (
        <div className= {`min-w-64 w-64 min-h-56 p-8 rounded-full flex flex-col items-center mb-8 ${colorId === 1 ? 'bg-babygreen' : 'bg-babyblue'}`} >
            <h3 className="font-bold text-xl text-center">{content.title}</h3>
            <p className="m-2">{content.description}</p>
            <p className="font-medium">{content.date}</p>
        </div>
    );
}

export default Acheivement;