console.log("Background Script Loaded!")

chrome.runtime.onMessage.addListener((request, sender) => {
    console.log(sender);
    if (request.type === "CPU") {
        chrome.system.cpu.getInfo(info => {
            chrome.tabs.sendMessage(sender.tab.id, { type: "CPU", data: info })
        })
    }
    if (request.type === "Storage") {
        chrome.system.storage.getInfo(info => {
            chrome.tabs.sendMessage(sender.tab.id, { type: "Storage", data: info })
        })
    }
    if (request.type === "Memory") {
        chrome.system.memory.getInfo(info => {
            chrome.tabs.sendMessage(sender.tab.id, { type: "Memory", data: info })
        })
    }
})