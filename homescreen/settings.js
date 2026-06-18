function set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function get(key, fallback = null) {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
}

function setBackground(image) {
    document.body.style.backgroundImage = `url(${image})`;
    set("bg", image);
}

function loadBackground() {
    const bg = get("bg", null);
    if (bg) {
        document.body.style.backgroundImage = `url(${bg})`;
    }
}
function setSearchEngine(engine) {
    localStorage.setItem("engine", engine);
}

function getSearchEngine() {
    return localStorage.getItem("engine") || "google";
}