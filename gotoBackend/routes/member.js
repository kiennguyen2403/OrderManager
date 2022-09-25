var express = require('express');
var router = express.Router();
var logger = require('../utils/logger');
const Member = require('../models/member');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  await Member.find({}, function(err, members) {
    if (members)
    {
    var result=[];
    members.forEach((item)=>{
      result.push(item);
    });
    res.json(result);
  }
  else {
    logger.errorInfo(err)
  }
  }).clone().catch(function(err){ console.log(err)})
});

router.post('/', async function (req, res, next) {
  const {firstname, lastname, phone, address} =req.body
  var newMember = new Member({firstname:firstname, lastname:lastname,phone:phone, address:address});
  await newMember.save()
  res.sendStatus(200)

  
})
router.delete('/:id', async function(req, res, next) {
  await  Member.findOneAndDelete(req.params.id)
  res.status(204).end();
  
});
router.put('/:id',async function (req, res, next) {
  const filter = {phone : req.params.id}
  const data = req.body
  try{
  const result = await Member.findOneAndUpdate(filter,data);
  res.sendStatus(200)
  }
  catch(err){
    res.sendStatus(401)
  }
});
module.exports = router;
