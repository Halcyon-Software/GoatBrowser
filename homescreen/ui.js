function toggleSettings() {
    const panel = document.getElementById("settingsPanel");

    if (panel.style.display === "block") {
        panel.style.display = "none";
        return;
    }

    panel.style.display = "block";
    renderSettings();
}
function renderSettings() {
    const panel = document.getElementById("settingsPanel");

    panel.innerHTML = `
        <div class="settingsTitle">Settings</div>

        <div class="settingsBlock">
            <label>Search engine</label>
            <select id="searchEngineSelect">
                <option value="google">Google</option>
                <option value="duck">DuckDuckGo</option>
                <option value="bing">Bing</option>
            </select>
        </div>

        <div class="settingsBlock">
            <label>Background</label>
            <input type="file" id="bgInput">
        </div>

        <div class="settingsBlock">
            <label>
                <input type="checkbox" id="motdToggle">
                Show MOTD
            </label>
        </div>
    `;

    initSettingsControls();
}
function initSettingsControls() {
    const engine = document.getElementById("searchEngineSelect");
    const bg = document.getElementById("bgInput");
    const motd = document.getElementById("motdToggle");

    if (engine) {
        engine.value = getSearchEngine();

        engine.onchange = () => {
            setSearchEngine(engine.value);
        };
    }

    if (motd) {
        motd.checked = get("motd", true);

        motd.onchange = () => {
            set("motd", motd.checked);

            if (!motd.checked) {
                document.getElementById("motd").style.display = "none";
            }
        };
    }

    if (bg) {
        bg.onchange = (e) => {
            const file = e.target.files[0];
            const reader = new FileReader();

            reader.onload = () => {
                setBackground(reader.result);
            };

            if (file) {
                reader.readAsDataURL(file);
            }
        };
    }
}