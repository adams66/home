export function theme(key){
var checkTheme = localStorage.getItem("home-theme");
var r = document.querySelector(":root");



if(checkTheme == null || checkTheme == ""){
localStorage.setItem("home-theme", "undecided");

}




else{

switch(checkTheme){

case "default":
console.log("default");
break;
case "oreo":
    console.log(key[0]);

r.style.setProperty("--background", key[1].background);
r.style.setProperty("--mainTheme", key[1].themeMain);
r.style.setProperty("--particle", key[1].particles);
r.style.setProperty("--mainHeading", key[1].mainText);
r.style.setProperty("--paragraph", key[1].paragraph);
r.style.setProperty("--slideBar", key[1].slidebar);
r.style.setProperty("--cardBorder", key[1].cardsBorder);
console.log("oreo");
break;
case "sourPatch":
r.style.setProperty("--background", key[2].background);
r.style.setProperty("--mainTheme", key[2].themeMain);
r.style.setProperty("--particle", key[2].particles);
r.style.setProperty("--mainHeading", key[2].mainText);
r.style.setProperty("--paragraph", key[2].paragraph);
r.style.setProperty("--slideBar", key[2].slidebar);
r.style.setProperty("--cardBorder", key[2].cardsBorder);
break;



}




}



}