// imports

window.onload = () => {
    var myName = "ryan"
    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop
    console.log("hello " + myName)
}
window.onscroll = () => {
    scroll()
}

var scroll = () => {
    if(window.pageYOffset > sticky) {
        header.classList.add("sticky")
    } else {
        header.classList.remove("sticky")
    }
}