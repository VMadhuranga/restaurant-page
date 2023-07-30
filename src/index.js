import { headerContent } from "./header";
import { footerContent } from "./footer";
import { mainContent } from "./main";
import "../src/style.css";

function pageLoad() {
    const content = document.querySelector("#content");

    content.appendChild(headerContent());
    content.appendChild(mainContent());
    content.appendChild(footerContent());
}

pageLoad();