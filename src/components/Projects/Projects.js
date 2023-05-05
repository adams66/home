import { NavLink } from "react-router-dom";

import * as helper from "../../helper/helper";
import webSites from "../../key/projects.json";
import Card from "./cards/Card";

function Projects(props) {
    var websites = webSites[2].data;
    var websiteCut = websites.slice(0,3);
    console.log(websiteCut);


    console.log(websites);
    return (  
        <div className="main-container margin-bottom-100" id="projects">
        <div className="main-inner">
            <div className="section margin-auto">

                <div className="heading-container  margin-bottom-40">
                    <h2 className="color-main-heading-theme no-wrap text-center"><span  className="margin-right-10 color-text-Theme">02.</span>Projects</h2>
            
                  </div>

            <div className="grid-container margin-bottom-40">

              {websiteCut.map((w)=>{
    
      
                return(
                    
                    <Card data={w} />



                )



              })}

            </div>
            <div className="more flex flex-j-center">
            <NavLink  className="btn padding-15  margin-auto color-text-Theme color-border-Theme" to="/home/projects">All Projects</NavLink>
            </div>
        </div>
    </div>
                
</div>

    );
}

export default Projects;