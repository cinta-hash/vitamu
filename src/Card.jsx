
export default function Card(props){
  // if (props.discount === true){
  //   return <button>{props.discount}</button>
  // }else{
  //   return null
  // }
     return (
   <div className="card container flex flex-col relative rounded-xl w-full bg-orange-500 bg-opacity-10 backdrop-blur-md">
      <div className="relative">
      {!props.item.discount && <div className="discount absolute top-2 left-2 p-2 rounded-sm font-bold bg-white">25% off</div>}
        <img src={props.item.imageURL} alt={props.name} />
        <h2>{props.item.name}</h2>
        <p>${props.item.price}</p>
        <p>{props.item.rating}</p>
        <p>{props.item.description}</p>
        
      </div>
   </div>
  )

}