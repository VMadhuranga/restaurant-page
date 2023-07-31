export function footerContent() {
    const footerContainer = document.createElement("div");
    const footerText = document.createElement("p");

    footerContainer.classList.add("footer-container");

    footerText.textContent = "\u00A9 2023 VMadhuranga";
    footerContainer.appendChild(footerText);

    return footerContainer;
}