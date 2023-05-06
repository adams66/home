export function theme(key){
var checkTheme = localStorage.getItem("home-theme");
var r = document.querySelector(":root");



if(checkTheme == null || checkTheme == ""){
localStorage.setItem("home-theme", "oreo");

}




else{

switch(checkTheme){

case "default":
console.log("default");
break;
case "oreo":
r.style.setProperty("--background", key.oreo.background);
r.style.setProperty("--mainTheme", key.oreo.themeMain);
r.style.setProperty("--particle", key.oreo.particles);
r.style.setProperty("--mainHeading", key.oreo.mainText);
r.style.setProperty("--paragraph", key.oreo.paragraph);
r.style.setProperty("--slideBar", key.oreo.slidebar);
r.style.setProperty("--cardBorder", key.oreo.cardsBorder);
console.log("oreo");
break;
case "sourPatch":
r.style.setProperty("--background", key.sourPatch.background);
r.style.setProperty("--mainTheme", key.sourPatch.themeMain);
r.style.setProperty("--particle", key.sourPatch.particles);
r.style.setProperty("--mainHeading", key.sourPatch.mainText);
r.style.setProperty("--paragraph", key.sourPatch.paragraph);
r.style.setProperty("--slideBar", key.sourPatch.slidebar);
r.style.setProperty("--cardBorder", key.sourPatch.cardsBorder);
break;



}




}



}