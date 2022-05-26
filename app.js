const express = require("express")
const bodyParser = require("body-parser");
var port = 3030
var app = express()
const path = require("path");
const router = express.Router();
const spawn = require('child_process').spawn; 

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

router.post("/tech", (req, res) => {
    //const py = spawn('/opt/anaconda3/bin/python', [__dirname + '/python/animateText.py', req.body.value]);
    
    py.stdout.on("data", (data) => {
          console.log(`animateText.py: ${data}`)
    });

    py.stderr.on('data', data => {
        console.error(`stderr: ${data}`);
    });

    py.on('error', (error) => {
        console.error(`error: ${error.message}`);
    });
      
    py.on("close", () => {   
        res.send("Thanks for submitting your poem!:\n\n" + req.body.value)
    });
})

app.use("/", router);
app.listen(port, () => {
    console.log("app running on port: " + port)
})

