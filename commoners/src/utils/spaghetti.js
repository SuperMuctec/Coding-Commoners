function popsicle(ar) {
    return ar[ar.length - 1];
}

export function darkmode() {
    const html = document.getElementById("Html");

    if (html.className === "dark") {
        html.className = "light";
    } else {
        html.className = "dark";
    }

    const button = document.getElementById("darkmode-btn");
    const icon = button.querySelector('img');
    const current = popsicle(icon.src.split('/'));
    icon.src = (current === "dark.svg") ? "light.svg" : "dark.svg";
}
