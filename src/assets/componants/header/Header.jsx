import "./Header.css"
import photo from "../images/Rectangle Copy (1).png"
import icone from "../images/Eye.png"

function Header() {
    return(
        <>
        
        <div style={{ position: "relative", display: "inline-block" }}>
                <img src={photo} alt="Sample" className="photo" />
               <img src={icone} alt="Eye Icon" className="icone" />
           </div>

<h1 className="heading">Equilibrium #3429</h1>
        </>


    )
}


export default Header
