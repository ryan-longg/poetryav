// imports

window.onload = () => {
    var myName = "ryan"
    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop
    console.log("hello " + myName)


    var modal0 = document.getElementById("myModal0");
    var btn0 = document.getElementById("btn0");
    btn0.onclick = function() {
        modal0.style.display = "block";
    }

    var modal1 = document.getElementById("myModal1");
    var btn1 = document.getElementById("btn1");
    btn1.onclick = function() {
        modal1.style.display = "block";
    }

    var modal2 = document.getElementById("myModal2");
    var btn2 = document.getElementById("btn2");
    btn2.onclick = function() {
        modal2.style.display = "block";
    }
    
    var modal3 = document.getElementById("myModal3");
    var btn3 = document.getElementById("btn3");
    btn3.onclick = function() {
        modal3.style.display = "block";
    }

    var modal4 = document.getElementById("myModal4");
    var btn4 = document.getElementById("btn4");
    btn4.onclick = function() {
        modal4.style.display = "block";
    }
    
    var modal5 = document.getElementById("myModal5");
    var btn5 = document.getElementById("btn5");
    btn5.onclick = function() {
        modal5.style.display = "block";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal0 || event.target == modal1 || event.target == modal2 || event.target == modal3
            || event.target == modal4 || event.target == modal5) {
            modal0.style.display = "none";
            modal1.style.display = "none";
            modal2.style.display = "none";
            modal3.style.display = "none";
            modal4.style.display = "none";
            modal5.style.display = "none";
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

