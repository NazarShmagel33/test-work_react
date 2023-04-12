

const HeroSection = ()=>{
    return(
        <div className=" container mx-auto h-96 px-14  bg-gradient-to-r from-sky-500 to-indigo-500 flex items-center">
            <div className="flex flex-col ">
                <div className="text-2xl  md:text-4xl mb-5 text-white">
                    Welcome to EduSite!     
                </div>
                <div className="text-xl md:text-2xl text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore eos incidunt error fugit iure iusto nemo temporibus doloremque corrupti quaerat.
                </div>
                <div className="mt-8">
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Explore Courses</button>
                </div>
            </div>
            
        
        </div>
    )
}

export default HeroSection;