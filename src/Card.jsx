
export default function Card(props){
  console.log(props)
     return (
   <div className="card container flex flex-col relative rounded-xl w-full bg-orange-500 bg-opacity-10 backdrop-blur-md">
      <div>
        <img src={props.img} alt="burger" />
      </div>
   </div>
  )

}