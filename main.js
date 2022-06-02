// imports

window.onload = () => {
    var myName = "ryan"
    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop
    console.log("hello " + myName)

    var btns = document.getElementsByClassName("divBtn");
    for(var i=0; i < btns.length; i++) {
        var modal = document.getElementById("myModal" + i);
        var btn = btns[i];
        btn.onclick = function() {
            modal.style.display = "block";
        }
            // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
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


window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}
