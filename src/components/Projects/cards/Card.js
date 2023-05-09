import "./card.css";


function Card(props) {
    var data = props.data;



    return ( <div style={{position: "relative"}} class="cardItem padding-30 ">
    <a style={{ display: "block", position: "absolute", top: "0", right: "0", bottom: "0", width: "100%", zIndex:"2"}} href={data.link }> </a>   
       
       <div class="card  flex flex-column flex-j-spacedBetween">
           <div class="icon-container flex flex-j-spacedBetween margin-bottom-20">
               <i  class="ri-folder-line icon-size cardFolder"></i>
               <a class="text-decoration-none" href={"'" + data.link + "'"} target="_blank"> <i class="ri-external-link-line cardLinkIcon icon-size"></i></a>
    
           </div>
    
           <div class="card-heading margin-bottom-20 off-white">
               <h3 class="cardheading margin-bottom-10">{data.Name}</h3>
               <p class="paragraphs">{data.About}</p>
    
           </div>
    
           <div class="tech">
               <ul class="tech-list">
    
    
               <li><p className="cardTech">{data.tech.tech1}</p></li>
               <li><p className="cardTech">{data.tech.tech2}</p></li>
               <li><p className="cardTech">{data.tech.tech3}</p></li>
           
               </ul>
           </div>
       </div>
    </div> );
}

export default Card;