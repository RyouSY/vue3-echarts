const fs = require('fs');
const express = require('express')
const app = express()
const bodyParser = require('body-parser');

// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// 解析 application/json
app.use(bodyParser.json());

app.all('*', function(req, res, next) {
	res.setHeader("Access-Control-Allow-Origin","http://localhost:5173");
	res.setHeader('Access-Control-Allow-Credentials', 'true');
	res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Content-Length, Referer");
	res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	next();
});

app.get('/api/json', (req, res) => {
	const result = req.query
	res.send({data: result})
})

app.listen(8999, () => {
	console.log('服务已启动...')
})