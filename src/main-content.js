export function mainContent(content) {
    const mainContainer = document.createElement("div");

    mainContainer.classList.add("main-container");
    mainContainer.appendChild(content);

    return mainContainer;
}