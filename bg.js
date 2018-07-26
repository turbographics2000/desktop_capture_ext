chrome.runtime.onMessageExternal.addListener((msg, sender, res) => {
    chrome.desktopCapture.chooseDesktopMedia(['screen', 'window', 'tab', 'audio'], sender.tab, streamId => {
        res(streamId);
    });
    return true;
});
