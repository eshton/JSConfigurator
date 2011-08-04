var config = new JSConfigurator('default', {
    loaderImageUrl:  '/images/loader.gif',
    ajaxRefreshTime: 1000
});

console.debug(config);
console.debug(config.get('loaderImageUrl') == '/images/loader.gif');

config.putMore({
    loaderImageUrl:  '/images/loader2.gif',
    ajaxRefreshTime: 2000
}, 'something');

console.debug(config.get('ajaxRefreshTime') == 1000);
console.debug(config.get('ajaxRefreshTime','something') == 2000);