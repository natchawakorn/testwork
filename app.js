const express = require('express')
const path = require('path')
const router = require('./routes/router')

const app = express();


app.set('views',path.join(__dirname,'views'))
app.set('view egine','ejs')

app.use(express.urlencoded({extended:false}))
app.use(router)

app.use(express.static(path.join(__dirname,'public')));

const port = 2000 ;


app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})