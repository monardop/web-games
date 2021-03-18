let toggleNavStatus = false;

let toggleNav = function() {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUL = document.querySelector(".nav-sidebar ul"); 
    let getSidebarTitle = document.querySelector(".nav-sidebar span"); 
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a"); 

    if (toggleNavStatus === false) {
        getSidebarUL.style.visibility = "visible";
        getSidebar.style.width = "272px";
        // getSidebarTitle.style.opacity = "0.5";

        let arrayLenght = getSidebarLinks.length;
        // for (var i = 0; i < arrayLenght.length; i++){
        //     getSidebarLinks[i].style.opacity = "0";
        // }

        toggleNavStatus = true;
    } 
    
    else if (toggleNavStatus === true) {
        getSidebar.style.width = "50px";
        // getSidebarTitle.style.opacity = "0";

        let arrayLenght = getSidebarLinks.length;
        // for (var i = 0; i < arrayLenght.length; i++){
        //     getSidebarLinks[i].style.opacity = "0";
        // }
        
        getSidebarUL.style.visibility = "hidden";

        toggleNavStatus = false;
    }
}