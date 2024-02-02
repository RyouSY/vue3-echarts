const fs = require('fs');
const express = require('express')
const app = express()

app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "content-type");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	next();
});

app.get('/api/json', (req, res) => {
	
	fs.readFile('./data.json', 'utf8', (err, data) => {
		res.send(data)
	})
	
})

app.listen(8999, () => {
	console.log('服务已启动...')
})