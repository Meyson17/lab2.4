const express = require('express');
const res = express();

res.sendFile(path.join(__dirname, '../lab4', 'index1.html')); 
res.sendFile('index1.html', { root: path.join(__dirname, '../lab4') });
;

app.listen(3000, ()=>{

    console.log('Server online');
});
