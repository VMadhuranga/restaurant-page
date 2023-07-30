import { headerContent } from "./header";
import { footerContent } from "./footer";
import "../src/style.css";

function pageLoad() {
    const content = document.querySelector("#content");

    content.appendChild(headerContent());
    content.appendChild(footerContent());
}

pageLoad();