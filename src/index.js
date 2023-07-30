import { headerContent } from "./header";

function pageLoad() {
    const content = document.querySelector("#content");

    content.appendChild(headerContent());
}

pageLoad();