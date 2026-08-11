document.addEventListener("DOMContentLoaded", () => {
    let window = new Object();

    window.menu = document.createElement("div");
    window.menu.id = "menu-container";
    window.menu.classList.add("window", "window-fade-in");
    setInterval(() => {
        window.menu.classList.remove("window-fade-in");
    }, 1000);

    window.menu.backgroundTransition = document.createElement("div");
    window.menu.backgroundTransition.classList.add("window-background-transition");
    window.menu.backgroundTransition.appendChild(document.createElement("div"));
    window.menu.appendChild(window.menu.backgroundTransition);

    window.menu.backgroundGradient = document.createElement("div");
    window.menu.backgroundGradient.classList.add("window-background-gradient");
    window.menu.appendChild(window.menu.backgroundGradient);

    window.menu.content = document.createElement("div");
    window.menu.content.classList.add("window-content");
    window.menu.appendChild(window.menu.content);

    window.menu.content.logo = document.createElement("h1");
    window.menu.content.logo.id = "menu-logo";
    window.menu.content.logo.innerHTML = "<div>Simple</div><div>Maths</div>";
    window.menu.content.appendChild(window.menu.content.logo);

    window.menu.content.buttonPlay = document.createElement("button");
    window.menu.content.buttonPlay.id = "menu-button-play";
    window.menu.content.buttonPlay.innerHTML = "<span>Play</span>";
    window.menu.content.buttonPlay.addEventListener("click", () => {
        window.menu.classList.add("window-fade-out");
        setInterval(() => {
            window.remove();
            window.menu.classList.remove("window-fade-out");
        }, 1000);
    });
    window.menu.content.appendChild(window.menu.content.buttonPlay);

    document.body.appendChild(window.menu);
})