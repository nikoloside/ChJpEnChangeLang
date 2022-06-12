// Extension event listeners are a little different from the patterns you may have seen in DOM or
// Node.js APIs. The below event listener registration can be broken in to 4 distinct parts:
//
// * chrome      - the global namespace for Chrome's extension APIs
// * runtime     – the namespace of the specific API we want to use
// * onInstalled - the event we want to subscribe to
// * addListener - what we want to do with this event
//
// See https://developer.chrome.com/docs/extensions/reference/events/ for additional details.

const list = ["en-us", "ja-jp", "zh-cn"]

chrome.browserAction.onClicked.addListener(tab => {
    let url = tab.url;
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        if (url.includes(element))
        {
            target = index + 1;
            if (target > 2) target = 0;
            chrome.browserAction.setIcon({path:"icon-" + list[target] + ".png"});
            url = url.replace(list[index], list[target]);
            break;
        }
    }
    chrome.tabs.update(tab.id, {url: url});
});
