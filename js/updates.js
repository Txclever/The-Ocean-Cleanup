window.onscroll = function () {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let Header = document.getElementById("header");
    let ina = document.getElementById("inside-animation");

    if (scrollTop > 0) {
        Header.style.display = "block";
        Header.style.top = -75 + 'px';
        ina.style.top = -75 + 'px';
    } else {
        Header.style.top = 0;
        Header.style.display = "block";
        ina.style.top = 0;
        ina.style.display = "block";
    };
}

let remove_banner = document.getElementById("banner");
let X = document.getElementById("X");

X.onclick = function () {
    remove_banner.style.display = "none";
}