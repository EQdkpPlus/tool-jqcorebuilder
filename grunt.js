/*global module:false*/
module.exports = function(grunt) {

	"use strict";

	// Project configuration.
	grunt.initConfig({
		pkg: "<json:package.json>",
		meta: {
			banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
					'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
					'<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
					'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' + "\n" +
					' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
		},
		build: {
			eqdkppath: '/Users/webmaster/Sites/eqdkp'
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
			},
			calendar: {
				src: ['src/fullcalendar.js'],
				dest: 'dist/fullcalendar.min.js'
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
		},
		copy: {
			dist: {
				files: {
					"<%= build.eqdkppath %>/libraries/jquery/js/fullcalendar/": "dist/fullcalendar.min.js",
					"<%= build.eqdkppath %>/libraries/jquery/core/": ["dist/core.js", "dist/core.min.js", "dist/core.css", "dist/core.min.css"],
					"<%= build.eqdkppath %>/templates/": "src/css/fullcalendar.print.css"
			  }
			}
		},
	});

	grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-contrib-copy');

	// build all files
	grunt.registerTask('default', 'concat min cssmin');

	// build all files & copy to eqdkp folder
	grunt.registerTask('build', 'concat min cssmin copy');
};
