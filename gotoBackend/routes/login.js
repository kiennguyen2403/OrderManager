const { response } = require('express');
var express = require('express');
var router = express.Router();
const Account = require("../models/account")


/* GET users listing. */
router.post('/', async function (req, res) {
    const { username, passwordHash } = req.body;
    const account = await Account.findOne({ username });
    if (account!= null) {
        if (passwordHash === account.passwordHash) {
            return res.sendStatus(200);
            //.send(token)
        }
        else {
            return res.status(401).json({
                error: 'invalid username or password',
            });
        }
    }
    else {
        return res.status(401).json({
            error: 'no inputs found',
        });
    }
});


router.post("/newaccount", function (req, res) {
    const { username, password } = req.body;
    const account = new Account({ username: username, passwordHash: password });
    account.save();
    res.status(200)
});
module.exports = router;