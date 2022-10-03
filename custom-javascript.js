// its ralated to social iconns

// document.getElementById('width').innerHTML = screen.width + ' , ' + window.innerWidth;
// document.getElementById('height').innerHTML = screen.height + ' , ' + window.innerHeight;

console.log('custom-js is running')

document.addEventListener('scroll', function () {
    // document.getElementById('showHeight').innerHTML = scrollY;
    var socialDivHeight = document.getElementById('social-menu-frame').offsetHeight;
    //console.log('scroll- window.pageYOffset: ' + window.pageYOffset)

    if (scrollY > 340) {
        var distance = ((window.innerHeight - socialDivHeight) / 2) + window.pageYOffset;
        document.getElementById('social-menu-frame').style.top = distance + "px";

        console.log('scroll- social-menu-frame: ' + document.getElementById('social-menu-frame').style.top)

    }

})










// its ralated to navbar

function openPhoneMenu() {
    var x = document.getElementById("myLinks");

    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
document.addEventListener('click', function (e) {
    var x = document.getElementById("myLinks");
    if (!x.contains(e.target) && (!document.getElementById('menu-a').contains(e.target))) {
        if (x.style.display === "block") {
            x.style.display = "none";
            //console.info(e.target)
        }
    }
})