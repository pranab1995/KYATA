const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', (req,res,next) => { 
                res.sendFile(path.join(__dirname, 'index.html'));
});




app.listen(port);
console.log('listening to port 2000');