const express = require("express")
let app = express();

app.get('/', (req, res) => {
    console.log("hello world")
    res.send('Hello World!')
})

app.listen(3000, () => {
    console.log("listinig at port 3000")
})
