var fs = require('fs'),
  yaml = require('js-yaml'),
  log = require('./log');

module.exports = function(){
	try{
		var config = yaml.safeLoad(fs.readFileSync(process.cwd() + '/config.yml', 'utf8'));
		return config;
	}catch(e){
		log.error(e);
	}
}