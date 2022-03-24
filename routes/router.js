const express = require('express');
const router = express.Router();
const Model = require('../models/MODEL')


router.get('/', (req, res) => {
      Model.Product.find().exec((err,products)=>{
            res.render('index.ejs',{product:products})
            console.log(products)
      })
 })

router.get('/manage-order',(req,res)=>{
      res.render('manage.ejs')
})

router.get('/report',(req,res)=>{
      res.render('report.ejs')
})

module.exports = router;