import "./Section.css"
import img from "../images/Combined Shape (1).png"
import imge from "../images/Clock.png"
import line from "../images/Rectangle (4).png"



function Section() {
    return(
        <>
<p className="paragrraph">Our Equilibrium collection promotes <br />balance and calm.</p>

<div className="container">
   <div className="simpol">
<img src={img} alt="Sample"  className="phot" />
    <p className="ETH">0.041 ETH</p>
   </div>
  <div className="simpol">
<img src={imge} alt="Sample"  className="phot"/>
<p className="clock">3 days left</p>
  </div>
</div>

<img src={line} alt="line" />

        </>
    )
}

export default Section
