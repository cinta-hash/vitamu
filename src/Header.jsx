export default function Header(){
    return (
      <div className="w-full fixed left-0 top-0">
        <div className="flex md:space-x-20 md:justify-center bg-white shadow-md shadow-amber-500">
          <div className="flex">
            <img className="w-12" src="src/images/logo.jpeg" alt="vitamu-logo" />
            <h1 className="text-4xl font-serif font-extrabold p-2">vitamu</h1>
          </div>
          <h1 className="text-xl md:text-3xl text-orange-600 p-2"><i class="fa-solid fa-phone"></i></h1>
          <div className="flex">
             <h1 className="md:text-3xl text-xl text-orange-600 p-2 font-bold"><i class="fa-solid fa-magnifying-glass"></i></h1>
             <div className="relative m-2">
                <input type="text" placeholder="search food" className="rounded-md shadow-md shadow-slate-300 p-2 w-full"/>
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2"><i class="fa-solid fa-xmark"></i></button>
             </div>
          </div>
          <div className="flex">
            <h1 className="md:text-3xl text-xl text-orange-600 p-2 font-bold"><i class="fa-solid fa-location-dot"></i></h1>
            <div className="relative m-2">
                <input type="text" placeholder="choose location" className="rounded-md shadow-md shadow-slate-300 p-2 w-full"/>
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2"><i class="fa-solid fa-xmark"></i></button>
             </div>
          </div>
         
        </div>
      </div>
  
 )

}