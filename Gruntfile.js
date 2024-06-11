module.exports = (grunt) => {
	process.removeAllListeners('warning');
	require('dotenv').config();

	const running = process.env.DEVELOPMENT == "1" ? false : true,
		pkg = grunt.file.readJSON('package.json'),
		path = require('path'),
		uniqid = function () {
			let result = URL.createObjectURL(new Blob([])).slice(-36).replace(/-/g, '');
			return result;
		};;

	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);

	grunt.initConfig({
		globalConfig: {},
		pkg: pkg,
		less: {
			docs: {
				options: {
					compress: false,
					ieCompat: false,
					plugins: [
						
					]
				},
				files: {
					'test/css/page-main.css': [
						'src/less/main.less',
					]
				}
			}
		},
		cssmin: {
			options: {
				mergeIntoShorthands: false,
				roundingPrecision: -1
			},
			docs: {
				files: {
					'docs/css/main.css': [
						//'bower_components/fancybox/dist/jquery.fancybox.css',
						'test/css/page-main.css'
					]
				}
			}
		},
		pug: {
			page: {
				options: {
					pretty: '',// '\t',
					separator: '',// '\n'
					data: function(dest, src) {
						return {
							"hash": uniqid(),
							"repo": "projectsoft-studionions.github.io",
							"userName": "ProjectSoft-STUDIONIONS",
						}
					},
				},
				files: {
					"docs/index.html": ["src/pug/index.pug"]
				},
			},
		},
	});

	grunt.registerTask('default', [
		"less",
		"cssmin",
		"pug"
	]);
}