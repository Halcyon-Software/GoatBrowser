function saveSetting(key, value) {
    localStorage.setItem(key, value);
}

function getSetting(key, fallback) {
    return localStorage.getItem(key) || fallback;
}

function setUsername(name) {
    saveSetting("username", name);
}

function setSearchEngine(engine) {
    saveSetting("searchEngine", engine);
}

function getSearchEngine() {
    return getSetting("searchEngine", "google");
}

function setBackground(bg) {
    saveSetting("background", bg);
    document.body.style.backgroundImage =
        `url('backgrounds/${bg}')`;
}

function getBackground() {
    return getSetting("background", "startBackground.png");
}