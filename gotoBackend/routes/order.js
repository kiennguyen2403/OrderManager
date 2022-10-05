const { request } = require('express');
var express = require('express');
var router = express.Router();
const Order = require('../models/order')
const mongoose = require('mongoose');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  await Order.find({}, function(err, orders) {
    var result=[];
    orders.forEach((item)=>{
      result.push(item);
    });
    res.json(result);
  }).clone().catch(function(err){ console.log(err)})
});

router.post('/', async function (req, res) {
  const phone = req.body.phone
  const order = req.body.order
  const address = req.body.address
  const time = new Date()
  if (phone != undefined && order != undefined && address != undefined){
  var newOrder = new Order({phone: phone, address: address, order:order,time: time});
  await newOrder.save()
  res.sendStatus(200)
  }
  else {
    console.log("No data found!")
    res.sendStatus(401)
  }
})


router.delete('/:id', async function(req, res, next) {
  await Order.findOneAndDelete(req.params.id);
  res.status(204).end();
});

router.put('/:id', async function (req, res, next) {
  await Order.findOneAndUpdate(req.params.id,req.body.json());
  res.status(204).end();
})
module.exports = router;