const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const appParam = urlParams.get("app");

async function readAppMap() {
    const fileMap = "./app_map.json";
    try {
        const response = await fetch(fileMap);
        return await response.json();
    } catch (error) {
        throw new Error(`Failed read map file. ${error}`);
    }
}

(async function() {
    if (appParam) {
        try {
            const appMap = await readAppMap();
            if (!appMap[appParam]) return;

            const link = appMap[appParam]["link"];
            if (!link) return;

            setTimeout(() => {
                window.location.href = link;
            }, 1000);
        } catch (error) {
            console.error(error);
        }
    }
})();
