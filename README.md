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
			"title": "should error when api returns 500 http status code",
			"suite": "getFlickrPhotos(tags, tagmode, callback)",
			"file": "src/test/unit/photo_model_test.js",
			"duration": 0,
			"state": "passed"
		},
		{
			"title": "should error with invalid jsonp data",
			"suite": "getFlickrPhotos(tags, tagmode, callback)",
			"file": "src/test/unit/photo_model_test.js",
			"duration": 1,
			"state": "passed"
		}
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