document.addEventListener("DOMContentLoaded", () => {
    let window = new Object();

    function windowInitalize(windowIdentifier, windowContentInitalize) {
        let window = window[windowIdentifier];

        window[windowIdentifier] = document.createElement("div");
        window[windowIdentifier].id = windowIdentifier + "-container";
        window[windowIdentifier].classList.add("window");

        window[windowIdentifier].backgroundTransition = document.createElement("div");
        window[windowIdentifier].backgroundTransition.classList.add("window-background-transition");
        window[windowIdentifier].backgroundTransition.appendChild(document.createElement("div"));
        window[windowIdentifier].appendChild(window[windowIdentifier].backgroundTransition);

        window[windowIdentifier].backgroundGradient = document.createElement("div");
        window[windowIdentifier].backgroundGradient.classList.add("window-background-gradient");
        window[windowIdentifier].appendChild(window[windowIdentifier].backgroundGradient);

        window[windowIdentifier].content = document.createElement("div");
        window[windowIdentifier].content.classList.add("window-content");

        windowContentInitalize(window[windowIdentifier].content);

        window[windowIdentifier].appendChild(window[windowIdentifier].content);

        return undefined;
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
            setInterval(() => {
                window.menu.remove();
                window.menu.classList.remove("window-fade-out");

                window.play.classList.add("window-fade-in");
                document.body.appendChild(window.play);
            }, 1000);

            setInterval(() => {
                window.play.classList.remove("window-fade-in");
            }, 2000);
        });

        window.menu.content.appendChild(window.menu.content.buttonPlay);
    });
    windowInitalize("play");

    document.body.appendChild(window.menu);

    setInterval(() => {
        window.menu.classList.remove("window-fade-in");
    }, 1000);
})