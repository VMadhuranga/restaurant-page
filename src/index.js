import { headerContent } from "./header";
import "../src/style.css";

function pageLoad() {
    const content = document.querySelector("#content");

    content.appendChild(headerContent());
}

pageLoad();