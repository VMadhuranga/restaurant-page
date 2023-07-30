export function footerContent() {
    const footer = document.createElement("div");
    const footerText = document.createElement("p");

    footerText.textContent = `2023 VMadhuranga`;
    footer.appendChild(footerText);

    return footer;
}