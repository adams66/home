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
    r.style.setProperty("--particle", key[0].particle);
    r.style.setProperty("--introText", key[0].introText);
    r.style.setProperty("--name", key[0].name);
    r.style.setProperty("--statement", key[0].statement);
    r.style.setProperty("--buttonText", key[0].buttonText);
    r.style.setProperty("--buttonBorder", key[0].buttonBorder);
    r.style.setProperty("--paragraph", key[0].paragraph);
    r.style.setProperty("--sectionHeading", key[0].sectionHeading);
    r.style.setProperty("--headingLine", key[0].headingLine);
    r.style.setProperty("--cardBorder", key[0].cardBorder);
    r.style.setProperty("--cardFolder", key[0].cardFolder);
    r.style.setProperty("--cardheading", key[0].cardheading);
    r.style.setProperty("--cardTech", key[0].cardTech);
    r.style.setProperty("--cardLinkIcon", key[0].cardLinkIcon);
    r.style.setProperty("--footerIcons", key[0].footerIcons);
    r.style.setProperty("--footerLine", key[0].footerLine);
    r.style.setProperty("--footerEmail", key[0].footerEmail);
    r.style.setProperty("--copyRight", key[0].copyRight);
    r.style.setProperty("--slidebar", key[0].slidebar);
break;
case "oreo":
    r.style.setProperty("--logo", key[1].logo);
    r.style.setProperty("--numbers", key[1].numbers);
    r.style.setProperty("--navLink", key[1].navLink);
    r.style.setProperty("--background", key[1].background);
    r.style.setProperty("--particle", key[1].particle);
    r.style.setProperty("--introText", key[1].introText);
    r.style.setProperty("--name", key[1].name);
    r.style.setProperty("--statement", key[1].statement);
    r.style.setProperty("--buttonText", key[1].buttonText);
    r.style.setProperty("--buttonBorder", key[1].buttonBorder);
    r.style.setProperty("--paragraph", key[1].paragraph);
    r.style.setProperty("--sectionHeading", key[1].sectionHeading);
    r.style.setProperty("--headingLine", key[1].headingLine);
    r.style.setProperty("--cardBorder", key[1].cardBorder);
    r.style.setProperty("--cardFolder", key[1].cardFolder);
    r.style.setProperty("--cardTech", key[1].cardTech);
    r.style.setProperty("--cardLinkIcon", key[1].cardLinkIcon);
    r.style.setProperty("--footerIcons", key[1].footerIcons);
    r.style.setProperty("--footerLine", key[1].footerLine);
    r.style.setProperty("--footerEmail", key[1].footerEmail);
    r.style.setProperty("--copyRight", key[1].copyRight);
    r.style.setProperty("--slidebar", key[1].slidebar);



break;
case "sourPatch":
    r.style.setProperty("--logo", key[2].logo);
    r.style.setProperty("--numbers", key[2].numbers);
    r.style.setProperty("--navLink", key[2].numbers);
    r.style.setProperty("--background", key[2].background);
    r.style.setProperty("--particle", key[2].particle);
    r.style.setProperty("--introText", key[2].introText);
    r.style.setProperty("--name", key[2].name);
    r.style.setProperty("--statement", key[2].statement);
    r.style.setProperty("--buttonText", key[2].buttonText);
    r.style.setProperty("--buttonBorder", key[2].buttonBorder);
    r.style.setProperty("--paragraph", key[2].paragraph);
    r.style.setProperty("--sectionHeading", key[2].sectionHeading);
    r.style.setProperty("--headingLine", key[2].headingLine);
    r.style.setProperty("--cardBorder", key[2].cardBorder);
    r.style.setProperty("--cardFolder", key[2].cardFolder);
    r.style.setProperty("--cardTech", key[2].cardTech);
    r.style.setProperty("--cardLinkIcon", key[2].cardLinkIcon);
    r.style.setProperty("--footerIcons", key[2].footerIcons);
    r.style.setProperty("--footerLine", key[2].footerLine);
    r.style.setProperty("--footerEmail", key[2].footerEmail);
    r.style.setProperty("--copyRight", key[2].copyRight);
    r.style.setProperty("--slidebar", key[2].slidebar);
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