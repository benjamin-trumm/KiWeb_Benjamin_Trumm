const hoverPalettes = {
    light: {
        base: "rgb(216, 216, 216)",
        hover: "rgb(190, 190, 190)"
    },
    dark: {
        base: "rgb(90, 90, 90)",
        hover: "rgb(120, 120, 120)"
    }
};

const hoverButtons = document.querySelectorAll("[data-hover-tone]");

hoverButtons.forEach((button) => {
    const palette = hoverPalettes[button.dataset.hoverTone];

    if (!palette) {
        return;
    }

    button.style.backgroundColor = palette.base;

    button.addEventListener("mouseenter", () => {
        button.style.backgroundColor = palette.hover;
    });

    button.addEventListener("mouseleave", () => {
        button.style.backgroundColor = palette.base;
    });

    button.addEventListener("focus", () => {
        button.style.backgroundColor = palette.hover;
    });

    button.addEventListener("blur", () => {
        button.style.backgroundColor = palette.base;
    });
});

const btn2 = document.getElementById("btn2");

if (btn2) {
    console.log("btn2 gefunden:", btn2);
}
