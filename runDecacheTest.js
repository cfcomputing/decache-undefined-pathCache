const path = require("path");
const decache = require("decache");

module.exports = () => {
	console.log("trying to run decache");
	decache("./foo.js");
	console.log("decache complete");
};
