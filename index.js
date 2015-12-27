var fs = require('fs'),
		util = require('util');

module.exports = function (runner) {

	var stack = {};
	var title;
	runner.on('test end', function(test){
		var file = test.file.substr(test.file.indexOf(process.cwd()) + process.cwd().length + 1);
		stackF = stack[file];
		if(!stackF){
			stackF = stack[file] = [];
		}
		var mtest = {
			title: test.title,
			suite: title,
			stack: test.stack,
			message: test.message,
			file: file,
			duration: test.duration,
			state: test.state != undefined ? test.state : 'skipped'
		};
		stackF.push(mtest);
	});
	
	runner.on('suite', function(test){
		title = test.title;
	});

	runner.on('fail', function(test, err){
		test.stack = err.stack;
		// test.line = test.stack.substr(test.stack.lastIndexOf('/') +1);
		test.message = err.message;
	});

	runner.on('end', function() {
		// append('test');
		// console.log(process.cwd(),__dirname);
		append(JSON.stringify(stack, null, '  '));
	});
};
function append(str) {
	process.stdout.write(str);
}