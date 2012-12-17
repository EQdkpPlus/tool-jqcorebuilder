/*global module:false*/
module.exports = function(grunt) {

	"use strict";

	// Project configuration.
	grunt.initConfig({
		pkg: "<json:package.json>",
		meta: {
			banner: '/*! <%= pkg.title %> - v<%= pkg.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
				'* <%= pkg.homepage %> */'
		},
		concat: {
			js: {
				src: 'src/js/*.js',
				dest: 'dist/core.js'
			},
			css: {
				src: 'src/css/*.css',
				dest: 'dist/core.css'
			}
		},
		min: {
			js: {
				src: ["<banner>", '<config:concat.js.dest>'],
				dest: 'dist/core.min.js'
			}
		},
		cssmin: {
			css:{
				src: ['<config:concat.css.dest>'],
				dest: 'dist/core.min.css'
			}
		},
		uglify: {
			codegen: {
				ascii_only: true
			}
		}
	});

	grunt.loadNpmTasks('grunt-css');

	// Default task.
	grunt.registerTask('default', 'concat min cssmin');
};
