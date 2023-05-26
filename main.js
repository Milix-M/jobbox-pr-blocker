window.addEventListener("load", deletePR, false);

function deletePR() {
    var elements = document.querySelectorAll('.p-result');
    for (var i = 0; i < elements.length; i++) {
        var className = elements[i].className;
        var matches = className.match(/p-ad-item\d{1,3}/);
        if (matches) {
            elements[i].remove(matches[0]);
        }
    }
}