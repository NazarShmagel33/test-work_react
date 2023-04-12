

const AppHeader = () =>{

    return(
      <div className="container mx-auto px-14 py-5 ">
        <div className="flex items-center justify-between ">
          <div className="text-lg font-bold">
          Logo
        </div>
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-4 text-blue-900 font-semibold text-lg">
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </nav>
        <button className="inline-block md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

        </button>
        </div>
    </div>
    )
}

export default AppHeader;