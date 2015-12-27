# Introduction 
JSON reporter for mocha, works with mocha-test. Example of report

	{
		"src/test/unit/photo_model_test.js": [
			{
				"title": "should return photos",
				"suite": "getFlickrPhotos(tags, tagmode, callback)",
				"file": "src/test/unit/photo_model_test.js",
				"duration": 1,
				"state": "passed"
			},
			{
			  "title": "should return true for valid single search term",
			  "suite": "isValidCommaDelimitedList(value)",
			  "stack": "TypeError: Cannot read property 'new' of undefined\n    at Context.<anonymous> (/home/user/project/src/test/unit/form_validator_test.js:25:23)\n    at callFn (/home/user/project/node_modules/mocha/lib/runnable.js:251:21)\n    at Test.Runnable.run (/home/user/project/node_modules/mocha/lib/runnable.js:244:7)\n    at Runner.runTest (/home/user/project/node_modules/mocha/lib/runner.js:374:10)\n    at /home/user/project/node_modules/mocha/lib/runner.js:452:12\n    at next (/home/user/project/node_modules/mocha/lib/runner.js:299:14)\n    at /home/user/project/node_modules/mocha/lib/runner.js:309:7\n    at next (/home/user/project/node_modules/mocha/lib/runner.js:248:23)\n    at Immediate._onImmediate (/home/user/project/node_modules/mocha/lib/runner.js:276:5)\n    at processImmediate [as _immediateCallback] (timers.js:367:17)",
			  "message": "Cannot read property 'new' of undefined",
			  "file": "src/test/unit/form_validator_test.js",
			  "duration": 0,
			  "state": "failed"
			},
			{
			  "title": "should return false for search term containing numbers",
			  "suite": "isValidCommaDelimitedList(value)",
			  "file": "src/test/unit/form_validator_test.js",
			  "state": "skipped"
			},
		]
	}

# Instalation

	npm install mocha-json-report --save-dev

mocha-test configuration 

	mochaTest: {
		coverage: {
			options: {
				reporter: 'mocha-json-report',
				quiet: true,
				captureFile: 'unit-tests.json'
			},
			src: [
				'test.js'
			]
		}
	}