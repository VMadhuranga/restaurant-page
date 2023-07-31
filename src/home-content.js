export function homeContent() {
    const homeContainer = document.createElement("div");
    const homeTitle = document.createElement("h1");
    const homeDescription = document.createElement("p");
    const timeTable = document.createElement("div");
    const timeTableTitle = document.createElement("h3");
    const weekDays = document.createElement("p");
    const weekEnd = document.createElement("p");

    homeContainer.classList.add("home-container");
    timeTable.classList.add("time-table");

    homeTitle.textContent = "Welcome to The Cup Cakes";
    homeDescription.textContent = "Our shop is the perfect place to \
                                    for you to grab delicious Cup Cakes.\
                                    Come visit us or order online";
    timeTableTitle.textContent = "Opening hours";
    weekDays.textContent = "Week-days: 8am - 8pm";
    weekEnd.textContent = "Weekend: 8am - 6pm";

    timeTable.appendChild(timeTableTitle, weekDays, weekEnd);
    timeTable.appendChild(weekDays);
    timeTable.appendChild(weekEnd);
    homeContainer.appendChild(homeTitle);
    homeContainer.appendChild(homeDescription);
    homeContainer.appendChild(timeTable);

    return homeContainer;
}