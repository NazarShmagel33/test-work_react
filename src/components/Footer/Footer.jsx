

const Footer = ()=>{
    return(
        <div className="container mx-auto md:flex items-center justify-between px-14">
           <div className="block  text-sm text-center md:text-xl text-blue-900 font-semibold ">
            @Copyright all reserved 2023
            </div>
            <nav>
            <ul className="hidden md:flex space-x-4 text-blue-900 font-semibold text-lg">
                <li><a href="#">Home</a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact us</a></li>
          </ul>
        </nav> 
        </div>
    )
}

export default Footer;