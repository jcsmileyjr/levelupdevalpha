
const LogIn = () => {
    return (
        <main className="flex min-h-screen flex-col p-4">
            <section>
                <p className="font-bold underline text-primaryGreen">Level Up Dev - Log-in</p>
            </section>
            <div className="flex justify-center items-center mt-12">
                <section className="flex flex-row justify-center px-8 w-full sm:w-2/4 h-2/3 min-h-56 max-w-96 bg-babygreen">
                    <div className="flex-1"></div>
                    <div className="flex flex-col flex-1">
                        <label className="font-bold text-primaryGreen text-2xl my-2">Email</label>
                        <input className="p-2 border border-primaryGreen bg-white text-xl rounded-lg" type="email"></input>
                        <button className="p-2 mt-4 border border-primaryGreen font-bold text-2xl bg-white rounded-lg text-primaryGreen" type="button">Log In</button>
                    </div >
                    <div className="flex-1"></div>
                </section>
            </div>
        </main>
    )
}

export default LogIn;