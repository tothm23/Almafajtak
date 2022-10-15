const express = require("express")
const expressLayouts = require("express-ejs-layouts")

const app = express()
const PORT = 5000

app.use(express.static('public'))
app.use("/css", express.static(__dirname + "public/css"))
app.use("/img", express.static(__dirname + "/img"))

app.use(expressLayouts)
app.set('view engine', 'ejs')
app.set('layout', './index') 

app.get('/*', (req, res) => {
    res.render('index', { layout: './index'})
})

app.listen(PORT, () => console.log(`almafak run on ${PORT}`))