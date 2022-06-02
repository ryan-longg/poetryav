const express = require("express")
const bodyParser = require("body-parser");
var app = express()
const path = require("path");
const router = express.Router();
const spawn = require('child_process').spawn; 
const axios = require('axios');
const { stderr } = require("process");

// serve static files, including the css styling
app.use(express.static(__dirname));
// get our app to use body parser 
app.use(bodyParser.urlencoded({ extended: true }))

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
})
router.get("/literature", (req, res) => {
    console.log("")
    res.sendFile(path.join(__dirname + "/public/literature.html"));
})
router.get("/photography", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/photography.html"));
})
router.get("/tech", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/tech.html"));
})

router.post("/", (req, res) => {
    var subName = req.body.yourname
    var subEmail = req.body.youremail;
   res.send("Hello " + subName + ", Thank you for subcribing. You email is " + subEmail);
})


/*
figure out how to do this process outside of a request!! 
const animateProcess = spawn('/opt/anaconda3/bin/python', [__dirname + '/python/animateText.py', descriptiveText]);
pyp.stdout.on("data", (data) => {
    console.log("animated std out")
    console.log(data)
});
*/

router.post("/public/tech", (req, res) => {
    let local = "http://localhost:8080/animate"
    let vmInstance = 'http://35.188.47.235:8080/animate'
    //const py = spawn('/opt/anaconda3/bin/python', [__dirname + '/python/animateText.py', req.body.value]);
    console.log(req.body)
    axios.post(vmInstance, {
        input: JSON.stringify(req.body),
    }).catch(err => {
        console.log(err)
    })
    res.send("Thanks for submitting your poem!: We'll email you at " + req.body.email + " when your audiovisual experience is ready.")
})

app.use("/", router);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("app running on port: " + PORT)
})

