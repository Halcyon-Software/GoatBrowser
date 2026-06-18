function renderSearch() {
    const el = document.getElementById("search");

    el.innerHTML = `
        <div class="searchBox">
            <select id="engine">
                <option value="google">Google</option>
                <option value="duck">DuckDuckGo</option>
                <option value="bing">Bing</option>
            </select>

            <input id="q" placeholder="Search...">

            <button onclick="doSearch()">Search</button>
        </div>
    `;

    document.getElementById("engine").value = getSearchEngine();

    document.getElementById("engine").onchange = (e) => {
        setSearchEngine(e.target.value);
    };
}
function doSearch() {
    const q = document.getElementById("q").value;
    const engine = document.getElementById("engine").value;

    if (!q) return;

    let url = "";

    if (engine === "google") {
        url = "https://google.com/search?q=" + encodeURIComponent(q);
    }

    if (engine === "duck") {
        url = "https://duckduckgo.com/?q=" + encodeURIComponent(q);
    }

    if (engine === "bing") {
        url = "https://bing.com/search?q=" + encodeURIComponent(q);
    }

    location.href = url;
}