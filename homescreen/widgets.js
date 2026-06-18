const defaultWidgets = [
    { name: "Google", url: "https://google.com" },
    { name: "Wiki", url: "https://wikipedia.org" },
    { name: "X", url: "https://x.com" },
    { name: "Reddit", url: "https://reddit.com" },
    { name: "ChatGPT", url: "https://chat.openai.com" },
    { name: "GitHub", url: "https://github.com" }
];

function favicon(url) {
    const domain = new URL(url).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
}

function loadWidgets() {
    const el = document.getElementById("widgets");

    let widgets = get("widgets", defaultWidgets);

    el.innerHTML = "";

    widgets.forEach(w => {
        const div = document.createElement("div");
        div.className = "widget";

        div.innerHTML = `<img src="${favicon(w.url)}">`;

        div.onclick = () => window.location.href = w.url;

        el.appendChild(div);
    });
}