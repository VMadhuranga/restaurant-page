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
    content.appendChild(mainContent(contactContent()));
    content.appendChild(footerContent());
}

pageLoad();