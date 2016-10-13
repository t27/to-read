var scrollPos = localStorage.getItem("scrollPos") || 0;
console.log(scrollPos);
window.scrollTo(0, scrollPos);

var oldScroll = window.onscroll

window.onScroll = function(args) {
    var newScrollPos = window.pageYOffset;
    localStorage.setItem("scrollPos", newScrollPos);
    oldScroll(args);
}