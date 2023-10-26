import Card from "./Card"
import Header from "./Header"
import Section from "./Section"
import Data from "./Data"
import Footer from "./Footer"
import Menu from "./Menu"
import Specials from "./Specials"

function App() {
  const cards = Data.map((item)=>{
    return(
      <div>
         <Card 
         key={item.id}
        //  img={item.imageURL}
        //  name={item.name}
        //  description={item.description}
        //  price={item.price}
        //  rating ={item.rating}
        //  discount={item.discountApplies}
        item={item}
         />
      </div>
    )
  })
  return (
    <div className="bg-yellow-500 h-full">
       <Header />
       <Section /> 
       <Menu />
       <section className="md:flex md:flex-nowrap md:gap-6 md:overflow-x-auto">
         {cards}
       </section>
       <Specials />
       <div className="md:flex md:flex-nowrap md:gap-6 md:overflow-x-auto mt-6">
         {cards}
       </div>
      
       <Footer />
    </div>
  
  )
}

export default App
