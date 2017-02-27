var cssId = 'nobs2134';

if (!document.getElementById(cssId)) {
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://gitcdn.xyz/repo/madfriend/web-sans-bullshit/master/bullshit.css';
    link.media = 'all';
    head.appendChild(link);
}