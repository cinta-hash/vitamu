export default function Header(){
    return (
      <div className="w-full fixed left-0 top-0 z-50">
        <div className="flex md:space-x-20 md:justify-center bg-white shadow-md shadow-amber-500">
          <div className="flex space-x-4 md:space-x-0">
            <img className="w-12 md:w-20 m-auto rounded-full" src="/logo.jpeg" alt="vitamu-logo" />
            <h1 className="text-4xl font-serif font-extrabold p-2">vitamu</h1>
          </div>
          <h1 className="text-xl md:text-3xl text-orange-600 p-4 space-x-4"><i class="fa-solid fa-phone"><span className="hidden md:inline text-lg p-2">call to order</span></i></h1>
          <div className="flex">
             <h1 className="md:text-3xl text-xl text-orange-600 p-4 font-bold"><i class="fa-solid fa-magnifying-glass"></i></h1>
             <div className="m-2 hidden md:inline-flex md:relative">
                <input type="text" id="search" placeholder="search food" className="rounded-md shadow-md shadow-slate-300 p-2 w-full"/>
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2"><i class="fa-solid fa-xmark"></i></button>
             </div>
          </div>
          <div className="flex">
            <h1 className="md:text-3xl text-xl text-orange-600 p-4 font-bold space-x-4"><i class="fa-solid fa-location-dot"></i></h1>
            <div className="hidden md:inline-flex md:relative md:m-2">
                <input type="text" id="search-loc" placeholder="choose location" className="rounded-md shadow-md shadow-slate-300 p-2 w-full"/>
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2"><i class="fa-solid fa-xmark"></i></button>
             </div>
          </div>
          <div className="flex mr-6">
            <h1 className="md:text-3xl text-xl text-black p-4 font-bold space-x-4 cursor-pointer"><i class="fa-solid fa-moon fa-flip-horizontal"></i></h1>   
          </div>
          
      </div>
   </div>
 )

}