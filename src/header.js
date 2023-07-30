export function headerContent() {
    const header = document.createElement("div");
    const headerTitle = document.createElement("h1");
    const headerNav = document.createElement("ul");
    const headerNavHome = document.createElement("li");
    const headerNavMenu = document.createElement("li");
    const headerNavContact = document.createElement("li");

    headerTitle.textContent = "Cup Cakes";
    headerNavHome.textContent = "Home";
    headerNavMenu.textContent = "Menu"
    headerNavContact.textContent = "Contact";

    headerNav.appendChild(headerNavHome);
    headerNav.appendChild(headerNavMenu);
    headerNav.appendChild(headerNavContact);

    header.appendChild(headerTitle);
    header.appendChild(headerNav);

    return header;
}