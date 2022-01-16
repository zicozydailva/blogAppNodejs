const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const bodyparser = require("body-parser")

const app = express()

app.use(express.json())
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())
app.use(cors())
app.use(express.static("public"))
app.set("view engine", "ejs")

// VARIABLES
const posts = []

app.get("/", (req, res) => {
    res.render("products",  {posts: posts})
})

app.get("/message", (req, res) => {
    res.render("message")
})

app.post("/message", (req, res) => {
    const newPost = {
        title: req.body.title,
        message: req.body.message,
        image: req.body.image,
        price: req.body.price
    }
    posts.push(newPost)
    res.redirect("/")
})

app.get("/about", (req, res) => {
    res.render("about")
})

app.get("/services", (req, res) => {
    res.render("services")
})

app.listen(8800, () => console.log("Server is running on port 8800"))