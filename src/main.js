const express = require("express")
const api = require("./routes/api")
const path = require("path")
const app = express()
const port = 3000

app.listen(port)

app.set("port", "3000")
app.set("name", "binary-decimal-binary API")
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "/partials"));
app.use(express.static(path.join(__dirname, "public")));


app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,POST');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next()
})

app.use(api)

app.get("/", (req, res) => {
    res.redirect("https://ivansanmartin.github.io/")
})

console.log(`Server on port ${app.get("port")} - ${app.get("name")}`)