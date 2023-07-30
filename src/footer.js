export function footerContent() {
    const footer = document.createElement("div");
    const footerText = document.createElement("p");

    footer.classList.add("footer");

    footerText.textContent = "\u00A9 2023 VMadhuranga";
    footer.appendChild(footerText);

    return footer;
}