var Casca = require("./casca.js");

function casca( options ){
  return new Casca( options )
}


casca.location = require("./location.js");
casca.util = require("./util.js");
casca.Casca = Casca;

module.exports = casca;