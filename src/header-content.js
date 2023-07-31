export function headerContent() {
    const headerContainer = document.createElement("div");
    const headerTitle = document.createElement("h1");
    const headerNav = document.createElement("ul");
    const headerNavHome = document.createElement("li");
    const headerNavMenu = document.createElement("li");
    const headerNavContact = document.createElement("li");

    headerContainer.classList.add("header-container");

    headerTitle.textContent = "Cup Cakes";
    headerNavHome.textContent = "Home";
    headerNavMenu.textContent = "Menu"
    headerNavContact.textContent = "Contact";

    headerNavHome.classList.add("header-nav-home");
    headerNavMenu.classList.add("header-nav-menu");
    headerNavContact.classList.add("header-nav-contact");

    headerNav.appendChild(headerNavHome);
    headerNav.appendChild(headerNavMenu);
    headerNav.appendChild(headerNavContact);

    headerContainer.appendChild(headerTitle);
    headerContainer.appendChild(headerNav);

    return headerContainer;
}