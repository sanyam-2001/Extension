console.log('Content Script Loaded!');

window.addEventListener('requestCPUInfo', (e) => {
    chrome.runtime.sendMessage({ type: 'CPU' })
})
window.addEventListener('requestStorageInfo', (e) => {
    chrome.runtime.sendMessage({ type: 'Storage' })
})
window.addEventListener('requestMemoryInfo', (e) => {
    chrome.runtime.sendMessage({ type: 'Memory' })
})

chrome.runtime.onMessage.addListener((request, sender) => {
    if (request.type === "CPU") {
        const CPUInfo = new CustomEvent('sendingCPUInfo', { detail: request.data });
        window.dispatchEvent(CPUInfo)
    }
    if (request.type === "Storage") {
        const StorageInfo = new CustomEvent('sendingStorageInfo', { detail: request.data });
        window.dispatchEvent(StorageInfo)
    }
    if (request.type === "Memory") {
        const StorageInfo = new CustomEvent('sendingMemoryInfo', { detail: request.data });
        window.dispatchEvent(StorageInfo)
    }
})
