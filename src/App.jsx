import Card from "./Card"
import Header from "./Header"
import Section from "./Section"
import Data from "./Data"

function App() {
  const cards = Data.map((item)=>{
    return(
      <div>
         <Card 
         key={item.id}
         img={item.imageURL}
         name={item.name}
         description={item.description}
         rating ={item.rating}
         discount={item.discountApplies}
         />
      </div>
    )
  })
  return (
    <div className="bg-yellow-500 h-full">
       <Header />
       <Section /> 
       {cards}
    </div>
  
  )
}

export default App
