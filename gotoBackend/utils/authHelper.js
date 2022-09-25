const jwt = require('jsonwebtoken');
const _ = require('lodash');
const Account = require('../models/account');

const getTokenFrom = (request) => {
  const authorization = request.get('authorization');
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7);
  }
  return null;
};

const getLoggedInUser = async (request, response) => {
  const decodedToken = jwt.verify(getTokenFrom(request), process.env.SECRET);
  const account = await Account.findById(decodedToken.id);
  if (!user) {
    response.status(401).send({ error: 'user not found' });
  }
  return user;
};

module.exports = {
  getTokenFrom, getLoggedInUser,
};
