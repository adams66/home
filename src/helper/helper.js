export function theme(key){
var checkTheme = localStorage.getItem("home-theme");
var r = document.querySelector(":root");



if(checkTheme == null || checkTheme == ""){
localStorage.setItem("home-theme", "undecided");
}


else{
switch(checkTheme){
case "Pizza Planet":
    r.style.setProperty("--logo", key[0].logo);
    r.style.setProperty("--numbers", key[0].numbers);
    r.style.setProperty("--navLink", key[0].navLink);
    r.style.setProperty("--background", key[0].background);
    r.style.setProperty("--mainTheme", key[0].themeMain);
    r.style.setProperty("--particle", key[0].particles);
    r.style.setProperty("--mainHeading", key[0].mainText);
    r.style.setProperty("--paragraphs", key[0].paragraph);
    r.style.setProperty("--slideBar", key[0].slidebar);
    r.style.setProperty("--cardBorder", key[0].cardsBorder);
break;
case "oreo":
    console.log(key[0]);
    r.style.setProperty("--logo", key[1].logo);
    r.style.setProperty("--numbers", key[1].numbers);
    r.style.setProperty("--navLink", key[1].navLink);
r.style.setProperty("--background", key[1].background);
r.style.setProperty("--mainTheme", key[1].themeMain);
r.style.setProperty("--particle", key[1].particles);
r.style.setProperty("--mainHeading", key[1].mainText);
r.style.setProperty("--paragraphs", key[1].paragraph);
r.style.setProperty("--slideBar", key[1].slidebar);
r.style.setProperty("--cardBorder", key[1].cardsBorder);

break;
case "sourPatch":
r.style.setProperty("--logo", key[2].logo);
r.style.setProperty("--numbers", key[2].numbers);
r.style.setProperty("--background", key[2].background);
r.style.setProperty("--mainTheme", key[2].themeMain);
r.style.setProperty("--particle", key[2].particles);
r.style.setProperty("--mainHeading", key[2].mainText);
r.style.setProperty("--paragraphs", key[2].paragraph);
r.style.setProperty("--slideBar", key[2].slidebar);
r.style.setProperty("--cardBorder", key[2].cardsBorder);
break;

}
}
}


export function pathUrl(){

let hostname = window.location.hostname;

console.log(hostname);


switch(hostname){

case "localhost":
return "/home/";
break;
case "adams66.github.io":
return "/home/"
break
case "dal-10.com":
return "/";
break;
}
}