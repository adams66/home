import { useState } from "react";
import BlankLayout from "../../layout/BlankLayout/BlankLayout";

function Theme() {
    const [themeCount, setThemeCount] = useState(0);


    function countUp(){

        setThemeCount(themeCount + 1);
        console.log(themeCount);

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





    return ( 
        <BlankLayout>
        <div style={{height: "100%"}}>
        <div onClick={countDown} style={{cursor:"pointer", display:"flex", justifyContent:"center", alignItems: "center", position: "fixed", left:"30px", top:"50%",width: "50px", height:"50px"}}><i style={{color:"red", fontSize:"45px"}} class="ri-arrow-left-circle-line"></i></div>



        <div onClick={countUp}  style={{cursor:"pointer", display:"flex", justifyContent:"center", alignItems: "center", position: "fixed", right:"30px", top:"50%",width: "50px", height:"50px"}}><i style={{color:"red", fontSize:"45px"}} class="ri-arrow-right-circle-line"></i></div>

        </div>



        </BlankLayout>
     );
}

export default Theme;