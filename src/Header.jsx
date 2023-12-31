import{useState} from "react"
export default function Header(){
    return (
      <div className="w-full fixed left-0 top-0 z-50">
      <div className="flex space-x-0 md:space-x-20 md:justify-center bg-white shadow-md shadow-amber-500 ">
          <div className="flex space-x-4 md:space-x-0">
            <img className="w-12 md:w-20 m-auto rounded-full" src="/logo.jpeg" alt="vitamu-logo" />
            <h1 className="text-4xl font-serif font-extrabold p-2">vitamu</h1>
          </div>
          <div className="pt-2"> 
            <h1 className="text-xl md:text-3xl text-orange-600 p-2 text-center md:space-x-4"><i class="fa-solid fa-phone"><span className="hidden md:inline text-lg p-2">call to order</span></i></h1>
            </div>
          <div className="flex pt-2">
             <h1 className="md:text-3xl text-xl text-orange-600 p-2 text-center font-bold"><i class="fa-solid fa-magnifying-glass"></i></h1>
             <div className="m-2 hidden md:inline-flex md:relative">
                <input type="search" id="search" placeholder="search food" className="rounded-md shadow-md shadow-slate-300 p-2 w-full"/>     
             </div>
          </div>
          <div className="flex pt-2">
            <h1 className="md:text-3xl text-xl text-orange-600 p-2 text-center font-bold md:space-x-4"><i class="fa-solid fa-location-dot"></i></h1>
            <div className="hidden md:inline-flex md:relative md:m-2">
                <input type="search" id="search-loc" placeholder="choose location" className="rounded-md shadow-md shadow-slate-300 p-2 w-full"/>
             </div>
          </div>   
      </div>
   </div>
 )

}