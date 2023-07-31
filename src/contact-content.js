export function contactContent() {
    const contactContainer = document.createElement("div");
    const contactTitle = document.createElement("h1");
    const telePhone = document.createElement("p");
    const email = document.createElement("p");
    const address = document.createElement("p");

    contactContainer.classList.add("contact-container");

    contactTitle.textContent = "Contact Us";
    telePhone.textContent = "Phone: +94 (123) 123-1234";
    email.textContent = "Email: fakecupcakes@example.com";
    address.textContent = "Address: 123 Any street, Any town, SL";

    contactContainer.appendChild(contactTitle);
    contactContainer.appendChild(telePhone);
    contactContainer.appendChild(email);
    contactContainer.appendChild(address);

    return contactContainer;
}