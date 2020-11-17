const express = require("express");
const worker = require("./helper")
const app = express();

app.get('/', async(req, res) => {
    var url = req.query.url
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
    if (url == undefined) {
        res.json({ status: false, msg: "Hoichoi Link is Required" })
    } else {
        var data = await worker.data(url.replace("https://www.hoichoi.tv", ""))
        if (data == "not_found") {
            res.json({ status: false, msg: "You are sending an Invalid Link" })
        } else if (data == "token_err") {
            res.json({ status: false, msg: "Your username or password seems to incorrect. Kindly recheck Environment variables or rebuild the app" })
        } else if (data == "exce") {
            res.json({ status: false, msg: "Exceeded the maximum number of devices allowed for your subscription. Please log out of one or more devices" })
        } else if (data == "drm") {
            res.json({ status: false, msg: "Sorry this content is DRM protected try with another video" })
        } else if (data == "max") {
            res.json({ status: false, msg: "Sorry maximum streaming limit exceeded, Pls don't use same account for stream on Hoichoi's official site or App" })
        } else if (data == "serious") {
            res.json({ status: false, msg: "Sorry something serious happened. Please Check Logs" })
        } else if (data == "other") {
            res.json({ status: false, msg: "Failed to recognize error. Please Check Logs" })
        } else {
            res.json(data)
        }
    }
})

app.listen(process.env.PORT || 8080, () => {
    console.log('Application Started')
})