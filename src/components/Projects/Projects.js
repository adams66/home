import { NavLink } from "react-router-dom";
import * as helper from "../../helper/helper";

function Projects(props) {

    return (  
        <div className="main-container margin-bottom-100" id="projects">
        <div className="main-inner">
            <div className="section margin-auto">

                <div className="heading-container  margin-bottom-40">
                    <h2 className="color-main-heading-theme no-wrap text-center"><span  className="margin-right-10 color-text-Theme">02.</span>Projects</h2>
            
                  </div>

            <div className="grid-container margin-bottom-40">
            <div style={{position: "relative"}} class="item padding-30 ">
     <a style={{ display: "block", position: "absolute", top: "0", right: "0", bottom: "0", width: "100%", zIndex:"2"}} href=""> </a>   
        
        <div class="card  flex flex-column flex-j-spacedBetween">
            <div class="icon-container flex flex-j-spacedBetween margin-bottom-20">
                <i  class="ri-folder-line icon-size color-text-Theme"></i>
                <a class="text-decoration-none" href="" target="_blank"> <i class="ri-external-link-line icon-color icon-size"></i></a>

            </div>

            <div class="card-heading margin-bottom-20 off-white">
                <h3 class="sub-headings margin-bottom-10">Name</h3>
                <p class="paragraphs">About</p>

            </div>

            <div class="tech">
                <ul class="tech-list">


                <li><p>Item 1</p></li>
                <li><p>Item 1</p></li>
                <li><p>Item 1</p></li>
            
                </ul>
            </div>
        </div>
    </div>

    <div style={{position: "relative"}} class="item padding-30 ">
     <a style={{ display: "block", position: "absolute", top: "0", right: "0", bottom: "0", width: "100%", zIndex:"2"}} href=""> </a>   
        
        <div class="card  flex flex-column flex-j-spacedBetween">
            <div class="icon-container flex flex-j-spacedBetween margin-bottom-20">
                <i class="ri-folder-line icon-size color-text-Theme"></i>
                <a class="text-decoration-none" href="" target="_blank"> <i class="ri-external-link-line icon-color icon-size"></i></a>

            </div>

            <div class="card-heading margin-bottom-20 off-white">
                <h3 class="sub-headings margin-bottom-10">Name</h3>
                <p class="paragraphs">About</p>

            </div>

            <div class="tech">
                <ul class="tech-list">


                <li><p>Item 1</p></li>
                <li><p>Item 1</p></li>
                <li><p>Item 1</p></li>
            
                </ul>
            </div>
        </div>
    </div>

    <div style={{position: "relative"}} class="item padding-30 ">
     <a style={{ display: "block", position: "absolute", top: "0", right: "0", bottom: "0", width: "100%", zIndex:"2"}} href=""> </a>   
        
        <div class="card  flex flex-column flex-j-spacedBetween">
            <div class="icon-container flex flex-j-spacedBetween margin-bottom-20">
                <i class="ri-folder-line  icon-size color-text-Theme"></i>
                <a class="text-decoration-none" href="" target="_blank"> <i class="ri-external-link-line icon-color icon-size"></i></a>

            </div>

            <div class="card-heading margin-bottom-20 off-white">
                <h3 class="sub-headings margin-bottom-10">Name</h3>
                <p class="paragraphs">About</p>

            </div>

            <div class="tech">
                <ul class="tech-list">


                <li><p>Item 1</p></li>
                <li><p>Item 1</p></li>
                <li><p>Item 1</p></li>
            
                </ul>
            </div>
        </div>
    </div>




      
            </div>
            <div className="more flex flex-j-center">
            <NavLink  className="btn padding-15  margin-auto color-text-Theme color-border-Theme" to="/projects">All Projects</NavLink>
            </div>
        </div>
    </div>
                
</div>

    );
}

export default Projects;