// its ralated to social iconns

document.getElementById('width').innerHTML = screen.width + ' , ' + window.innerWidth;
document.getElementById('height').innerHTML = screen.height + ' , ' + window.innerHeight;

document.addEventListener('scroll', function () {
    // document.getElementById('showHeight').innerHTML = scrollY;

    if (scrollY > 340 && scrollY < 600) {
        console.log(document.getElementById('social-menu-frame').style.top)

        var dis = 190;
        document.getElementById('social-menu-frame').style.top = dis + "px";
    }

})
