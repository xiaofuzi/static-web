var clc = require('cli-color'),
  util = require('util');

var printLog = function(args, clc){
  console.log('%s - %s', clc(new Date().toISOString()), util.format.apply(null, args));
};

var error = clc.red.bold,
	warn = clc.yellow,
	notice = clc.blue,
	info = clc.greenBright;

exports.warn = function(){
	printLog(arguments, warn);
}

exports.notice = function(){
	printLog(arguments, notice);
}

exports.info = function(){
	printLog(arguments, info);
}

exports.error = function(){
	printLog(arguments, error);
}