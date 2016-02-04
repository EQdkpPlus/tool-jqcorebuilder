/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		build: {
			eqdkppath: '/Users/swallmann/Sites/eqdkp'
		},
		curl: {
			'src/plugins/circles/circles.min.js': 'https://github.com/lugolabs/circles/raw/master/circles.min.js',
			'src/plugins/gmaps/gmaps.min.js': 'https://github.com/hpneo/gmaps/raw/master/gmaps.min.js',
			'src/plugins/gmaps/gmaps.min.js.map': 'https://github.com/hpneo/gmaps/raw/master/gmaps.min.js.map',
			'src/plugins/placepicker/jquery.placepicker.min.js': 'https://github.com/benignware/jquery-placepicker/raw/master/dist/js/jquery.placepicker.min.js'
		}
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
					{expand: true, cwd: 'src/plugins/fullcalendar/', src: ['fullcalendar.min.js', 'lang-all.js'], dest: '<%= build.eqdkppath %>/libraries/jquery/js/fullcalendar/'},
					{expand: true, cwd: 'src/plugins/gmaps/', src: ['gmaps.min.js', 'gmaps.min.js.map'], dest: '<%= build.eqdkppath %>/libraries/jquery/js/gmaps/'},
					{expand: true, cwd: 'src/plugins/placepicker/', src: ['jquery.placepicker.min.js'], dest: '<%= build.eqdkppath %>/libraries/jquery/js/placepicker/'},
					{expand: true, cwd: 'src/plugins/circles/', src: ['jquery.circles.min.js'], dest: '<%= build.eqdkppath %>/libraries/jquery/js/circles/'},
					{expand: true, cwd: 'src/plugins/jqplot/', src: ['jjqplot.canvasAxisTickRenderer.min.js','jqplot.canvasTextRenderer.min.js','jqplot.categoryAxisRenderer.min.js','jqplot.dateAxisRenderer.min.js','jqplot.highlighter.min.js','jqplot.mobile.min.js','jqplot.pieRenderer.min.js','jquery.jqplot.min.js','jquery.jqplot.css'], dest: '<%= build.eqdkppath %>/libraries/jquery/js/jqplot/'},
					{expand: true, cwd: 'dist/', src: ["core.js", "core.min.js", "core.css", "core.min.css"], dest: "<%= build.eqdkppath %>/libraries/jquery/core/"},
					{expand: true, cwd: 'src/fullcalendar/', src: ["fullcalendar.print.css"], dest: "<%= build.eqdkppath %>/templates/"},
					{expand: true, cwd: 'src/fullcalendar/', src: ["fullcalendar.css"], dest: "<%= build.eqdkppath %>/templates/base_template/"}
				]
			},
			templates: {
				files: [
					{src: ["src/template/eqdkp_modern/jquery-ui.theme.min.css"], dest: "<%= build.eqdkppath %>/templates/eqdkp_modern/jquery_tmpl.css"},
					{expand: true, cwd: 'src/template/eqdkp_modern/images/', src: ["*.png"], dest: "<%= build.eqdkppath %>/templates/eqdkp_modern/images/"}
					//{src: ["src/template/eqdkp_default/jquery-ui.min.css"], dest: "<%= build.eqdkppath %>/templates/eqdkp_default/jquery_tmpl.css"},
					//{expand: true, cwd: 'src/template/eqdkp_default/images/', src: ["*.png"], dest: "<%= build.eqdkppath %>/templates/eqdkp_default/images/"},
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
	
	// build the template files
	grunt.registerTask('pluginupdate', ['curl']);
};
