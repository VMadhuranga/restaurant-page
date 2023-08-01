import vanillaCupcake from "./images/vanilla-cupcake.jpg";
import chocolateCupcake from "./images/chocolate-cupcake.jpg";
import redVelvetCupcake from "./images/red-velvet-cupcake.jpg";
import blueBerryCupcake from "./images/blue-berry-cupcake.jpg";

export function menuContent() {
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");
    
    let menuItemImageArray = [chocolateCupcake, vanillaCupcake, redVelvetCupcake, blueBerryCupcake];
    let menuItemNameArray = ["Chocolate", "Vanilla", "Red velvet", "Blue berry"];
    let menuItemPriceArray = ["$5", "$6", "$10", "$10"];
    
    for (let i = 0; i < menuItemNameArray.length; i++) {
        const menuItemCard = document.createElement("div");
        const menuItemImage = new Image();
        const menuItemName = document.createElement("h3");
        const menuItemPrice = document.createElement("p");
        
        menuItemCard.classList.add("menu-item-card");
        menuItemImage.src = menuItemImageArray[i];
        menuItemImage.alt = menuItemNameArray[i]
        menuItemName.textContent = menuItemNameArray[i];
        menuItemPrice.textContent = menuItemPriceArray[i];

        menuItemCard.appendChild(menuItemImage);
        menuItemCard.appendChild(menuItemName);
        menuItemCard.appendChild(menuItemPrice);

        menuContainer.appendChild(menuItemCard);
    }

    return menuContainer;
}