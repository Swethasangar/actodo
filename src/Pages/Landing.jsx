import { useLocation } from "react-router-dom"
import Header from "../components/Header";
import Card from "../components/Card";
import TodoContainer from "../components/Todocontainer";
function Landing(){
    const data=useLocation()
   return(  
    <section className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        {/* Header */}
        <Header username={data.state.user}/>
        {/* Card */}
        <section className="flex justify-between gap-10 flex-wrap my-5">
          <Card bgcolor={"#F0E2A3"} title={"23°"} subtitle={"Chennai"} />
          <Card
            bgcolor={"#F9D4BB"}
            title={"October 24"}
            subtitle={"13:24:07"}
          />
          <Card bgcolor={"#89D2DC"} title={"Built Using"} subtitle={"React"} />
        </section>
        <TodoContainer/>
      </div>
     
    </section>
   )
}
export default Landing