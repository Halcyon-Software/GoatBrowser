const sources = {
    bbc: "https://feeds.bbci.co.uk/news/rss.xml",
    pcgamer: "https://www.pcgamer.com/rss/",
    verge: "https://www.theverge.com/rss/index.xml"
};

function setNewsSource(source) {
    localStorage.setItem("newsSource", source);
}

// work in progress
function loadNews() {
    const source = localStorage.getItem("newsSource") || "bbc";

    document.getElementById("news").innerHTML =
        `News source: ${source} (RSS WIP)`;
}