
export default function Card(props){
  // if (props.discount === true){
  //   return <button>{props.discount}</button>
  // }else{
  //   return null
  // }
     return (
      <div className="flex-initial md:w-80 flex-col md:flex-row flex-wrap items-center justify-center gap-4">
      <div className="relative mb-4 font-serif text-white text-lg bg-black bg-opacity-10 backdrop-blur-md p-2 m-2 rounded-md items-center">
        {!props.item.discountApplies && <div className="discount absolute top-2 left-2 rounded-lg text-sm p-1 text-gray-600 font-semibold bg-white">25% off</div>}
        <div>
          <img src={props.item.imageURL} alt={props.name} className="w-32 h-32 rounded-lg" />
        </div>
        <hr />
        <h2>{props.item.name}</h2>
        <p>${props.item.price}</p>
        <p><span className="text-orange-600"><i class="fa-solid fa-star"></i></span> {props.item.rating}</p>
        <p>{props.item.description}</p>  
        <button className="bg-orange-500 rounded-md p-1 w-full hover:bg-orange-600">order now</button> 
      </div>
    </div>
  )

}