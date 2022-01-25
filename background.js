// inspired from some samples:
// - https://github.com/mdn/webextensions-examples/blob/master/context-menu-copy-link-with-types/background.js
// - https://github.com/mdn/webextensions-examples/blob/master/menu-demo/background.js
browser.contextMenus.create({
    id: "wordreference-it",
    title: "Wordreference it!",
});
browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "wordreference-it") {
        text = info.selectionText
        browser.tabs.create({
         "url": "https://www.wordreference.com/enfr/" + text
       });
    }
});
