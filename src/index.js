import { headerContent } from "./header";
import { footerContent } from "./footer";
import { mainContent } from "./main";
import { homeContent } from "./home";
import "../src/style.css";

function pageLoad() {
    const content = document.querySelector("#content");

    content.appendChild(headerContent());
    content.appendChild(mainContent(homeContent()));
    content.appendChild(footerContent());
}

pageLoad();