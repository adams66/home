export function theme(key){
var checkTheme = localStorage.getItem("theme");
var r = document.querySelector(":root");



if(checkTheme == null || checkTheme == ""){
var a = localStorage.getItem("theme");

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
console.log("oreo");
break;
case "sourPatch":
r.style.setProperty("--background", key.sourPatch.background);
r.style.setProperty("--mainTheme", key.sourPatch.themeMain);
r.style.setProperty("--particle", key.sourPatch.particles);
r.style.setProperty("--mainHeading", key.sourPatch.mainText);
r.style.setProperty("--paragraph", key.sourPatch.paragraph);
break;



}




}



}