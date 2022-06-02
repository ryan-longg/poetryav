particlesJS.load('particles-js', '../particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

const onPoemSubmit = () => {
    let poem = document.getElementById("poemTextArea").value;
    let email = document.getElementById("emailInputArea").value;
    if(!poem || poem.length <= 0) {
        alert("Machines cannot think on their own yet (thank God). Help it dream by inputting some poetry!")
        return;
    } else if (!email || email.length <=0) {
        alert("Please include your email so that we can send you the audiovisual experience once it has been completed.")
        return;
    }
}

const cancelEmptyRequest = (event) => {
    let poem = document.getElementById("poemTextArea").value;
    let email = document.getElementById("emailInputArea").value;
    if(!poem || poem.length <= 0 || !email || email.length <=0) {
        event.preventDefault()
        return
    } 
}

