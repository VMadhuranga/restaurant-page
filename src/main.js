export function mainContent(content) {
    const main = document.createElement("div");

    main.classList.add("main");
    main.appendChild(content);

    return main;
}