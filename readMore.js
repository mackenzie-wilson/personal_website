function readMore(num) {
    var textName = "more" + num
    var dotsName = "dots" + num
    var buttonName = "button" + num
    var dots = document.getElementById(dotsName);
    var moreText = document.getElementById(textName);
    var btnText = document.getElementById(buttonName);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }

}