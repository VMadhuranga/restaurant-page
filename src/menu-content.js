import vanillaCupcake from "./menu-item-images/vanilla-cupcake.jpg";
import chocolateCupcake from "./menu-item-images/chocolate-cupcake.jpg";
import redVelvetCupcake from "./menu-item-images/red-velvet-cupcake.jpg";

export function menuContent() {
    const menuContainer = document.createElement("div");
    const menuItemCard = document.createElement("div");
    
    let menuItemImageArray = [chocolateCupcake, vanillaCupcake, redVelvetCupcake];
    let menuItemNameArray = ["Chocolate", "Vanilla", "Red velvet"];
    let menuItemPriceArray = ["$5", "$6", "$10"];
    
    for (let i = 0; i < menuItemNameArray.length; i++) {
        const menuItemImage = new Image(100, 100);
        const menuItemName = document.createElement("h3");
        const menuItemPrice = document.createElement("p");

        menuItemImage.src = menuItemImageArray[i];
        menuItemName.textContent = menuItemNameArray[i];
        menuItemPrice.textContent = menuItemPriceArray[i];

        menuItemCard.appendChild(menuItemImage);
        menuItemCard.appendChild(menuItemName);
        menuItemCard.appendChild(menuItemPrice);

        menuContainer.appendChild(menuItemCard);
    }

    return menuContainer;
}