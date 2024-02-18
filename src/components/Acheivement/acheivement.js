const Acheivement = ({content}) => {
    return (
        <div className= {`min-w-64 w-64 min-h-56 p-8 rounded-full bg-red-200 flex flex-col items-center mb-8`} >
            <h3 className="font-bold text-xl text-center">{content.title}</h3>
            <p className="m-2">{content.description}</p>
            <p className="font-medium">{content.date}</p>
        </div>
    );
}

export default Acheivement;