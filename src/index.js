import { headerContent } from "./header-content";
import { footerContent } from "./footer-content";
import { mainContent } from "./main-content";
import { homeContent } from "./home-content";
import "../src/style.css";

function pageLoad() {
    const content = document.querySelector("#content");

    content.appendChild(headerContent());
    content.appendChild(mainContent(homeContent()));
    content.appendChild(footerContent());
}

pageLoad();