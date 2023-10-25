export default function Section(){
    return (
  <div className="md:mt-20 mt-12 m-auto md:grid md:grid-cols-2"> 
    <div className="p-4">
      <img src="/spicynoodles.png" alt="noodles"/>
    </div>
    <div className="flex-wrap inline-block m-auto text-center pl-6">
      <div className="block container p-10 m-auto">
            <h1 className="text-4xl font-bold text-white">Are you hungry?</h1>
            <h3 className="text-4xl font-semibold text-white">It's lunchtime somewhere anyway! Order Now!!</h3>
             <div className="space-x-4 container">
                <button className="mt-5 text-sm text-gray-400 md:p-2 mb-2 md:text-xl bg-white rounded-md  hover:text-white hover:bg-orange-500"><i class="fa-solid fa-motorcycle"></i> Delivery</button>
                <button className="mt-5 text-sm text-gray-400 md:p-2 mb-2 md:text-xl bg-white rounded-md hover:text-white hover:bg-orange-500"><i class="fa-solid fa-bag-shopping"></i> pickup</button>
             </div>
             <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center w-full h-16 relative">
                <h1 className="md:text-5xl text-2xl text-orange-600 p-4 font-bold m-0"><i class="fa-solid fa-location-dot"></i></h1>
                <input type="text" id="search-location" placeholder="choose location" className="rounded-md shadow-md shadow-slate-300 p-2 w-full md:w-100"/>
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2"><i class="fa-solid fa-xmark"></i></button>
             </div>
             <div className="flex items-center w-full h-16 relative">
                <h1 className="md:text-4xl text-2xl text-orange-600 p-4 font-bold m-0"><i class="fa-solid fa-magnifying-glass"></i></h1>
                <input type="text" id="search-food" placeholder="search food" className="rounded-md shadow-md shadow-slate-300 p-2 w-full md:w-100"/>
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2"><i class="fa-solid fa-xmark"></i></button>
             </div>
             </div>
           
    </div>
    </div>
    
 </div>
 )
}