let express = require('express');
let app = express();
app.get('/',async(req,res)=>{
    res.send('Good to Go');
})
app.listen(3000);