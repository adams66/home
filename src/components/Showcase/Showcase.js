import { NavLink } from "react-router-dom";
import * as helper from "../../helper/helper";

function Showcase(props) {




    return ( 
        
<div className="main-container height-100-vh">
        <div className="main-inner flex flex-j-center flex-a-center height-100">
    
            <div className="section">
                <h3  className="margin-bottom-20 color-text-Theme">Hi, my name is</h3>
                <h1 className="color-main-heading-theme margin-bottom-20 gap-10">Dalton Adams. <br /> <span className="subHeading">I build things for the web.</span></h1>
                <p  className="paragraphs max-width-400 margin-bottom-40 ">I'm a web developer specializing in frontend layouts, automation and administration. Every problem that we face has the opportunity to be fixed.</p>
                <a   style={{display: "inline-block" }} className="btn padding-15 color-text-Theme color-border-Theme" href="#projects">Check out my Project!</a>
              </div>
                </div>
               
            


            </div>



     );
}

export default Showcase;
    


