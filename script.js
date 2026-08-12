document.addEventListener("DOMContentLoaded", () => {
    const window = new Object();

    function windowInitalize(windowIdentifier, windowContentInitalize) {
        let localWindow = window[windowIdentifier];

        localWindow = document.createElement("div");
        localWindow.id = windowIdentifier + "-container";
        localWindow.classList.add("window");

        localWindow.backgroundTransition = document.createElement("div");
        localWindow.backgroundTransition.classList.add("window-background-transition");
        localWindow.backgroundTransition.appendChild(document.createElement("div"));
        localWindow.appendChild(localWindow.backgroundTransition);

        localWindow.backgroundGradient = document.createElement("div");
        localWindow.backgroundGradient.classList.add("window-background-gradient");
        localWindow.appendChild(localWindow.backgroundGradient);

        localWindow.content = document.createElement("div");
        localWindow.content.classList.add("window-content");
        if (typeof windowContentInitalize === "function") {
            localWindow.content = windowContentInitalize(localWindow.content);
        }
        localWindow.appendChild(localWindow.content);

        window[windowIdentifier] = localWindow;

        return localWindow;
    }

    windowInitalize("menu", (content) => {
        content.logo = document.createElement("h1");
        content.logo.id = "menu-logo";
        content.logo.innerHTML = "<div>Simple</div><div>Maths</div>";
        content.appendChild(content.logo);

        content.buttonPlay = document.createElement("button");
        content.buttonPlay.id = "menu-button-play";
        content.buttonPlay.innerHTML = "<span>Play</span>";
        content.buttonPlay.addEventListener("click", () => {
            window.menu.classList.add("window-fade-out");

            setTimeout(() => {
                window.menu.remove();
                window.menu.classList.remove("window-fade-out");

                window.play.classList.add("window-fade-in");
                document.body.appendChild(window.play);
            }, 1000);

            setTimeout(() => {
                window.play.classList.remove("window-fade-in");
            }, 2000);
        });

        content.appendChild(content.buttonPlay);

        return content;
    });
    windowInitalize("play");

    window.menu.classList.add("window-fade-in");
    document.body.appendChild(window.menu);

    setTimeout(() => {
        window.menu.classList.remove("window-fade-in");
    }, 1000);
})