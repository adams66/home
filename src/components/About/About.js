import * as helper from "../../helper/helper";

function About(props) {

    return (  <div className="main-container margin-bottom-100" id="about">

    <div className="main-inner flex flex-j-center flex-a-center">
        <div className="section">
 
            <div className="heading-container flex  flex-a-center gap-20 margin-bottom-40">
            <h2 className="color-main-heading-theme no-wrap"><span className="margin-right-10 color-text-Theme">01.</span>About Me</h2>
            <div className="heading-line"></div>
    
        </div>
    
      
    
        <div className="content-container ">
            <div className="container-1">
                <p className="paragraphs margin-bottom-20">Hello! My name is Dalton and I enjoy doing projects that involve the web. My interest in web development started when I took a css course and I haven't stopped from there. I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                
                <p className="paragraphs margin-bottom-20">My experience consists of creating responsive layouts with the power of html, css, and javascript. I also have experience working with databaes and API integrations using technologies like php and mysql.</p>
                
                    
                <p className="paragraphs margin-bottom-20">I genuinely care about people, and love helping fellow designers work on their craft. Love to hear more about your web project!</p>
             
                
              
    
    
            </div>
            <div className="container-2">
                <div style={{ position: "relative", width: "100%"}}>
                <img  className="me" width="100%" src="/home/me.jpg" alt="" />
                <div  className="overlay"></div>
                </div>
            </div>
        </div>
    
    </div>
    </div>
    </div>);
}

export default About;