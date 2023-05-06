import { useState } from "react";
import BlankLayout from "../../layout/BlankLayout/BlankLayout";
import key from "../../key/key.json"

function Theme() {
    const [themeCount, setThemeCount] = useState(0);


    function countUp(){
        if(themeCount < key.theme.length - 1){
            setThemeCount(themeCount + 1);
            console.log(key.theme.length);
        }

        else{
            console.log("Looks like the end of the road");
        }


    }


    function countDown(){

        if(themeCount > 0){
            setThemeCount(themeCount -1)
            console.log(themeCount);
        }
        else{
            console.log("Stop. your at zero");
        }


    }

    function themeSet(event){
       localStorage.setItem("home-theme",event.target.getAttribute("data-theme") );
       window.location.href = "/home";
    }





    return ( 
        <BlankLayout>
        <div style={{height: "100%"}}>
        <div onClick={countDown} style={{cursor:"pointer", display:"flex", justifyContent:"center", alignItems: "center", position: "fixed", left:"30px", top:"50%",width: "50px", height:"50px"}}><i style={{color:"red", fontSize:"45px"}} class="ri-arrow-left-circle-line"></i></div>

        <div stlye={{height:"100vh"}}><img data-theme={key.theme[themeCount].theme} onClick={themeSet} style={{width: "30%",position: "absolute", left: "50%", top: "50%", transform:"translate(-50%,-50%)"}} src={key.theme[themeCount].image}/></div>

        <div onClick={countUp}  style={{cursor:"pointer", display:"flex", justifyContent:"center", alignItems: "center", position: "fixed", right:"30px", top:"50%",width: "50px", height:"50px"}}><i style={{color:"red", fontSize:"45px"}} class="ri-arrow-right-circle-line"></i></div>

        </div>



        </BlankLayout>
     );
}

export default Theme;