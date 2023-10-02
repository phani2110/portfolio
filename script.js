let tabs = document.getElementsByClassName("tabs");
let contents = document.getElementsByClassName("contents");
async function opentab(tabname, event) {
    for (tab of tabs) {
        tab.classList.remove("active-link");
    }
    for (content of contents) {
        content.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}
