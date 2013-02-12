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
			},
			templates: {
				files: {
					"<%= build.eqdkppath %>/libraries/jquery/core/images/": "src/template/jquery_default/images/*.png",
					"<%= build.eqdkppath %>/templates/eqdkp_default/jquery_tmpl.css": "src/template/eqdkp_default/jquery-ui.min.css",
					"<%= build.eqdkppath %>/templates/eqdkp_default/images/": "src/template/eqdkp_default/images/*.png",
					"<%= build.eqdkppath %>/templates/eqdkp_mop/jquery_tmpl.css": "src/template/eqdkp_mop/jquery-ui.min.css",
					"<%= build.eqdkppath %>/templates/eqdkp_mop/images/": "src/template/eqdkp_mop/images/*.png",
					"<%= build.eqdkppath %>/templates/eqdkp_gw2/jquery_tmpl.css": "src/template/eqdkp_gw2/jquery-ui.min.css",
					"<%= build.eqdkppath %>/templates/eqdkp_gw2/images/": "src/template/eqdkp_gw2/images/*.png",
					"<%= build.eqdkppath %>/templates/eqdkp_swtor/jquery_tmpl.css": "src/template/eqdkp_swtor/jquery-ui.min.css",
					"<%= build.eqdkppath %>/templates/eqdkp_swtor/images/": "src/template/eqdkp_swtor/images/*.png",
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-contrib-copy');

	// build all files
	grunt.registerTask('default', 'concat min cssmin');

	// build all files & copy to eqdkp folder
	grunt.registerTask('build', 'concat min cssmin copy');
};
