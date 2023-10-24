import Card from "./Card"
import Header from "./Header"
import Section from "./Section"
import Data from "./Data"

function App() {
  const cards = Data.map((items)=>{
    return(
      <div>
         <Card 
         key={items.id}
         {...items}
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
