const onPoemSubmit = () => {
    console.log("SUBMITTING POEM")
    let poem = document.getElementById("poemTextArea").value;
    if(!poem || poem.length <= 0) {
        alert("Machines cannot think on their own yet (thank God). Help it dream by inputting some poetry!")
        return;
    }
}

const cancelEmptyRequest = (event) => {
    let poem = document.getElementById("poemTextArea").value;
    if(!poem || poem.length <= 0) {
        event.preventDefault()
        return
    }
    
}