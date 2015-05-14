var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');
console.log(rootPath);


module.exports = {
	development: {
		rootPath: rootPath,
		db: 'mongodb://localhost/multivision',
		port: process.env.PORT || 3030
	},
	production: {
		rootPath: rootPath,
		db: 'mongodb://abakde:multivision@ds049641.mongolab.com:49641/multivision',
		port: process.env.PORT || 80
	}
}