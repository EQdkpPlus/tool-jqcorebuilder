/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
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
		uglify: {
			options: {
				banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
						'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
						'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
						'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' + "\n" +
						' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n'
			},
			js: {
				src: ['<%= concat.js.dest %>'],
				dest: 'dist/core.min.js'
			},
			calendar: {
				src: ['src/fullcalendar.js'],
				dest: 'dist/fullcalendar.min.js'
			}
		},
		cssmin: {
			css:{
				src: ['<%= concat.css.dest %>'],
				dest: 'dist/core.min.css'
			}
		},
		copy: {
			dist: {
				files: [
					{expand: true, cwd: 'dist/', src: ['fullcalendar.min.js'], dest: '<%= build.eqdkppath %>/libraries/jquery/js/fullcalendar/'},
					{expand: true, cwd: 'dist/', src: ["core.js", "core.min.js", "core.css", "core.min.css"], dest: "<%= build.eqdkppath %>/libraries/jquery/core/"},
					{expand: true, cwd: 'src/css/', src: ["fullcalendar.print.css"], dest: "<%= build.eqdkppath %>/templates/"}
				]
			},
			templates: {
				files: [
					{expand: true, cwd: 'src/template/jquery_default/images/', src: ["*.png"], dest: "<%= build.eqdkppath %>/libraries/jquery/core/images/"},
					{src: ["src/template/eqdkp_default/jquery-ui.min.css"], dest: "<%= build.eqdkppath %>/templates/eqdkp_default/jquery_tmpl.css"},
					{expand: true, cwd: 'src/template/eqdkp_default/images/', src: ["*.png"], dest: "<%= build.eqdkppath %>/templates/eqdkp_default/images/"},
					{src: "src/template/eqdkp_mop/jquery-ui.min.css", dest: "<%= build.eqdkppath %>/templates/eqdkp_mop/jquery_tmpl.css"},
					{expand: true, cwd: 'src/template/eqdkp_mop/images/', src: ["*.png"], dest: "<%= build.eqdkppath %>/templates/eqdkp_mop/images/"},
					{src: ["src/template/eqdkp_gw2/jquery-ui.min.css"], dest: "<%= build.eqdkppath %>/templates/eqdkp_gw2/jquery_tmpl.css"},
					{expand: true, cwd: 'src/template/eqdkp_gw2/images/', src: ["*.png"], dest: "<%= build.eqdkppath %>/templates/eqdkp_gw2/images/"},
					{src: ["src/template/eqdkp_swtor/jquery-ui.min.css"], dest: "<%= build.eqdkppath %>/templates/eqdkp_swtor/jquery_tmpl.css"},
					{expand: true, cwd: 'src/template/eqdkp_swtor/images/', src: ["*.png"], dest: "<%= build.eqdkppath %>/templates/eqdkp_swtor/images/"}
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-css');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

	// build all files & copy to eqdkp folder
	grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'copy:dist']);

	// build the template files
	grunt.registerTask('template', ['copy:templates']);
};
