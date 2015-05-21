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
		db: 'mongolab:connection:string',
		port: process.env.PORT || 80
	}
}
