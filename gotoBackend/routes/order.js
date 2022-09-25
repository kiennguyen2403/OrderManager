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
  const id = mongoose.Types.ObjectId
  if (phone != undefined && order != undefined && address != undefined){
  var newOrder = new Order({id: id, phone: phone, address: address, order:order});
  await newOrder.save()
  res.sendStatus(200)
  }
  else {
    console.log("No data found!")
    res.sendStatus(401)
  }
})


router.delete('/:id', async function(req, res, next) {
  await Order.findOneAndDelete(rep.params.id);
});

router.put('/:id', async function (req, res, next) {
  await Order.findOneAndUpdate(rep.params.id,req.body.json());
})
module.exports = router;