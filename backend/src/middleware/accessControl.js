const acl = require('express-acl');

acl.config({
  baseUrl: '/',
  filename: 'acl.json',
  path: 'middleware',
  defaultRole: 'guest',
  roles: ['guest', 'user', 'admin']
});

module.exports = acl;
