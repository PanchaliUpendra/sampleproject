import React from "react"
import Navbar from "./components/Navbar"
import Bodypart from "./components/Bodypart";

function App()
{

    return(
       <div>
            <Navbar/>
            <section className="container">
                <Bodypart/>
            </section>
            
       </div>
        )
}
export default App;