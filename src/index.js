import { headerContent } from "./header-content";
import { footerContent } from "./footer-content";
import { mainContent } from "./main-content";
import { homeContent } from "./home-content";
import { menuContent } from "./menu-content";
import { contactContent } from "./contact-content";
import "../src/style.css";

function pageLoad() {
    const content = document.querySelector("#content");
    
    content.appendChild(headerContent());
    content.appendChild(mainContent(homeContent()));
    content.appendChild(footerContent());

    switchTab();
}

function switchTab() {
    const mainContainer = document.querySelector(".main-container");
    const homeTab = document.querySelector(".header-nav-home");
    const menuTab = document.querySelector(".header-nav-menu");
    const contactTab = document.querySelector(".header-nav-contact");

    homeTab.addEventListener("click", function() {
        mainContainer.replaceChild(homeContent(), mainContainer.lastChild);
    });

    menuTab.addEventListener("click", function() {
        mainContainer.replaceChild(menuContent(), mainContainer.lastChild,);
    });

    contactTab.addEventListener("click", function() {
        mainContainer.replaceChild(contactContent(), mainContainer.lastChild);
    });
}

pageLoad();