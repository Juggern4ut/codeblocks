const path = require('path');
const express = require('express');

const {mongoose} = require('./db/mongoose');
const {Pages} = require('./models/navigation');

const publicPath = path.join(__dirname, '../public');

var app = express();

app.use(express.static(publicPath));
app.set('view engine', 'hbs');

app.get("/pages", async (req, res)=>{
	const pages = await Pages.find();
	console.log(pages);
	res.status(200).send(pages);
});

app.listen(3000, ()=>{
	console.log("Up on port 3000");
});