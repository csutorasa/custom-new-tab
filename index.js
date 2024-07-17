// Logic for the new tab page.

getUrl().then(url => {
    window.location.replace(url ?? "options.html");
});
